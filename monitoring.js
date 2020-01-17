const request = require('request');

const args = process.argv.splice(2);

async function getLatency(url, win) {
	let res = 0;
	for(i = 0; i < win; i++) {
		const before = Date.now();
		request(url, time = true, function(err, response) {
			after = JSON.parse(response.body)["pong"];
			res += after - before
			console.log(i)
			if(i === (win-1)) {
				console.log(res);
				return res / win;
			}
		})
	}
	return res / win;
}

async function main() {
	let res = await getLatency(args[0], args[1]);
	console.log(res);
}

main()
