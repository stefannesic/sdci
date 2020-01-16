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

ENTRYPOINT node gateway.js --local_ip "172.17.0.3" --local_port 8181 --local_name "gwi" --remote_ip "172.17.0.2" --remote_port 8080 --remote_name "srv" ; tail -f /dev/null


