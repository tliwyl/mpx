import { createPage } from '@mpxjs/core';
createPage({
	onLoad() { },
	jump() {
		wx.redirectTo({
			url: '/packCenter/pages/index'
		})
	},
	onReady() {
		console.log(this);
	}
});