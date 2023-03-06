
/* What is a closure?
A closure is a function that has access to the parent scope,
even after the parent function has closed.
*/
function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter);
    }
    return inner;
}

let fn = outer();
fn();
fn();
