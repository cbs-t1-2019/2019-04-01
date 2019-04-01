// This is a simplified version of array.find - A function that filters an array based on the result of a callback.

/*
Remember that I can name the arguments to the function (in this case array and callback) whatever I want - There is nothing special about the argument being named callback, it's only to help myself remember what it is.
*/
function findWithCallback(array, callback) {
	for (const element of array) {
		// We call the callback like we would any other function - Using the name and ()
		if (callback(element)) {
			return element;
		}
	}

}

const users = [
 { username: 'foo' },
 { username: 'bar' },
 { username: 'baz' }
]

let newUsername = 'bar';
let userExists = findWithCallback(users, function (user) {
	return user.username == newUsername;
});
console.log(userExists);