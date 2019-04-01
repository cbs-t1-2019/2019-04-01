const users = [
 { username: 'foo' },
 { username: 'bar' },
 { username: 'baz' }
]

/*
for (const user of users) {} is equivalent to the code below. For of is a shorther way of writing a loop if you don't need the i
for (let i = 0 ; i < users.length; i++) {
	let user = users[i];
}
*/

let newUsername = 'foo';
// Option 1: Write a function that checks whether the user already exists and sets a boolean variable
let userExists = false;
for (const user of users) {
	if (user.username == newUsername) {
		console.log('already registered');
		userExists = true;
	}
}

// Option 2: Use the built-in array.find function to find a user that matchest he username.
let userExists = users.find(function (user) {
	return user.username == newUsername;
});

if (!userExists) {
	console.log('not registered');
} else {
	console.log('already registered');
}
