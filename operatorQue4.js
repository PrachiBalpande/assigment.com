// que1.
console.log(console.log(1) || 2 || console.log(3)); //ans=1 and 2


//que2
console.log(console.log(1) && console.log(2))//ans= 1 and undefined

//3.
console.log(null || 2 && 3 || 4); //ans=3


if(-1 || 0) console.log('first') //ans=first


if(-1 && 0)console.log('second')//no output

if(null || -1 && 1)console.log('third');  //ans=third