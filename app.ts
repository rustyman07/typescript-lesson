function addFunction(num1: number,num2:number,showResult: Boolean){
   const result = num1 + num2;
   if(showResult){
    console.log(result)
   }else{
    showResult = false
   }
}

const number1 =20
const number2 = 2.4
const showResult = true;

addFunction(number1,number2,showResult)