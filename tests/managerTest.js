const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 5;
  const e = new Manager("Chloe", 1, "chloeyu@icloud.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Chloe", 1, "chloeyu@icloud.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 5;
  const e = new Manager("Chloe", 1, "chloeyu@icloud.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});