FROM ruby:latest
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs yarn
RUN mkdir /curiositymotive
WORKDIR /curiositymotive
ADD Gemfile /curiositymotive/Gemfile
ADD Gemfile.lock /curiositymotive/Gemfile.lock
ADD package.json /tmp/package.json
RUN yarn global add gulp
RUN cd /tmp && yarn
RUN cp -a /tmp/node_modules/ /curiositymotive/
RUN bundle install
ADD . /curiositymotive
