"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.androidDefaultCapabilities = void 0;
const androidDefaultCapabilities = (appPackage, appActivity) => {
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
exports.androidDefaultCapabilities = androidDefaultCapabilities;
