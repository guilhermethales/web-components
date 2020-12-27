
// PROS of the pure js approach
// Familiar JS concepts
// Consumed just like any other JS file - just import a use
// Can be easily transpiled to support older browsers
// Template strings can be used to make weiting HTML within JS easier

// CONS
// Writing HTML & CSS within JS can feel unnatural and add bloat to your code, even with template strings
// many text editors and IDEs lack full template string support

const template = document.createElement('template');
template.innerHTML = `
  <style>
    p {
      color: red;
    }
  </style>
  <p>My Web Component!</p>
`;

class MyComponent extends HTMLElement {
   constructor() {
     super();
     this._shadowRoot = this.attachShadow({ mode:'open' });
   }

   connectedCallback() {
     this._shadowRoot.appendChild(template.content.cloneNode(true));
   }
}
window.customElements.define('my-component', MyComponent);
