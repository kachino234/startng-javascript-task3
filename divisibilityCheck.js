// @ts-check

/* A function that takes one parameter (a whole number/integer) 
and checks if numbers from 1 to the given parameter (inclusive)
 are divisible by 2,3,5*/

function divCheck(param) {
    let array = [];

    for (let i = 1; i <= param; i++) {

    
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            array.push("yu-gi-oh");
        } else {

            if (i % 2 === 0) {
                if (i % 2 === 0 && i % 3 === 0) {
                    array.push("yu-gi");
                } else if (i % 2 === 0 && i % 5 === 0) {
                    array.push("yu-oh");
                } else {
                    array.push("Yu");
                }
            } 
            
            else if (i % 3 === 0) {
                if (i % 3 === 0 && i % 5 === 0) {
                    array.push("gi-oh");
                } else {
                    array.push("gi");
                }
            }
            
            else if (i % 5 === 0) {
                array.push("oh");
            } 
            
            else {
                array.push(i);
            }

        }
    }

    console.log(array);
    return array;
}

divCheck(100);
divCheck(57);
