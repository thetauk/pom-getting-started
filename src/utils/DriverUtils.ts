import { Browser, Element } from "webdriverio";

export const MAX_ELEMENT_THRESHOLD = 60000;

export const findElement = async (
  driver: Browser<any> | null,
  elementLocator: string,
  timeout: number = MAX_ELEMENT_THRESHOLD
): Promise<Element<any>> => {
  const e: Element<any> = await driver.$(elementLocator);
  await e.waitForExist({ timeout: timeout });
  return e;
};

export const clickElement = async (
  driver: Browser<any> | null,
  elementLocator: string,
  timeout: number = MAX_ELEMENT_THRESHOLD
): Promise<void> => {
  const e: Element<any> = await findElement(
    driver,
    elementLocator,
    timeout
  );
  await e.click();
};

export const setValueOfElement = async (
  driver: Browser<any> | null,
  elementLocator: string,
  timeout: number = MAX_ELEMENT_THRESHOLD,
  value: string = ""
): Promise<void> => {
  const e: Element<any> = await findElement(
    driver,
    elementLocator,
    timeout
  );
  await e.setValue(value);
};
