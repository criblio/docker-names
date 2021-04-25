import {generateName, generateNameWithNumber, left, right} from "../index";


describe('Docker names', () => {
  test('should generate a random name', () => {
    const name = generateName();
    const parts = name.split('-');
    expect(parts).toHaveLength(2);
    expect(left).toContain(parts[0]);
    expect(right).toContain(parts[1]);
  })

  test("should generate a random name with a number", () => {
    const nameWithNumber = generateNameWithNumber();
    const parts = nameWithNumber.split('-');
    expect(parts).toHaveLength(3);
    expect(left).toContain(parts[0]);
    expect(right).toContain(parts[1]);
    expect(parseInt(parts[2])).toBeGreaterThan(0);
  })
})