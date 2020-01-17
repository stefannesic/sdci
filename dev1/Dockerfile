FROM node:latest

WORKDIR /

ADD . /

RUN apt-get update \
        && apt-get install wget \
        && npm install express \
        && npm install request \
        && npm install yargs \
        && wget http://homepages.laas.fr/smedjiah/tmp/device.js

ENTRYPOINT node device.js --local_ip "172.17.0.5" --local_port 9001 --local_name "dev1" --remote_ip "172.17.0.4" --remote_port 8282 --remote_name "gwf1" --send_period 3000 ; tail -f /dev/null


