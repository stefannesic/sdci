FROM ubuntu:trusty

WORKDIR /

ADD . /

RUN apt-get update
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN npm config set registry="http://registry.npmjs.org/"
RUN apt-get install wget -y
RUN npm install express
RUN npm install yargs@next
RUN npm install systeminformation
RUN wget http://homepages.laas.fr/smedjiah/tmp/device.js

ENTRYPOINT node device.js --local_ip "172.17.0.5" --local_port 9001 --local_name "dev1" --remote_ip "172.17.0.4" --remote_port 8282 --remote_name "gwf1" --send_period 3000 ; tail -f /dev/null


