var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberPool = "1234567890";
var specialCharacters = "!@#$%^&*()";


document.getElementById('generate').addEventListener("click", function(){

let passwordCharPool = lowercaseChars;

let passwordLength = prompt('enter desired password length between 8 and 128 characters');
console.log(passwordLength);

if(passwordLength < 8 || passwordLength > 128){
    alert('your password cannot be shorter than 8 characters and cannot exceed 128 characters, please try again');
}
else{

    var password = "";
    
    let uppercase = confirm('would you like to include uppercase letters?');
    console.log(uppercase);
    if (uppercase == true){
        passwordCharPool = passwordCharPool + uppercaseChars;
    }
    
    let numbers = confirm('would you like to include numbers')
    console.log(numbers);
    if (numbers == true){
        passwordCharPool = passwordCharPool + numberPool;
    }
    
    let specialChars = confirm('would you like to include special characters');
    console.log(specialChars);
    if (specialChars == true){
        passwordCharPool = passwordCharPool + specialCharacters;
    }

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * passwordCharPool.length);
        password += passwordCharPool.substring(randomNumber, randomNumber +1);
       };

    document.getElementById('password').innerHTML = password;
    console.log(passwordCharPool);
    console.log(password)

}

console.log("you clicked the button");

}
);

