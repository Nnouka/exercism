function expect(actual, context = null) {
	let doc = document;
	if(context) {
		doc = context;
	}
	let domElRefs = [];
	const toBe = (other) => actual === other;
	const toBeInTheDOM = () => {
			// find id
			domElRefs = doc.getElementById(actual);
			if(domElRefs){
				return true;
			}
			else {
				domElRefs = doc.getElementsByClassName(actual);
				if(domElRefs && domElRefs.length > 0){ return true;}
				else {
					domElRefs = doc.getElementsByTagName(actual);
					return domElRefs && domElRefs.length > 0;
				}
				// find by className
				// find by tag name
				};
			}
	const toBeInTheDOMWith = (attribute, value) => {
			if(toBeInTheDOM()){
					if(typeof value === "function") {
						if(domElRefs.length > 0) {
							for (let i = 0; i < domElRefs.length; i++) {
								if(value(domElRefs[i].getAttribute(attribute) ? domElRefs[i].getAttribute(attribute) : domElRefs[i][attribute])) {
									return true;
								}
							}
							return false;
						} else {
							return value(domElRefs.getAttribute(attribute) ? domElRefs.getAttribute(attribute) : domElRefs[attribute]);
						}	
					} else {
						if(domElRefs.length > 0) {
							for (let i = 0; i < domElRefs.length; i++) {
								if(domElRefs[i].getAttribute(attribute) === value) {
									return true;
								} else if(domElRefs[i][attribute] === value) {
									return true;
								}
							}
							return false;
						} else {
							return domElRefs.getAttribute(attribute) === value || domElRefs[attribute] === value;
						}
					}	
			}
			return false;
		}
	return {
		toBe,
		toBeInTheDOM,
		toBeInTheDOMWith
	}
}