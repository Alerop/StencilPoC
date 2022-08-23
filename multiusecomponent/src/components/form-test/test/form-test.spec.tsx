import { newSpecPage } from '@stencil/core/testing';
import { FormTest } from '../form-test';

describe('form-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormTest],
      html: `<form-test></form-test>`,
    });
    expect(page.root).toEqualHtml(`
      <form-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </form-test>
    `);
  });
});
