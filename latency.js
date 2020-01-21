const request = require('request-promise');
const express = require('express');
const app = express();
app.use(express.json()); 

const E_OK              = 200;
const E_CREATED         = 201;
const E_FORBIDDEN       = 403;
const E_NOT_FOUND       = 404;
const E_ALREADY_EXIST   = 500;

const argv = require('yargs').argv;
const LOCAL_ENDPOINT = {IP: argv.local_ip, PORT: argv.local_port, NAME: argv.local_name};

async function requestHelper(url) {
	return request({ url: url, time: true })
		.then(response => {
			return JSON.parse(response)["pong"];
		})
		.catch(err => { console.log(err) });


}

async function getLatency(url, win) {
	let res = 0;
	for(i = 0; i < win; i++) {
		before = Date.now();
		after = await requestHelper(url);
		res += Date.now() - before;
	}

	return res / win;
}

app.get('/latency', async function(req, res) {
	const gwip = req.body["gwip"];
	const win = req.body["window"];
	const mean_latency = await getLatency(gwip, win);
	res.status(E_OK).send({latency: mean_latency});
})

app.listen(LOCAL_ENDPOINT.PORT , function () {
    console.log(LOCAL_ENDPOINT.NAME + ' listening on : ' + LOCAL_ENDPOINT.PORT );
});
