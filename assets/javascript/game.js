

var letters = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

var wins = 0;
var losses = 0;
var guessesleft = 9;


for (var i = 0; i < 9; i++) {
    document.onkeypress = function(event) {
        var userGuess = event.key;
        this.getElementById("guesses").textContent += (event.key + " , ");
        var computerGuess = letters[Math.floor(Math.random() * letters.length)];


        if(userGuess != computerGuess){
           losses-- && guessesleft--;
        }else if (userGuess === computerGuess){
            wins++;
        }



        document.getElementById('wincount').innerHTML = "Wins: " + wins;
        document.getElementById('losscount').innerHTML = "losses: " + losses;
        document.getElementById('guessesleft').innerHTML = "Guesses left: "+ this.textContent;
        document.getElementById('guesses').textContent = "Guesses: " + key.textContent;

    }
}
    
