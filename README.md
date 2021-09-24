# pom-getting-started

A code sample along with the medium post can serve as a starting point for using Page-Object Model in your Automation Tests.

## Tests

This sample has two tests, namely

- `src/tests/androidContacts.ts`
- `src/tests/androidContactsWithPOM.ts`

As the name suggests, one test case uses the Page-Object Model Structure and another does not.

This allows you to see the following differences in your final tests

- `Readable`: Without the POM, the test case is too cluttered, and it is hard for a developer to figure out what is happening in each step of the test case.
- `Reusable`: Once the developer has successfully separated the page objects and the test case logic, the same page objects and its methods can be reused across several tests. Furthermore, the page objects can altogether reside in a different project as well.
- `Maintainable`: Without the POM, if the user flow during your test changes due to changes in the underlying application, you would have to change the logic in each test case that this flow is used. With the POM, you just need to change the logic inside the Page Object methods.

## Running the Tests

- Run `npm install` within the directory
- Start `appium` server
- Connect a real device or start an emulator.
- Run tests using `npm test` or `npm run test-with-pom`



