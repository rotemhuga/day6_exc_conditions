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

//10 
 function calculator4 (num1, num2 ,operand) {
    if (operand ==="+") {
    return num1 + num2;
    } else if (operand ==="-") {
    return num1 - num2;
    } else if (operand ==="+") {
    return num1 / num2;
    } else if (num2 !==0 && operand ==="/") {
    return num1 / num2;
    } else if (num2===0 && operand ==="/") {
    return "cannot divide by zero";
    } else if (operand ==="^") {
    return "invalid opreator";
    } else if (operand ==="%") {
    return num1 % num2;
    } else if (operand ==="*") {
    return num1 *num2;
}
 }
 console.log(calculator4(8, 0, "/"));

 //11
 function isLeapYear (year) {
    if (year%4 ===0 && year%400===0 && year % 100 ===0) {
    return (true);
    }
    return (false);
  }

 console.log(isLeapYear (700))

 //13
 function conditional (x, y, z){
    if (x > y && x > z) {
        if (y > z) {
        alert(`${x}, ${y}, ${z}`);
        } else {
            alert(`${x}, ${z}, ${y}`);
        }
    } 

    if (y > x && y > z) {
         if (x > z) {
        alert (`${y}, ${x}, ${z}`);    
         } else {
            alert (`${y}, ${z}, ${x}`);
        }
    }
    
    if (z > y && z > x) {
         if (y > x) {
        alert (`${z}, ${y}, ${x}`);    
         } else {
            alert (`${z}, ${x}, ${y}`);
        }
    }    
    }
    // console.log(conditional(6, 8, 9))

    //14
  
    //A
    function computerStatusCode (spaceSuitsOn, shuttleCabinReady){
        if (spaceSuitsOn && shuttleCabinReady) {
        console.log("Crew Ready")
        } else {
            console.log("Crew Not Ready")
        }
    }

    //B
    function computerStatusCode (value){
        if (value === 200) {
        console.log("Please stand by. Computer is rebooting.")
        } else if (value === 400) {
           console.log("Success! Computer online.")
        } else
        alert("Computer offline!")
    }

    // computerStatusCode (500)

    //C
    function shuttleSpeed (value){
        if (value > 17500) {
        alert("Escape velocity reached!")
        } else if (value < 8000) {
            alert("Cannot maintain orbit!")
        } else
        console.log("Stable speed")
    }

    // shuttleSpeed (10000)

    //15 
    function ColorPrint (color){
   switch (color){
    case "red":
        console.log ("Red is the color of danger")
    break;   
    case "orange":
        console.log ("Orange is the color of caution")
    break;   
    case "yellow":
        console.log ("Yellow is the color of sunshine")
    break;   
    case "green": 
        console.log ("Green is the color of nature")
    break;   
    case "Blue":
        console.log ("Blue is the color of the sky")
    break;   
    case "purple":
        console.log ("purple is the color of royalty")
    break;   
    default:
        console.log ("invalid color")
    break;
   }
}
// ColorPrint ("Blue")

