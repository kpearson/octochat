# Octochat

[Trey Tomlinson](https://github.com/treyx)<br>
[Jeff Gu](https://github.com/jgu2160)<br>
[Kit Pearson](https://github.com/kpearson)

[![Code Climate](https://codeclimate.com/github/kpearson/octochat-rails/badges/gpa.svg)](https://codeclimate.com/github/kpearson/octochat-rails)
[![Codeship Status for kpearson/octochat-rails](https://codeship.com/projects/062604a0-f857-0132-30bb-36c425669d79/status?branch=master)](https://codeship.com/projects/86584)

Octochat is an asynchronous chat application centered around the Github social ecosystem. Using a microservice architecture based mainly on Ruby on Rails combined with a Node.js websocket publication server and redis pub/sub feature for good mesure.

This repo is the Node.js component.  [Follow this link to the nessisary companiaon Rails app](http://github.com/kpearson/octochat-rails)

### Local Dev Installation

With both repos cloned into sepererate directorys
* Ensure you have a redis server is running locally

* inside the Rails app directory:
  * `bundle && rake db:setup`
  * Include an environment variable `SOCKET_URL` set to the local url
  * Run your rails server on any open port besides 3000 `rails s -p 8000`

* Inside the Node app directory:
  * `npm install`
  * `npm install nodemon`
  * Start the node app `npm start`
