FROM node:8.9.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/
COPY ./.babelrc /usr/src/app/
COPY ./.editorconfig /usr/src/app/
COPY ./.eslintrc /usr/src/app/
COPY ./.travis.yml /usr/src/app/
COPY ./netlify.toml /usr/src/app/
COPY ./webpack.config.babel.js /usr/src/app/
RUN npm install

# COPY . /usr/src/app/

EXPOSE 5000
CMD ["npm","start"]
