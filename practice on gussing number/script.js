let submit = document.querySelector('.submit');
let guessingnum = document.querySelector('.guessingnum');
let inputnum = document.querySelector('.inputnum');
let remain = document.querySelector('.remain2');
let result = document.querySelector('.result');
let randomnumber = document.querySelector('.random_number');
let sum = 1;
let arr = []
let random = parseInt(Math.random() * 100 + 1);

const over = document.querySelector('.gameoverbutton');
let playgame = true;
if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(inputnum.value);
        remainguess(guess);
    })

}

function remainguess(guess) {
    if (guess <= 0 || guess > 100 || isNaN(guess)) {

        guessingnum.innerHTML = 'you entered invalid number';
        guessingnum.style.backgroundColor = "transprant";
        

    } else {
        if(arr.length===10){
            randomnumber.innerHTML = `Random number : ${random} `;
            result.innerHTML = "Sorry guessing limit is over 😒";
        }else{
            arr.push(guess)
            guessingnum.innerHTML = arr;
            guessingnum.style.backgroundColor = "transprant";
            remaincount();
            checknumber(guess)
        }


    }

}
//count click
function remaincount() {
    let num = 10 - sum;
    if (num <= 0) {
        remain.innerHTML = "Game Over";
    } else {
        remain.innerHTML = num;
        sum = sum + 1;

    }

}
// check number
function checknumber(guess) {
    if (guess === random) {
        randomnumber.innerHTML = `Random number : ${random} `;
        result.innerHTML = "you are win🎉🎊";
        
    } else if (guess < random) {
        result.innerHTML = "your number is low";
    } else if (guess > random) {
        result.innerHTML = "your number is high";
    }
}


//end game
function endgame() {


    sum = 1;
    num = 11;
    remain.innerHTML = 10;
    arr.length=0
    guessingnum.innerHTML = null;
    result.innerHTML = "";
    randomnumber.innerHTML = ``;
    random = parseInt(Math.random() * 100 + 1);
    playgame=false;
     

}
over.addEventListener('click', function () {

    endgame();

});
