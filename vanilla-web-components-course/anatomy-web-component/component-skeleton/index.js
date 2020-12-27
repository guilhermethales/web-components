class ComponentSkeleton extends HTMLElement {
	constructor() {
		super();
		// Private variables
		this._private1 = null;
		// Create a Shadow Root
		this._root = this.attachShadow({ mode: "open" });
	}
	connectedCallback() {
		// Add an initial template
		this._root.innerHTML = `
			<p id="text">My Web Component Skeleton...</p>
		`;
		// Store important element for later use (prefixing DOM elements with $)
		this._$text = this._root.querySelector("#text");
	}
	// Private methods
	_render() {
		// Selectively update only parts of the template which need to change
		this._$text.innerText = "...is awesome!";
	}
	// Observe attribute changes
	static get observedAttributes() {
		return ["an-important-attribute"];
	}
	// React to attribute changes
	attributeChangedCallback(name, oldValue, newValue) {
		// Do Stuff
	}
	// Use setter and getters to create an API for your component
	set property1(data) {
		if (this._private1 === data) return;
		this._private1 = data;
	}
	get property1() {
		return this._private1;
	}
}
// Use unique but descriptive element and class names
window.customElements.define("component-sekeleton", ComponentSkeleton);