import { Browser } from "webdriverio";

export class Page {
  driver: Browser<any>;
  elements: {
    [key: string]: string;
  };

  async build(driver) {
    this.driver = driver;
    await this.assertPageVisible();
  }

  async assertPageVisible() {}
}
