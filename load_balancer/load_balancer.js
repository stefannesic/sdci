var http = require('http');
var url = require('url');
const express = require('express');
const app = express();
app.use(express.json());
const forward = require('http-forward')
let index = 1;

const argv = require('yargs').argv;
const LOCAL_ENDPOINT = {IP: argv.local_ip, PORT: argv.local_port, NAME: argv.local_name};

function deploy_lb(gwip1, gwip2) {
	http.createServer(function (req, res) {
        	index = 1 - index;
        	if (index == 0) {
        		req.forward = {target: gwip1};
        		forward(req, res);
        	}
        	if (index == 1) {
        		req.forward = {target: gwip2};
        		forward(req, res);
        	}
	}).listen(8888);
}

app.post('/loadbalancer', async function(req, res) {
        const gwip1 = req.body["gwip1"];
        const gwip2 = req.body["gwip2"];
	deploy_lb(gwip1, gwip2);
	res.sendStatus(200);
})

app.listen(LOCAL_ENDPOINT.PORT , function () {
    console.log(LOCAL_ENDPOINT.NAME + ' listening on : ' + LOCAL_ENDPOINT.PORT );
});
