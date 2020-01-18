FROM ubuntu:trusty

WORKDIR /

ADD . /

RUN apt-get update
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN npm config set registry="http://registry.npmjs.org/"
RUN apt-get install wget -y
RUN npm install express
RUN npm install request
RUN npm install yargs@next
RUN npm install systeminformation
RUN npm cache clean -f
RUN npm install -g n
RUN n stable
RUN alias node='/usr/local/n/versions/node/12.14.1/bin/node'
RUN wget http://homepages.laas.fr/smedjiah/tmp/device.js

ENTRYPOINT node device.js --local_ip "172.17.0.8" --local_port 9001 --local_name "dev2" --remote_ip "172.17.0.6" --remote_port 8282 --remote_name "gwf2" --send_period 3000 ; tail -f /dev/null


