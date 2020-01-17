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


ENTRYPOINT node gateway.js --local_ip "172.17.0.3" --local_port 8181 --local_name "gwi" --remote_ip "172.17.0.2" --remote_port 8080 --remote_name "srv" ; tail -f /dev/null


