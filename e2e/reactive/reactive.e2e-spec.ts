import { browser } from 'protractor';
import { Key } from 'selenium-webdriver';
import { heroes, toJson } from '../../example/data/hero';
import { ReactivePage } from './reactive.po';

describe('Frontal reactive', () => {
  const page = new ReactivePage();

  it('should initialize with the selected hero', () => {
    page.navigateTo();
    expect(page.getSelectedItem().getAttribute('value')).toBe(toJson(heroes[3]));
  });

  it('should initialize with the hero name in the input field', () => {
    expect(page.getInput().getAttribute('value')).toBe(heroes[3].name);
  });

  describe('clear the input', () => {
    it('should also clear the form value', () => {
      Array.from({ length: 9 }, () => page.getInput().sendKeys(Key.BACK_SPACE)); // lets clear the input
      expect(page.getSelectedItem().getAttribute('value')).toBe('');
    });
  });

  describe('selecting an item', () => {
    it('should also set the model', () => {
      page.getSecondInMenu().click();
      expect(page.getSelectedItem().getAttribute('value')).toBe(toJson(heroes[1]));
    });
  });

  describe('reset the model', () => {
    it('should also set the model', () => {
      page.getResetButton().click();
      expect(page.getSelectedItem().getAttribute('value')).toBe(toJson(heroes[3]));
    });
  });
});
