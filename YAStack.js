function YAStack() {
    let coll = new Collection();
    
    // LIFO structure, so each new element needs to be added before the previous one
    this.add = function(element) {
	      coll.push(element);
	  };
   
    // get the last value added to the collection, the top element
    this.remove = function() {
	      coll.pop();
	  };

    // get the top most element from the collection
    this.peek = function() {
		    return coll.getElement(this.size() - 1);
	  };

    // get the size of the collection
    this.size = function() {
	      return coll.length();
	  };
    
    // are there any elements on the stack?
    this.isEmpty = function() {
	      return coll.length() === 0;
	  };

    // get the values from the collection
    this.values = function() {
        let length = 0;
        let items = '[';
        for(let item of [...coll.get()].reverse()) {
            if(item) {
                items += item; 
                if(length < this.size()-1) {
                    	items += ',';
                        length++;
                }
            }
         }
         items += ']';
         return items;
     };
};
