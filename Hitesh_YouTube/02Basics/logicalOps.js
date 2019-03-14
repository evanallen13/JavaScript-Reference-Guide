// && - AND operator - Both need to be true
// || - OR operator - One side need to be true
// ! - NOT operator/reverse logic

let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

console.log(' ')

if (isVerified && isLoggedIn && hasPaymentToken) {
	console.log('Greating message to user')
	console.log('Grant access to paid course')
}else if (isVerified || isGuest) {
	console.log('Allow free previews')
}else {
	console.log('Please contact admin')
}
