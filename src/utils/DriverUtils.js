"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setValueOfElement = exports.clickElement = exports.findElement = exports.MAX_ELEMENT_THRESHOLD = void 0;
exports.MAX_ELEMENT_THRESHOLD = 60000;
const findElement = (driver, elementLocator, timeout = exports.MAX_ELEMENT_THRESHOLD) => __awaiter(void 0, void 0, void 0, function* () {
    const loginButton = yield driver.$(elementLocator);
    yield loginButton.waitForExist({ timeout: timeout });
    return loginButton;
});
exports.findElement = findElement;
const clickElement = (driver, elementLocator, timeout = exports.MAX_ELEMENT_THRESHOLD) => __awaiter(void 0, void 0, void 0, function* () {
    const loginButton = yield exports.findElement(driver, elementLocator, timeout);
    yield loginButton.click();
});
exports.clickElement = clickElement;
const setValueOfElement = (driver, elementLocator, timeout = exports.MAX_ELEMENT_THRESHOLD, value = "") => __awaiter(void 0, void 0, void 0, function* () {
    const loginButton = yield exports.findElement(driver, elementLocator, timeout);
    yield loginButton.setValue(value);
});
exports.setValueOfElement = setValueOfElement;
