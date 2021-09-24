import { remote, Browser } from "webdriverio";

export const setUp = async (capabilities: any): Promise<Browser<any>> => {
  return await remote({
    path: "/wd/hub",
    port: 4723,
    capabilities: capabilities,
  });
};

export const tearDown = async (driver: Browser<any>) => {
  driver.deleteSession();
};
