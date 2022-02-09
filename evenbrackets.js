
export function evenBrackets(str) {
    let input = str.split("");
    let rules = {
        op: ["(", "{", "["],
        cl: [")", "}", "]"]
    }
    let state = [];
    for(let i = 0; i < input.length; i++) {
        // if its opening push it in the state array
        const openIndex = rules.op.indexOf(input[i]);
        const closeIndex = rules.cl.indexOf(input[i]);
        if(openIndex > -1){
            state.push(input[i]);
        } else if(closeIndex > -1) { // if its closing
            const variant = rules.op[closeIndex];
            // check for its opening variant
            if(state.pop() !== variant) { // if found 
               return false;
                // remove it from the array
            }
        }
    }
    // return true if empty state array else return false
    return state.length === 0;
}