var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
let SbStarRating = class SbStarRating extends LitElement {
    constructor() {
        super(...arguments);
        this.value = 0;
        this.disabled = false;
        this.styles = { width: '0' };
    }
    connectedCallback() {
        super.connectedCallback();
        this._render();
    }
    render() {
        return html `
      <div class="container">
        <div class="top" style=${styleMap(this.styles)}>
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        <div class="bottom" @click="${this._handleClick}">
          <span data-value="5">★</span><span data-value="4">★</span><span data-value="3">★</span><span data-value="2">★</span><span data-value="1">★</span>
        </div>
      </div>
    `;
    }
    _handleClick(event) {
        const numberEventValue = Number(event.target.dataset.value);
        if (!this.disabled && this.value !== numberEventValue) {
            this.value = numberEventValue;
            this._render();
        }
    }
    _render() {
        this.styles = { width: `${(this.value * 10) * 2}%` };
    }
};
SbStarRating.styles = css `
    :host {
      width: 8.8rem;
      height: 2rem;
      display: inline-block;
      overflow: hidden;
      user-select: none;
      vertical-align: middle;
      box-sizing: border-box;
    }

    .container {
      color: var(--star-default-color, #333);
      cursor: pointer;
      position: relative;
      font-size: 2rem;
    }

    .container .top {
      color: var(--star-selected-color, #e8bd06);
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 0;
      z-index: 1;
    }

    .container:hover .top {
      display: none;
    }

    .container .bottom {
      display: block;
      direction: rtl;
      position: absolute;
      top: 0;
      left: 0;
    }

    .container .bottom > span:hover,
    .container .bottom span:hover ~ span {
      color: var(--star-hover-color, #e7bd06);
    }

    :host([disabled]) .container {
      cursor: no-drop;
    }
    
    :host([disabled]) .container .top {
      display: block;
    }
    
    :host([disabled]) .container .bottom > span:hover,
    :host([disabled]) .container .bottom > span:hover ~ span {
      color: inherit;
    }
  `;
__decorate([
    property({ type: Number })
], SbStarRating.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], SbStarRating.prototype, "disabled", void 0);
SbStarRating = __decorate([
    customElement('sb-star-rating')
], SbStarRating);
export { SbStarRating };
//# sourceMappingURL=sb-star-rating.js.map