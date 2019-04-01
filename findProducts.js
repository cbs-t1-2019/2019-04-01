const products = [{
	name: 'Product ab'	
}, {
	name: 'Product abc'
}, {
	name: 'Product def'
}];

// Imagine this comes from an input field in HTML
var query = 'ab';

// We want to find all products matching the thing that the user typed, which is saved in the query field.
// See also the file findWithCallback.js for an example of how to write our own filter function that takes a callback.

// Option 1: Write a function to search through the array ourselves
function search(query) {
	// We create an array to hold all the elements that match.
	var result = [];
	for (const product of products) {
		if (product.name.includes(query)) {
			// We cannot use return product here, because that will only return the first product that matches
			result.push(product);
		}
	}	

	return result;
}
console.log(search(query))

// Option 2: Use the built-in array filter function. The function is defined on the array class, so we can use it as array.filter
// The filter function works by passing a function into the function. The function that we pass in is called a 'callback' - Because it allows the filter code, which lives somewhere in the javascript engine to 'call back' to our code when in needs to know if a product should be added to the filtered array.
console.log(products.filter(function (product) {
	return product.name.includes(query);
}));

// Option 3: Use the built-in array filter function, with an arrow function as callback. This is almost equivalent to option 2, but is slightly shorther.
console.log(products.filter(product => product.name.includes(query)));
