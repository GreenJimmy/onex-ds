import { expect, fixture, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import { html } from 'lit';
import sinon from 'sinon';
import type OneXMenuItem from '../menu-item/menu-item';
import type OneXMenu from './menu';

interface Payload {
  item: OneXMenuItem;
}

const createTestMenu = (): Promise<OnexMenu> => {
  return fixture<OnexMenu>(html`
    <onex-menu>
      <onex-menu-item value="test1">test1</onex-menu-item>
      <onex-menu-item value="test2">test2</onex-menu-item>
      <onex-menu-item value="test3">test3</onex-menu-item>
      <onex-menu-item value="testDisabled" disabled>testDisabled</onex-menu-item>
    </onex-menu>
  `);
};

const clickOnItemWithValue = (menu: OneXMenu, value: string) => {
  const clickedItem = menu.querySelector(`[value=${value}]`);
  if (clickedItem) {
    (clickedItem as OneXMenuItem).click();
  }
};

const spyOnSelectHandler = (menu: OneXMenu): sinon.SinonSpy => {
  const selectHandler = sinon.spy();
  menu.addEventListener('onex-select', selectHandler);
  return selectHandler;
};

const expectSelectHandlerToHaveBeenCalledOn = async (
  selectHandler: sinon.SinonSpy,
  expectedValue: string
): Promise<void> => {
  await waitUntil(() => selectHandler.called);
  expect(selectHandler).to.have.been.calledOnce;
  const event = selectHandler.args[0][0] as CustomEvent;
  const detail = event.detail as Payload;
  expect(detail.item.value).to.equal(expectedValue);
};

describe('<onex-menu>', () => {
  it('emits onex-select on click of an item returning the selected item as payload', async () => {
    const menu = await createTestMenu();
    const selectHandler = spyOnSelectHandler(menu);

    clickOnItemWithValue(menu, 'test1');

    await expectSelectHandlerToHaveBeenCalledOn(selectHandler, 'test1');
  });

  it('can be selected via keyboard', async () => {
    const menu = await createTestMenu();
    const selectHandler = spyOnSelectHandler(menu);

    await sendKeys({ press: 'Tab' });
    await sendKeys({ press: 'ArrowDown' });
    await sendKeys({ press: 'Enter' });

    await expectSelectHandlerToHaveBeenCalledOn(selectHandler, 'test2');
  });

  it('can be selected via type to select', async () => {
    const menu = await createTestMenu();
    const selectHandler = spyOnSelectHandler(menu);

    await sendKeys({ press: 'Tab' });
    await sendKeys({ type: 'test3' });
    await sendKeys({ press: 'Enter' });

    await expectSelectHandlerToHaveBeenCalledOn(selectHandler, 'test3');
  });

  it('does not select disabled items', async () => {
    const menu = await createTestMenu();
    const selectHandler = spyOnSelectHandler(menu);

    await sendKeys({ press: 'Tab' });
    await sendKeys({ type: 'testDisabled' });
    await sendKeys({ press: 'Enter' });

    await expectSelectHandlerToHaveBeenCalledOn(selectHandler, 'test1');
  });
});
