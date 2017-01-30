FROM ruby:latest
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /curiositymotive.github.io
WORKDIR /curiositymotive.github.io
ADD Gemfile /curiositymotive.github.io/Gemfile
ADD Gemfile.lock /curiositymotive.github.io/Gemfile.lock
ADD package.json /tmp/package.json
RUN npm install -g gulp
RUN cd /tmp && npm install
RUN cp -a /tmp/node_modules /curiositymotive.github.io
RUN bundle install
ADD . /curiositymotive.github.io
