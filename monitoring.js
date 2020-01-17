const request = require('request');

const args = process.argv.splice(2);

function getLatency(url, win) {
	let res = 0;
	for(i = 0; i < win; i++) {
		request(url, time = true, function(err, response) {
			console.log("Request time : ", response.elapsedTime);
			res += response.elapsedTime;
		})
	}
}

console.log("Mean response time : ", getLatency(args[0], args[1]));


