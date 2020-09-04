# ------Build phase------

FROM node:alpine as builder

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

COPY --from=builder /app/build /usr/share/nginx/html
