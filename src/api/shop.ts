import request from '@/http/http'

// 获取列表
export function getList(data) {
	return request({
		url: 'yiautos-psf-shop/finance/payment/page',
		method: 'POST',
		data
	});
}