//1.pow(3,2)=3*3=9
function pow(x,n){
    let num=x;
    for(let i=1; i<n;i++){
        num *= x;
    }
    console.log(num)
}
console.log(pow(3,2))


//2.pow(3,3,3)=3*3*3=27

function pow(p,q,)
{
    let num1=p;
    for(let i=1; i<q; i++){
        num1*=p;

    }
    console.log(num1)
}
console.log(pow(3,3,3))

//3.pow(1,100)
function pow(g,y){
      let value=g;
    for (let i=1;i<g; i++){
        value*=g
    }
    console.log(value)
}
console.log(pow(1,100))