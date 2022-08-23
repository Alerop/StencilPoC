import { newE2EPage } from '@stencil/core/testing';

describe('form-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<form-test></form-test>');

    const element = await page.find('form-test');
    expect(element).toHaveClass('hydrated');
  });
});
