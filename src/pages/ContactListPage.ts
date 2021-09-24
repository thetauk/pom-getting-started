import { findElement } from "../utils/DriverUtils";
import { Page } from "../utils/PageUtils";
import { ContactsListPageElements } from "../elements/ContactListPage";

export class ContactListPage extends Page {
  elements = ContactsListPageElements;

  async assertPageVisible() {
    try {
      await findElement(this.driver, this.elements.floatingActionButton);
    } catch (e) {
      throw new Error(`${this.constructor.name} is not visible.`);
    }
  }
}
