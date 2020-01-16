FROM node:latest

WORKDIR /

ADD . /

RUN apt-get update \
	&& apt-get install wget \
	&& npm install express \
	&& npm install yargs \
	&& npm install systeminformation \
	&& wget http://homepages.laas.fr/smedjiah/tmp/server.js

ENTRYPOINT node server.js --local_ip "172.17.0.2" --local_port 8080 --local_name "srv" ; tail -f /dev/null

