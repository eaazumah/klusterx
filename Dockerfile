# ------------dev env-----------
FROM node:14-alpine as dev

# set the working direction
WORKDIR /app

# install app dependencies
COPY yarn.lock ./

COPY package.json ./

RUN yarn install

# add app
COPY . ./

CMD [ "yarn", "start" ]

# ----------build env----------------
FROM node:14-alpine as build

# set the working direction
WORKDIR /app

# install app dependencies
COPY yarn.lock ./

COPY package.json ./

RUN yarn install

# add app
COPY . ./

RUN yarn build

# ------------production env----------------
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]