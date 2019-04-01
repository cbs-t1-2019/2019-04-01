// Creating html when the page loads
let html = '';
for (const product of products) {
	html += product.createHTML();
}
document.getElementById('products').innerHTML = html;

// This function is called when you click the buy me button. It is assigned with onclick in the createHTML function of the product class.
function onBuyMeClicked(element) {
	// we use element.dataset to know the id of the product that was clicked. data is assigned by adding data-[name] attributes in the HTML (see the createHTML function)
	const clickedProduct = products.find(product => product.id == element.dataset.productId)
	console.log(clickedProduct);
}

// This function filters products by name
document.getElementById('search').onkeyup = function(event) {
	const query = event.target.value;

	let html = '';
	for (const product of products) {
		if (product.name.includes(query)) {
			html += product.createHTML();
		}
	}
	document.getElementById('products').innerHTML = html;
}