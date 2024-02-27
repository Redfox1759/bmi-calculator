let bmiText = document.getElementById("bmi-el")
let comment = " ";
let height = document.getElementById("height-el");
let weight = document.getElementById("weight-el");
let bmi = 0;

function Bmi(){
    height = height.value
    height = height / 100
    weight = weight.value
    bmi = ( weight /(height ** 2))
    bmi = Math.floor(bmi)
    result(bmi)
}

function result(bmi){
    if(bmi < 18.5){
        printResult(bmi, "you're underweight")
    } else if( bmi >= 18.5 && bmi <=24.9 ){
        printResult(bmi, "you're in the healthy weight range")
    }else if( bmi >=25 && bmi <=29.9){
        printResult(bmi, "you're in the overweight range")
    }else{
        printResult(bmi, "you're in the obese range")
    }
}

function printResult(bmi, comment) {
    bmiText.textContent = "Your BMI is " + Math.floor(bmi) + ", " + comment;
}
