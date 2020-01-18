const request = require('request-promise');

const args = process.argv.splice(2);

async function requestHelper(url) {
	return request({ url: url })
		.then(response => {
			return JSON.parse(response)["pong"];
		})
		.catch(err => { console.log(err) });

}

async function getLatency(url, win) {
	let count = 0;
	let res = 0;
	for(i = 0; i < win; i++) {
		before = Date.now();
		after = await requestHelper(url);
		res += after - before;
		console.log(res)
	}

	return res / win;
}

getLatency(args[0], args[1]).then(res => console.log(res));
