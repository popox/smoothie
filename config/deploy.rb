# c.f https://gist.github.com/wlangstroth/3740923
require "bundler/capistrano"
require "rvm/capistrano"

set :application, "smoothie"
set :repository,  "git://github.com/MrRuru/smoothie.git"

# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

set  :host, 'smoothie.fm'
role :web, host                          # Your HTTP server, Apache/etc
role :app, host                          # This may be the same as your `Web` server

set :rack_env, :production
set :user, 'ec2-user'

set :use_sudo, false

set :deploy_to, "/srv/#{application}"
set :unicorn_conf, "#{current_path}/config/unicorn.rb"
set :unicorn_pid, "#{shared_path}/pids/unicorn.pid"

set :bundle_dir, "#{shared_path}/bundle"
set :rvm_path, "/home/#{user}/.rvm"


after 'deploy:update_code',         'deploy:additional_symlinks'
# after 'deploy:additional_symlinks', 'deploy:grunt'
after 'deploy:restart',             'deploy:cleanup'
after 'deploy:restart',             'resque:restart'

namespace :deploy do
 
  task :restart do
    deploy.stop
    deploy.start
  end
 
  task :start do
    run "cd #{current_path} && bundle exec unicorn -c #{unicorn_conf} -E #{rack_env} -D"
  end
 
  task :stop do
    run "if [ -f #{unicorn_pid} ]; then kill -QUIT `cat #{unicorn_pid}`; fi"
  end

  task :additional_symlinks do
    puts "Adding symlinks for "
    run  "ln -s #{shared_path}/sockets #{release_path}/tmp/sockets"
    run  "ln -s #{shared_path}/node_modules #{release_path}/node_modules"
  end

  # task :grunt do
  #   puts "Building the frontend app"
  #   run "cd #{release_path} && n 0.10.5 && npm install && bower install && grunt build"
  # end

end

namespace :resque do

  task :start do
    run "cd #{current_path}; bundle exec resque-pool --daemon --environment #{rack_env} start"
  end

  task :stop do
    pid = "#{current_path}/tmp/pids/resque-pool.pid"
    run "kill -2 `cat #{pid}`"
  end

  task :restart do
    resque.stop
    resque.start
  end

end
