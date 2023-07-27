FROM 347191758818.dkr.ecr.us-east-1.amazonaws.com/script-basic:js_v5

RUN mkdir -p /app/output
WORKDIR /app/output

ADD . /app/output

RUN echo 'installing nodejs dependencies'
RUN npm install

RUN echo 'running build script build.sh'
RUN sh build.sh

EXPOSE 3000
ENV AWS_LWA_PORT 3000
ENV PORT 3000

ENV NODE_ENV=production

CMD ./run.sh