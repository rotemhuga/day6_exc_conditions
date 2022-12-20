// 1//
function Even(number) {
    if (number % 2 === 0) {
        console.log("true");
    } else{
    console.log("false");
    }
}

Even (4)

//2 - A
function greaterNum (x, y, z) {
    if (x > y && x > z) {
        console.log (x);
    } else if  (y > x && x > z) {
        console.log (y);
    } else if (z > x && z > y) {
        console.log (z);
    }
}
greaterNum (4, 3, 9)

// -B
//2 - A
function greaterNum (x, y, z) {
    if (x > y && x > z) {
        console.log (x);
    } else if  (y > x && x > z) {
        console.log (y);
    } else if (z > x && z > y) {
        console.log (z);
    }
}
greaterNum (4, 3, 2)

//3 - A
function helloLanguage (languageCode) {
    if (languageCode === "en") {
    console.log("Hello, World");
    } else if (languageCode === "es") {
    console.log("Hola, Mundo");
    } else if (languageCode === "de") {
    console.log("Hallo, Wereld");
}
}
helloLanguage ("en")

//3 - B
function helloLanguage (languageCode) {
    if (languageCode === "en") {
    console.log("Hello, World");
    } else if (languageCode === "es") {
    console.log("Hola, Mundo");
    } else if (languageCode === "de") {
    console.log("Hallo, Wereld");
}
}
helloLanguage ("es")

//3 - c
function helloLanguage (languageCode) {
    if (languageCode === "en") {
    console.log("Hello, World");
    } else if (languageCode === "es") {
    console.log("Hola, Mundo");
    } else if (languageCode === "de") {
    console.log("Hallo, Wereld");
}
}
helloLanguage ("de")

//4 - 
function assignGrade (numberScore) {
    if (numberScore >= 90 && numberScore <= 100 ) {
    console.log("A");
    } else if (numberScore >= 80 && numberScore <= 89) {
    console.log("B");
    } else if (numberScore >= 70 && numberScore <= 79) {
    console.log("C");
    } else if (numberScore >= 60 && numberScore <= 69) {
    console.log("D");
    } else if (numberScore <= 59 ) {   
    console.log("F");
 }
}

assignGrade (100)
assignGrade (80)
assignGrade (75)

//5 -
function pluralize (noun, number) {
    if (number > 1)
    console.log(`${number} ${noun}s`)
    if (number = 1)
    console.log(`${number} ${noun}`)
}

pluralize ("Table", 4)
pluralize ("Table", 1)

// 6 -
// "I would like an ice cream with strawberry && chocolate, || stracciatella || an ice cream of any flavor but != caramel. "

// let person = window.prompt("Please enter your name");
// if (person != null) {
//   document.write(`"Hello " + ${person} + welcome`)
// } else (person = null)
//  document.getElementById("demo").innerHTML 
//  alert (`"Hello friend, Welcome!"`);
// prompt ("Rotem")

// //7 -
// let person = prompt("please enter your name", "friend");
// document.write(`Hello ${person}, welcome`);

// 8
function NumberPrint (number) {
    if (number % 2 === 1 && number>0){
    console.log("Positive and odd");
    }else if (number % 2 !=0 && number<0){
    console.log("Negative and odd");
    }else if (number % 2 === 0 && number<0){
    console.log("Negative and even");
    }else {
    console.log("Zero"); 
}
}
NumberPrint (-7)

//10-A
function calculator1 (num1, num2 ,operand) {
    if (operand ="+") {
    return num1 + num2;
    }
}
 console.log(calculator1(num1=2, num2=3, operand="+")) 

//10-B
 function calculator2 (num1, num2 ,operand) {
    if (operand ="-") {
    return num1 - num2;
    }
}
 console.log(calculator2(num1=2, num2=3, operand="-")) 
 
//10-C
 function calculator3 (num1, num2 ,operand) {
    if (operand ="/") {
    return num1 / num2;
    }
}
 console.log(calculator3(num1=2, num2=3, operand="/")) 
 
 //10-D
 function calculator4 (num1, num2 ,operand) {
    if (operand ="/") {
    return num1 / num2;
    }
}
 console.log(calculator4(num1=2, num2=0, operand="/")) 
 
 //10-E
 function calculator4 (num1, num2 ,operand) {
    if (operand ="^") {
    return num1 ^ num2;
    }
}
 console.log(calculator4(num1=2, num2=3, operand="^")) 
