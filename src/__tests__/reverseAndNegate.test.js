import { reverseAndNegate } from "../index.js";

describe("test reverse", () => {
  it("element with index 1 to equal -5", () => {
		const testArray = [1, -2, 5, 4];
    const result = reverseAndNegate(testArray);

    expect(result[1]).toBe(-5);
  }),
	it("result array to equal [-4, -5, 2, -1]", () => {
		const testArray = [1, -2, 5, 4];
		const result = reverseAndNegate(testArray);

		expect(result).toEqual([-4, -5, 2, -1]);
	}),
	it("result array to equal []", () => {
		const result = reverseAndNegate(8);

		expect(result).toEqual([]);
	}),
	it("element with index 1 to equal NaN", () => {
		const testArray = [0, -2, { a: -1 }, 4];
		const result = reverseAndNegate(testArray);

		expect(result[1]).toBe(NaN);
	}),
	it("result array to equal [-4, NaN, 2, -0]", () => {
		const testArray = [0, -2, { a: -1 }, 4];
		const result = reverseAndNegate(testArray);

		expect(result).toEqual([-4, NaN, 2, -0]);
	});
});
