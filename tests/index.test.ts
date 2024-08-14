import { YAStack } from "../YAStack";
import { dataObj } from "../Collection/utils/utils";

describe("A stack.", () => {
   describe("Basic operations.", () => {
	  let stack: YAStack;
	  let numItems = 0;
	  beforeAll(() => {
		 stack = new YAStack();
		 stack.add(1);
		 numItems++;
	  });
	  test("Should not be empty.", () => {
		 expect(stack.isEmpty()).toBeFalsy();
	  });
	  test("Should add the item.", () => {
		 const value = 2;
		 numItems++;
		 stack.add(value);
		 expect(stack.getElement(stack.size - 1)).toBe(value);
	  });
	  test("Should peek the item.", () => {
		 const value = 5;
		 numItems++;
		 stack.add(value);
		 expect(stack.peek()).toBe(value);
	  });
	  test("Should be of given size.", () => {
		 expect(stack.size).toBe(numItems);
	  });
	  test("Should remove the item.", () => {
		 stack.remove();
		 numItems--;
		 expect(stack.size).toBe(numItems);
	  });
   });
});
