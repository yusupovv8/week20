// function get (n)
// {
//     if (n == 1)
//     {
//         return 1;                                /// 1 
//     }
//     return n * get(n - 1)
// }
// console.log(get(4));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function pow (a,b)
// {
//     if (b == 0)
//     {                                                   /// 3 
//         return 1; 
//     }
//     return a * pow(a,b - 1 )
// }
// console.log(pow(2,3));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function get (n)
// {
//      let cnt = 0 ; 
//      return () => 
//      {
//         return ++cnt ;                            //// 4 
//      }
// }
// let first = get();
// console.log(first());
// console.log(first());
// console.log(first());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function get (a)
{
        return get2(b)
        {
            return a + b ;
        }
}
let c = get(2);      
console.log(c(3));