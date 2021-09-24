import { setUp, tearDown } from "../utils/TestUtils";
import {
  clickElement,
  findElement,
  MAX_ELEMENT_THRESHOLD,
  setValueOfElement,
} from "../utils/DriverUtils";
import { Browser } from "webdriverio";
import { androidDefaultCapabilities } from "../utils/CapabilitiesUtils";

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
    await clickElement(
      driver,
      "id:com.android.contacts:id/floating_action_button"
    );

    await setValueOfElement(
      driver,
      'android=new UiSelector().text("First name")',
      MAX_ELEMENT_THRESHOLD,
      "SampleFirstName"
    );

    await setValueOfElement(
      driver,
      'android=new UiSelector().text("Last name")',
      MAX_ELEMENT_THRESHOLD,
      "SampleLastName"
    );

    await findElement(
      driver,
      "id:com.android.contacts:id/editor_menu_save_button"
    );
  });
});
