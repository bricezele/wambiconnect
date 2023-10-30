FROM node:16.11.1-alpine3.11

RUN apk add --no-cache libc6-compat

USER node

ARG NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL:-"https://wambiconnect.com"}
ARG NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

ENV APP_HOME /home/node/app
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV PORT=${PORT:-3000}

RUN mkdir -p $APP_HOME
COPY --chown=node:node . $APP_HOME
WORKDIR $APP_HOME
RUN yarn install --pure-lockfile --ignore-scripts --prefer-offline
RUN yarn add eslint babel-plugin-styled-components @babel/preset-typescript @babel/core @jest/types
RUN yarn build

EXPOSE $PORT

CMD yarn start -p $PORT
