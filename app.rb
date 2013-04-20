require 'sinatra/base'
require 'sinatra/assetpack'

require 'soundcloud_client'
require 'user'
require 'shuffler'
require 'playlist_syncer'

module Smoothie
  class Application < Sinatra::Base

    UserSession = Struct.new(:username, :id, :access_token, :refresh_token)

    enable :sessions, :logging, :dump_errors, :raise_errors, :show_exceptions

    logger = ::File.open("log/sinatra.log", "a+")
    STDOUT.reopen(logger)
    STDERR.reopen(logger)

    Application.use Rack::CommonLogger, logger

    configure do
      set :session_secret, "session_secret" 
    end

    # Assets handling
    register Sinatra::AssetPack

    assets do
      css :application, [
        'css/normalize.css',
        'css/bootstrap.css',
        'css/bootstrap-responsive.css',
        'css/font-awesome.css',
        'css/flat-ui.css',
        'css/smoothie.css'
      ]

      js :app, [
        'js/vendor/jquery-1.9.0.min.js',
        'js/vendor/modernizr-2.6.2.min.js',
        'js/vendor/console.js'
      ]

      js :smoothie, [
        'js/vendor/underscore-1.4.4.min.js',
        'js/vendor/json2.js',
        'js/vendor/backbone-1.0.0.min.js',

        'js/vendor/soundcloud-sdk.js',

        'js/smoothie.js',

        'js/smoothie/models/track.js',

        'js/smoothie/modules/player.js',
        'js/smoothie/modules/playlist.js',

        'js/smoothie/views/track_view.js',
        'js/smoothie/views/controls_view.js',
        'js/smoothie/views/player_view.js'
      ]
    end

    # Landing page
    get '/' do
      haml :landing
    end

    # Soundcloud login
    get '/login' do
      # Create client object with app credentials
      soundcloud = Smoothie::SoundcloudClient.new

      # Redirect user to authorize URL
      soundcloud.client.authorize_url
      # redirect soundcloud.client.authorize_url
    end

    # Soundcloud login callback
    get '/login/callback' do

      # Save the user access and refresh tokens in session
      soundcloud = Smoothie::SoundcloudClient.new
      user_token = soundcloud.client.exchange_token :code => params[:code]

      current_user = Smoothie::SoundcloudClient.new(:access_token => user_token.access_token).client.get('/me')

      session[:user] = UserSession.new(
        current_user.username,
        current_user.id,
        user_token.access_token, 
        user_token.refresh_token
      )

      # Fetch its tracks if not already
      Smoothie::PlaylistSyncer.new('id' => session[:user].id, 'limit' => 'all').run

      redirect '/radio'
    end

    # Soundcloud logout
    get '/logout' do
      session[:user] = nil

      redirect '/'
    end

    # The player
    get '/radio' do
      # redirect '/login' unless session[:user]

      haml :radio
    end

    # The waiting page
    get '/processing' do
      haml :processing
    end


    # The playlist
    get '/api/v1/tracks.json' do
      content_type :json

      if !params[:id]
        response.status = 400
        return
      end

      offset = params[:offset].to_i
      seed = params[:seed] && params[:seed].to_i

      user = Smoothie::User.new(params[:id])
      shuffler = Smoothie::Shuffler.new(user.track_ids.members, seed)
      shuffled_tracks = shuffler.get(:offset => offset, :limit => 10)

      {:seed => shuffler.seed.to_s, :tracks => shuffled_tracks}.to_json
    end

    # 404 not found
    not_found do
      erb :'404', :layout => nil
    end

  end
end