import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-sb-star-rating',
  styleUrl: 'stencil-sb-star-rating.css',
  shadow: true
})
export class MyEmbeddedComponent {
  @Prop() value: number = 0;
  @Prop() disabled: boolean = false;

  handleClick(event) {
    const numberEventValue = Number(event.target.dataset.value);

    if(!this.disabled && this.value !== numberEventValue) {
      this.value = numberEventValue;
    }
  }

  renderStar() {
    return `${(this.value * 10) * 2}%`;
  }

  render() {
    return (
      <div class="container">
        <div class="top" style={{ width: this.renderStar() }}>
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        <div class="bottom" onClick={(e) => this.handleClick(e)}>
          <span data-value="5">★</span><span data-value="4">★</span><span data-value="3">★</span><span data-value="2">★</span><span data-value="1">★</span>
        </div>
      </div>
    )
  }
}
