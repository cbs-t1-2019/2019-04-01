// The URL is this page will be product.html?id=1, product.html?id=2 etc.
const productId = window.location.search.substring(4); // remove the ?id= part

// Find the product matching the id
const product = products.find(product => product.id === parseInt(productId, 10));
// And add it to the HTML.
document.getElementById('details').innerHTML = product.createHTML();