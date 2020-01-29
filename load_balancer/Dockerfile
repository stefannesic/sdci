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
RUN npm install http-forward
RUN npm install http
RUN npm install url
RUN npm cache clean -f
RUN npm install -g n
RUN n stable
RUN alias node='/usr/local/n/versions/node/12.14.1/bin/node'
RUN wget http://homepages.laas.fr/smedjiah/tmp/server.js
RUN cat load_balancer.js > /home/load_balancer.js

# set entry point for emulator gatekeeper
ENV VIM_EMU_CMD "node load_balancer.js --local_ip "172.17.0.11" --local_port 8181 --local_name "load_balancer" --remote_ip "172.17.0.2" --remote_port 8080 --remote_name "srv" ; tail -f /dev/null"
ENV VIM_EMU_CMD_STOP "echo 'Stopping the container now.'"

ENTRYPOINT /bin/bash
