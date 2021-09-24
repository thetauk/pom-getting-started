import { setUp, tearDown } from "../utils/TestUtils";
import { Browser } from "webdriverio";
import { androidDefaultCapabilities } from "../utils/CapabilitiesUtils";
import { ContactListPage } from "../pages/ContactListPage";
import { CreateContactPage } from "../pages/CreateContactPage";
import { clickElement } from "../utils/DriverUtils";

describe("Contacts Android App", function () {
  this.timeout(500000);

  let driver: Browser<any>;

  beforeEach(async () => {
    driver = await setUp(
      androidDefaultCapabilities(
        "com.android.contacts",
        "com.android.contacts.activities.PeopleActivity"
      )
    );
  });

  afterEach(async () => {
    await tearDown(driver);
  });

  it("Create a new Contact", async function () {
    const contactListPage = new ContactListPage();
    await contactListPage.build(driver);
    // Directly Access element
    await clickElement(
      driver,
      contactListPage.elements.floatingActionButton
    );

    const createContactPage = await new CreateContactPage();
    await createContactPage.build(driver);
    // Make a method to store a default user flow repeated on the page
    await createContactPage.setContactName("SampleFirstName", "SampleLastName");
    await createContactPage.saveContact();
  });
});
