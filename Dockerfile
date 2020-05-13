# stage 1 - build react static file
FROM node:14-alpine as build_react

WORKDIR /app

COPY . /app/

RUN npm install --silent --no-audit --only=prod
RUN npm run build

# stage 2 - serve react build with nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /etc/nginx/nginx.conf

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build_react /app/build/ /usr/share/nginx/html/

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
