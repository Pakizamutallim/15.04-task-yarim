// alert()



// var p = 3
// function circle(r) {
//     var s=p*r*r; 
//     return s
// }

// var r = prompt();
// var s = circle(r)
// console.log(s); 





// function circle(r) {
//     return 3*r*r
// }
// var a = circle(4) 
//  console.log(a)




// function rectangle(a, b) {
//     return a*b;
// }
// // s= (prompt(a)*prompt(b));
// var a = prompt();
// var b = prompt();
// var s = rectangle(a,b); 
// console.log(s) 




// function recta(a, b, c) {
//     return 2*(a*b+a*c+b*c);
// }
// var a = prompt();
// var b = prompt();
// var c = prompt();
// var s = recta(a,b,c); 
// console.log(s) 




// function rtg(a,b,c,r) {
//     var p=(Number(a)+ Number(b) + Number(c))/2 ;
//     return p*r;
// }
// console.log (rtg(Number (prompt("eded")), Number (prompt("eded")), Number (prompt("eded"))))




// function p(n) {
//     if (n>9 && n<100) {
//         var a=n%10;
//         var b=(n-a)/10;
//         return b+ " " +a
//     } 
// }
// console.log (p(47))




// function pppp(n) {
//     if (n>=0) {
        
//     }
    
// }






// function hello(str,chr) {

//     for (let i = 0; i < str.length; i++) {
//         var str= prompt("yaz");
//         var chr = prompt();

//         if (str[2]==chr) {
//            return i
//         } 
//     }
// } 

// console.log(hello(str,chr)); 


function hello(str,chr) {

    for (let i = 0; i < str.length; i++) {

        if (str[i]===chr) {
           return str[i];
        } 
    }
    return -1;
} 
console.log( hello(salam, l)); 

