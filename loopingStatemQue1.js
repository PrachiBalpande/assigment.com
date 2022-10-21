//let num=100;
//let isPrime;
//for(let i=2;i<=num;i++){
 //   for( let j=2;j<i;j++){
   //     isPrime="yes";
     //   if(i%j==0){
       //     isPrime="No";
         //   break;
        //}

    //}if(isPrime=="yes"){
        //document.write("<br>"+i);
    //}
//}

let n = 10;

isPrime:
for(let i = 2; i <= n; i++){

   for(let j = 2 ;j < i; j++){
       if(i % j == 0) continue isPrime;
   }
   console.log(i);
}