import { Collection } from "./Collection/Collection";

export class YAStack extends Collection {
    constructor() {
	   super();
	}
    
    // LIFO structure, so each new element needs to be added before the previous one
    add(element: any) {
	   super.push(element);
	}
   
    // get the last value added to the stack, the top element
    remove() {
	   super.pop();
	};

    // get the top most element from the collection
    peek() {
	   return super.getElement(super.size - 1);
	};
    
    // are there any elements on the stack?
    isEmpty() {
	   return super.size === 0;
	};
}
