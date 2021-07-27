const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UVA";
  const e = new Intern("Chloe", 1, "chloeyu@icloud.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return \"Intern\"', () => {
  const testValue = "Intern";
  const e = new Intern("Chloe", 1, "chloeyu@icloud.com", "UVA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UVA";
  const e = new Intern("Chloe", 1, "chloeyu@icloud.com", testValue);
  expect(e.getSchool()).toBe("UVA");
});