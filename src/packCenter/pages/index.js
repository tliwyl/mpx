import { createPage } from '@mpxjs/core';

createPage({
	onLoad() { },
	jump() {
		wx.redirectTo({
			url: '/packGroup/pages/index',
		});
	},
	onReady() {
		console.log(this);
	},
});