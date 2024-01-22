const { YAStack } = require("../YAStack");
describe("A stack.", () => {
   let stack: typeof YAStack;
   let numItems = 0;
   beforeAll(() => {
      stack = new YAStack();
	  stack.add(1);
	  numItems++;
   });
   describe("Basic operations.", () => {
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
   describe("That is iterable.", () => {
	  test("Should be a stack of 5 items.", () => {
		 stack.add(3);
		 numItems++;
		 stack.add(4);
		 numItems++;
		 stack.add(5);
		 numItems++;
		 expect([...stack]).toHaveLength(numItems);
	  });
	  test("Should output a stack of the 5 items contained.", () => {
		 expect([...stack]).toEqual([1, 2, 3, 4, 5]);
	  });
   });
});
