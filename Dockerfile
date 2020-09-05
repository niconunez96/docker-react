# ------Build phase------

FROM node:alpine

# Change to app directory
WORKDIR "/app"

COPY package.json .

# Install dependencies
RUN npm install

COPY . .

# Create folder build
RUN npm run build


# ------Run phase------

FROM nginx
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
