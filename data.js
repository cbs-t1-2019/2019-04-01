class Product {
	constructor(id, name, description) {
		this.id = id;
		this.name = name;
		this.description = description;
	}

	createHTML() {
		// Option 1: Use regular strings
		return "<div class=\"product\">" +
			"<h3>" +
				this.name +
			"</h3>" +
			"<p>" + this.description + "</p>"+
			"<button data-product-id=" + this.id + "data-id=" + this.id + "onclick=\"onBuyMeClicked(this)\">Buy me!</button>" +
			"<a href=\"product.html?id=" + this.id +"\">View details</a>" +
		"</div>";

		// Option 2: use backticks, also called template strings. This makes it easier to write your string over multiple lines.
		return `
		<div class="product">
			<h3>
				${this.name}
			</h3>
			<p>${this.description}</p>
			<button data-product-id=${this.id} data-id=${this.id} onclick="onBuyMeClicked(this)">Buy me!</button>
			<a href="product.html?id=${this.id}">View details</a>
		</div>
		`;
	}
}

const products = [
	new Product(1, 'Product 1', 'Bacon ipsum dolor amet picanha burgdoggen tail turducken. Leberkas frankfurter beef, hamburger tenderloin shankle short ribs andouille pork tongue. Tri-tip pork chop flank, filet mignon tongue t-bone prosciutto salami fatback. Ribeye tail biltong shoulder, doner cupim bacon cow pig pork t-bone. Corned beef ham porchetta, beef ribs boudin picanha jowl leberkas cow hamburger sausage cupim. Pork belly ribeye boudin, beef ribs pork turkey andouille bresaola alcatra.'),
	new Product(2, 'Product 2', 'Landjaeger leberkas chuck, t-bone tail buffalo pancetta burgdoggen tongue shank filet mignon swine. Short ribs corned beef boudin, ground round meatloaf doner hamburger brisket. Tri-tip drumstick picanha landjaeger jowl strip steak, pancetta bresaola pork salami doner brisket turducken. Meatloaf flank fatback alcatra prosciutto t-bone pork loin brisket tail rump pork chop. Ham hock ball tip rump, biltong pancetta boudin salami prosciutto. Beef t-bone pig, frankfurter rump boudin flank landjaeger ham turducken. Kielbasa pork belly fatback beef ribs turducken meatloaf.'),
	new Product(3, 'Product 3', 'Lorem ipusm.')
];
