function checked(age){
    if(age>=18){
        return true;
    }
    else{
        return;
    }
}

let age=prompt(" your age?")
if(checked(age)){
document.write('You are Eligible for Driving !')
}
else{
    document.write('You are Not eligible for driving !');
}

checked(age);