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
const TestUtils_1 = require("../utils/TestUtils");
const CapabilitiesUtils_1 = require("../utils/CapabilitiesUtils");
const ContactListPage_1 = require("../pages/ContactListPage");
const CreateContactPage_1 = require("../pages/CreateContactPage");
const DriverUtils_1 = require("../utils/DriverUtils");
describe("Contacts Android App", function () {
    this.timeout(500000);
    let driver;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        driver = yield TestUtils_1.setUp(CapabilitiesUtils_1.androidDefaultCapabilities("com.android.contacts", "com.android.contacts.activities.PeopleActivity"));
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        yield TestUtils_1.tearDown(driver);
    }));
    it("Create a new Contact", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const contactListPage = new ContactListPage_1.ContactListPage();
            yield contactListPage.build(driver);
            // Directly Access element
            yield DriverUtils_1.clickElement(driver, contactListPage.elements.floatingActionButton);
            const createContactPage = yield new CreateContactPage_1.CreateContactPage();
            yield createContactPage.build(driver);
            // Make a method to store a default user flow repeated on the page
            yield createContactPage.setContactName("SampleFirstName", "SampleLastName");
            yield createContactPage.saveContact();
        });
    });
});
