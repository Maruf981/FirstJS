



// quiztime task 4 / 10task
// function factorial(num){
//   let sum = 1;
//   for(let i = 1; i <= num; i++){
//     sum *= i;
//   }
//   let result = sum.toString().split("").reverse().join("");
//   return parseInt(result, 10);
// }
// console.log(factorial(4));




// quiztime task 4 / 4task
// function task(num) {
//   if (num > 0) {
//     return num - 2;
//   } else if (num < 0) {
//     return num + 1;
//   } else {
//     return 10;
//   }
// }

// console.log(task(4));




// quiztime task 4 / 2task
//  function add(a, b, c){
//   if(a < b && b < c){
//     let one = a * a;
//     let two = b * b;
//     let three = c * c; 
//     return one + "," + two + "," + three;
//   }else{
//     return -a + "," + -b + "," + -c;
//   }

//  }
//  console.log(add(3, -2, 8));
 





  // function polindromandprime(num){
  //   let origin = num.toString();
  //   let res = origin.split("").reverse().join("");
  //   if(origin === res){
  //   for(let i = 0; i < res.length; i++){      
  //     if(Number(res[i]) % 2 !== 1){    
  //       return false;
  //     }
  //   }
  // }
  //   return true;
  // }
  // console.log(add(11));           
      
    
  
  
  
  
  
  // function arithmeticsequence(num){
  //   let res = num.toString().split("").map(Number)    
  //   let itog = res[1] - res[0]
  //   for (let i = 1; i < res.length-1; i++){
  //   if(res[i + 1] - res[i] !== itog){
      
  //     return false;
  //   }
  // }
  //   return true;
  // }
  // console.log(arithmeticsequence(2468));

  
    // quiztime 2 / 1task
    
    // function ispoweroftwo(num){
    //  let pi = 3.16
    //  let res = num * num * pi;
    //  return `Theareaofacirclewithradius${num}is${res}.`
    //   }
    //    console.log(ispoweroftwo(5));
  

  
  //  // quiztim2 2 / 6
  //  function MainFunction(a, b){
  //   let count = 0;
  //   if(a < 0 && b < 0){
  //   for(let i = a; i < b; i++){
  //     if(i % 2 === 0) 
  //       count += i;
  //   } 
  // }
  //   return count;
  // }
  //  console.log(MainFunction(-1, -1));
   


// function highestverage(scores) {
//     let sum = scores.reduce((acc, obj) => acc + obj.score, 0);
//     let max = Math.max(...scores.map(obj => obj.score));
//     let min = Math.min(...scores.map(obj => obj.score));
//     return { highest: max, lowest: min, average: (max + min) / 2 };
// }

// console.log(highestverage([{name:"Alex",score:80},{name:"Emily",score:95},{name:"Charlie",score:88}]));





// function concattwoobjects(obj1, obj2) {
//     return {...obj1, ...obj2};
// }
// console.log(concattwoobjects({hello:23,hi:21,egg:100},{egg:66,nice:40,dear:25}));



//     function addnums (...arr) {
//     let cnt = 1;
//     let sum = 0;
//     for(let elem of [...arr]){
//           cnt = 1;
//           for(let item of elem){
//                 if(item % 2 != 0) 
//                     cnt *= item;
//           }
//           sum += cnt;        
//     }
//    return sum;
// }
// console.log(addnums([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));







// function MainFunction(objj) {
//     return names.map((obj)=>obj[0].toUpperCase()+obj.slice(1).toLowerCase())
//  }

// function swapvaluetokey(obj){
//     let newobj = {};
//     for(let key in obj){
//         newobj[obj[key]] = key;
//     }
//     return newobj;
// }
// console.log(swapvaluetokey({a:"apple",b:"banana",c:"cherry"}));




// function longeststr(obj){
//     let long = "";
//     let max = 0;
//     for(let key in obj){
//       if(obj[key].length > max){
//           long = obj[key];
//           max = obj[key].length;
//       }
//   }
//     return long;
// }
// console.log(longeststr({name:'Mr.Smith',city:'Korea',profession:'none'}));
 


// function sumofevenelement(obj){
//     let sum = 0;
//     for(let key in obj){
//         if(obj[key] % 2 === 0){
//             sum += obj[key];
//         }
//     }
//     return sum;
// }
// console.log(sumofevenelement({ a:2,b:5,c:8,d:3}));



// function unique(arr){
//     return arr.every((item, index, value) => {
//         return value.indexOf(item) === index;
//     });
// }
// console.log(unique([1,2,3,4,5])); 
 



// function sumoddelement(...arrs) {
//     let sum = 0;
//     for(let arr of arrs) {
//         for(let i = 0; i < arr.length; i++){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumoddelement([1,2,3,4,5],[1,2,3,4,5]));


// function squaresul(num) {
//     let sum = [];
//     for (let i = 0; i < num; i++) {

//         let res = [];
//         for (let j = 0; j < num; j++) {
//             res.push(num);
            
            
//         }
//         sum.push(res);
//     }
//     return sum;
// }
//  console.log(squaresul(3));
