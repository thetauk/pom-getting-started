import { Browser, Element } from "webdriverio";

export const MAX_ELEMENT_THRESHOLD = 60000;

export const findElement = async (
  driver: Browser<any> | null,
  elementLocator: string,
  timeout: number = MAX_ELEMENT_THRESHOLD
): Promise<Element<any>> => {
  const loginButton: Element<any> = await driver.$(elementLocator);
  await loginButton.waitForExist({ timeout: timeout });
  return loginButton;
};

export const clickElement = async (
  driver: Browser<any> | null,
  elementLocator: string,
  timeout: number = MAX_ELEMENT_THRESHOLD
): Promise<void> => {
  const loginButton: Element<any> = await findElement(
    driver,
    elementLocator,
    timeout
  );
  await loginButton.click();
};

export const setValueOfElement = async (
  driver: Browser<any> | null,
  elementLocator: string,
  timeout: number = MAX_ELEMENT_THRESHOLD,
  value: string = ""
): Promise<void> => {
  const loginButton: Element<any> = await findElement(
    driver,
    elementLocator,
    timeout
  );
  await loginButton.setValue(value);
};
