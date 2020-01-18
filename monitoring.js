const request = require('request-promise');

const args = process.argv.splice(2);

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

getLatency(args[0], args[1]).then(res => console.log(res));
