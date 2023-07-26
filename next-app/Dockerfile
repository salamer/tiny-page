FROM node:16-alpine

ENV APP_HOME /app
WORKDIR $APP_HOME
RUN npm i -g pnpm
COPY . ${APP_HOME}/
# COPY js-api ${APP_HOME}/js-api
# RUN cd ${APP_HOME}/js-api && pnpm install
# RUN cd ${APP_HOME}/js-api && pnpm run build
# # # COPY *.json ${APP_HOME}/
# # COPY pages ${APP_HOME}/pages
# # COPY public ${APP_HOME}/public
# # # COPY *.js ${APP_HOME}
# # # COPY * ${APP_HOME}
# # # COPY src ${APP_HOME}/src
# RUN  pnpm install
# RUN  pnpm link ${APP_HOME}/js-api
# RUN  pnpm install --save axios
RUN  cd ${APP_HOME} && pnpm tsc
RUN  cd ${APP_HOME} && pnpm run build

EXPOSE 3000 16800 16801
ENTRYPOINT npm run start