export const androidDefaultCapabilities = (
  appPackage: string,
  appActivity: string
) => {
  return {
    appPackage: appPackage,
    appActivity: appActivity,
    newCommandTimeout: 1800,
    deviceName: "Pixel",
    platformName: "Android",
    automationName: "UiAutomator2",
    autoAcceptAlerts: true,
    noReset: true,
  };
};
