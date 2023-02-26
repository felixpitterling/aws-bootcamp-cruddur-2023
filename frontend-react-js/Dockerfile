FROM node:16.18

ENV PORT=3000

COPY . /frontend-react-js
WORKDIR /frontend-react-js
RUN npm install
EXPOSE ${PORT}
# HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1   
CMD ["npm", "start"]





# NON_MULTI (DEV) EXAMPLE
# FROM node:16.18 AS development
# ENV NODE_ENV development
# ENV PORT=3000

# WORKDIR /frontend-react-js
# COPY package.json .
# COPY package-lock.json .
# RUN npm i

# COPY . .
# EXPOSE ${PORT}
# CMD ["npm", "start"]




# MULTI (PROD) EXAMPLE
# FROM node:16.18 AS builder
# ENV NODE_ENV production
# ENV PORT=3000

# WORKDIR /frontend-react-js
# COPY package.json .
# COPY package-lock.json .
# RUN npm i --production

# COPY . .
# EXPOSE ${PORT}
# RUN npm run build


# # Bundle static assets with nginx
# FROM nginx:1.21.0-alpine as production
# ENV NODE_ENV production
# # Copy built assets from builder
# COPY --from=builder /frontend-react-js/build /usr/share/nginx/html
# # Add your nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# # Expose port
# EXPOSE 80
# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]