import { newE2EPage } from '@stencil/core/testing';

describe('sb-star-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sb-star-rating></sb-star-rating>');
    const element = await page.find('sb-star-rating');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<sb-star-rating></sb-star-rating>');
    const component = await page.find('sb-star-rating');
    const element = await page.find('sb-star-rating >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
