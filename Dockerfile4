FROM node:latest

WORKDIR /

ADD . /

RUN apt-get update \
        && apt-get install wget \
        && npm install express \
        && npm install request \
        && npm install yargs \
        && npm install systeminformation \
        && wget http://homepages.laas.fr/smedjiah/tmp/gateway.js

ENTRYPOINT node gateway.js --local_ip "172.17.0.4" --local_port 8282 --local_name "gwf1" --remote_ip "172.17.0.3" --remote_port 8181 --remote_name "gwi" ; tail -f /dev/null



