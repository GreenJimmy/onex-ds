import { expect, fixture, html } from '@open-wc/testing';
import type OneXBreadcrumb from './breadcrumb';

describe('<onex-breadcrumb>', () => {
  let el: OneXBreadcrumb;

  describe('when provided a standard list of el-breadcrumb-item children and no parameters', () => {
    before(async () => {
      el = await fixture<OnexBreadcrumb>(html`
        <onex-breadcrumb>
          <onex-breadcrumb-item>Catalog</onex-breadcrumb-item>
          <onex-breadcrumb-item>Clothing</onex-breadcrumb-item>
          <onex-breadcrumb-item>Women's</onex-breadcrumb-item>
          <onex-breadcrumb-item>Shirts &amp; Tops</onex-breadcrumb-item>
        </onex-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should render onex-icon as separator', () => {
      expect(el.querySelectorAll('onex-icon').length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll('onex-breadcrumb-item');
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute('aria-current', 'page');
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<OnexBreadcrumb>(html`
        <onex-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <onex-breadcrumb-item>First</onex-breadcrumb-item>
          <onex-breadcrumb-item>Second</onex-breadcrumb-item>
          <onex-breadcrumb-item>Third</onex-breadcrumb-item>
        </onex-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should accept "separator" as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=separator]')!;
      const childNodes = slot.assignedNodes({ flatten: true });

      expect(childNodes.length).to.eq(1);
    });

    it('should replace the onex-icon separator with the provided separator', () => {
      expect(el.querySelectorAll('.replacement-separator').length).to.eq(4);
      expect(el.querySelectorAll('onex-icon').length).to.eq(0);
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<OnexBreadcrumb>(html`
        <onex-breadcrumb>
          <onex-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </onex-breadcrumb-item>
          <onex-breadcrumb-item>First</onex-breadcrumb-item>
          <onex-breadcrumb-item>Second</onex-breadcrumb-item>
          <onex-breadcrumb-item>Third</onex-breadcrumb-item>
        </onex-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<OnexBreadcrumb>(html`
        <onex-breadcrumb>
          <onex-breadcrumb-item>First</onex-breadcrumb-item>
          <onex-breadcrumb-item>Second</onex-breadcrumb-item>
          <onex-breadcrumb-item>Third</onex-breadcrumb-item>
          <onex-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </onex-breadcrumb-item>
        </onex-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });
});
