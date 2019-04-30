
var os = require('os');
var time = require('../modules/time');
// var colors = require('colors');
function getOSinfo() {
	var type = os.type();

	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
  }

	var release = os.release();
	var cpu = os.cpus()[0].model;
	// var time = os.time();
	var userInfo = os.userInfo();

	console.log('System: ' , type);
	console.log('Release: ', release);
	console.log('CPU model: ', cpu);
  // console.log('Uptime: ', (time / 60 ).toFixed(0), 'min');
  // console.log('Uptime: ', (time / 60).toFixed(0), 'h');
	console.log('User name: ', userInfo.username);
  console.log('Home dir: ', userInfo.homedir);
  time.newTime();
};

exports.print = getOSinfo;