export function addToCart(payload) {
	return {
		type: 'CART_ADD',
		payload
	}
}

export function removeFromCart(payload) {
	return {
		type: 'CART_REMOVE',
		payload
	}
}

export function readFromCookie(payload) {
	return {
		type: 'READ_FROM_COOKIE',
		payload
	}
}