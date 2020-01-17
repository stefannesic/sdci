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
RUN wget http://homepages.laas.fr/smedjiah/tmp/gateway.js

ENTRYPOINT node gateway.js --local_ip "172.17.0.7" --local_port 8282 --local_name "gwf3" --remote_ip "172.17.0.3" --remote_port 8181 --remote_name "gwi" ; tail -f /dev/null



