function get (n)
{
    if (n == 5 )
    {
        return 50; 
    }
    return n + get(n + 1)
}
console.log(get(1));

///////////////////////////////////////////////////////////////////////////////////////

function get (n)
{
    let cnt = 0; 
    return () => 
    {
        return ++cnt ; 
    }
}
// console.log(get());         /// 1 1 1 1 1 1 1.... 
let first = get ();
console.log(first()); ///1 
console.log(first()); ///2 
console.log(first()); ///3 
let second = get ();
console.log(second());  
console.log(second());  
console.log(first());  

