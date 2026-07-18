var letters = [
"a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"
];

var index = 0;

function showLetter(){

    document.getElementById("letter").innerHTML =
    letters[index].toUpperCase();

    document.getElementById("signImage").src =
    "assets/images/" + letters[index] + ".jpg";

}

function nextLetter(){

    if(index < letters.length-1){

        index++;

        showLetter();

    }

}

function previousLetter(){

    if(index > 0){

        index--;

        showLetter();

    }

}