let num1 = 7;
let es_primo = true;

for( let i =2; i<num1; i++){
    if(num1 % i === 0){
        es_primo= false;
    }
}

if(num1<=1){
    es_primo=false;
}

if(es_primo ){
    console.log(num1+ " es primo");
}else{
    console.log(num1+ " no es primo");
}

