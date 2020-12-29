import {SbStarRating} from '../sb-star-rating';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('sb-star-rating', () => {
  test('is defined', () => {
    const el = document.createElement('sb-star-rating');
    assert.instanceOf(el, SbStarRating);
  });

  test('should render with default values', async () => {
    const el = await fixture(html`<sb-star-rating></sb-star-rating>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="container">
        <div class="top" style="width: 0%;">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        <div class="bottom">
          <span data-value="5">★</span><span data-value="4">★</span><span data-value="3">★</span><span data-value="2">★</span><span data-value="1">★</span>
        </div>
      </div>
    `
    );
  });

  test('should render the div class "top" with width 40% when the value="2" is passed', async () => {
    const el = await fixture(html`<sb-star-rating value="2"></sb-star-rating>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="container">
        <div class="top" style="width: 40%;">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        <div class="bottom">
          <span data-value="5">★</span><span data-value="4">★</span><span data-value="3">★</span><span data-value="2">★</span><span data-value="1">★</span>
        </div>
      </div>
    `
    );
  });


  test('should not change the div class "top" width when disabled is passed', async () => {
    const el = await fixture(html`<sb-star-rating disabled="true"></sb-star-rating>`) as SbStarRating;
    const star = el.shadowRoot!.querySelector('span[data-value="3"]')! as SbStarRating;
    star.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <div class="container">
        <div class="top" style="width: 0%;">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        <div class="bottom">
          <span data-value="5">★</span><span data-value="4">★</span><span data-value="3">★</span><span data-value="2">★</span><span data-value="1">★</span>
        </div>
      </div>
    `
    );
  });

  test('should render the div class "top" with width 100% when the star data-value="5" is clicked', async () => {
    const el = await fixture(html`<sb-star-rating></sb-star-rating>`) as SbStarRating;
    const star = el.shadowRoot!.querySelector('span[data-value="5"]')! as SbStarRating;
    star.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <div class="container">
        <div class="top" style="width: 100%;">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        <div class="bottom">
          <span data-value="5">★</span><span data-value="4">★</span><span data-value="3">★</span><span data-value="2">★</span><span data-value="1">★</span>
        </div>
      </div>
    `
    );
  });

  test('should render the div class "top" with width 60% when the star data-value="3" is clicked', async () => {
    const el = await fixture(html`<sb-star-rating></sb-star-rating>`) as SbStarRating;
    const star = el.shadowRoot!.querySelector('span[data-value="3"]')! as SbStarRating;
    star.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <div class="container">
        <div class="top" style="width: 60%;">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        <div class="bottom">
          <span data-value="5">★</span><span data-value="4">★</span><span data-value="3">★</span><span data-value="2">★</span><span data-value="1">★</span>
        </div>
      </div>
    `
    );
  });
});
