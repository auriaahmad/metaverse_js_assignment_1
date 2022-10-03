// its a simple calculator 

    // taking input of two number from user
    var num1 = prompt("Enter first number.");
    var num2 = prompt("Enter second number.");

    // taking input of a math operation
    var func = prompt('Enter a function e.g. "+" or "-" or "*" or "/" or "%"');
    if (func == "+") {
        sum = parseInt(num1) + parseInt(num2);
        alert(num1 + func + num2 + "=" + sum);
    }
    else if (func == "-") {
        neg = parseInt(num1) - parseInt(num2);
        alert(num1 + func + num2 + "=" + neg);
    }
    else if (func == "*") {
        mul = parseInt(num1) * parseInt(num2);
        alert(num1 + func + num2 + "=" + mul);
    }
    else if (func == "/") {
        divi = parseInt(num1) / parseInt(num2);
        alert(num1 + func + num2 + "=" + divi);
    }
    else if (func == "%") {
        mod = parseInt(num1) % parseInt(num2);
        alert(num1 + func + num2 + "=" + mod);
    }