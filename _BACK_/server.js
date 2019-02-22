const X = require('express');
const APP = X();
const PORT = 8497;

APP.use('/', X.static(__dirname + '/_SITE_/'));
APP.use('project2', X.static(__dirname + '/_P2_/'));

APP.listen(PORT, () => {
  	console.log(`\r\nNODE ::: I started my back end server on port ${PORT}.\r\n`);
  });