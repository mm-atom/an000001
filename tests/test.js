const test = require('ava');

const { default: a } = require('../dist/index');

test('log日志', (t) => {
	a('日志信息');
	t.pass();
});
