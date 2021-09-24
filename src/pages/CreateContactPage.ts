import {
  clickElement,
  findElement,
  MAX_ELEMENT_THRESHOLD,
  setValueOfElement,
} from "../utils/DriverUtils";
import { Page } from "../utils/PageUtils";
import { CreateContactPageElements } from "../elements/CreateContactPage";

export class CreateContactPage extends Page {
  elements = CreateContactPageElements;

  async assertPageVisible() {
    try {
      await findElement(this.driver, this.elements.firstNameField);
    } catch (e) {
      throw new Error(`${this.constructor.name} is not visible.`);
    }
  }

  async setContactName(firstName: string, lastName: string) {
    await setValueOfElement(
      this.driver,
      this.elements.firstNameField,
      MAX_ELEMENT_THRESHOLD,
      firstName
    );
    await setValueOfElement(
      this.driver,
      this.elements.lastNameField,
      MAX_ELEMENT_THRESHOLD,
      lastName
    );
  }

  async saveContact() {
    await clickElement(this.driver, this.elements.saveButton);
  }
}
