/* Variables */

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementById('start_btn');
const overlay = document.getElementById('overlay');
const ul = document.getElementById('phrase').firstElementChild;
const title = document.getElementsByClassName('title');
let missed = 0;

// Random Phrases Array

const phrases = [
    'To be or not to be',
    'Life is too short',
    'Life moves pretty fast',
    'The early bird gets the worm',
    'The world is my oyster'
];

/* Functions */

// Listen for the start game button to be pressed

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Return a random phrase from an array

function getRandomPhraseAsArray(arr) {
    //do stuff to any arr that is passed in

    const randomNumber = Math.floor(Math.random() * arr.length);
    const indexOfArray = arr[randomNumber];
    // console.log(indexOfArray);

    const splitArray = indexOfArray.split('');
    // console.log(splitArray);

    return splitArray;

}

// console.log(getRandomPhraseAsArray(phrases));

// Adds the letters of a string to the display

function addPhraseToDisplay(arr) {
    // do stuff to any arr that is passed in, and add to `#phrase ul`

    for(i = 0; i < arr.length; i += 1) {
        const li = document.createElement('LI');
        li.textContent = arr[i];
        if (arr[i] !== ' '){
            li.classList.add('letter');
        } else if (arr[i] == ' '){
            li.classList.add('space');
        }

        ul.appendChild(li);
        console.log(li);

    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Check if a letter is in the phrase

function checkLetter(button) {
    const letter = document.getElementsByClassName('letter');
    let matchingLetter = null;
    for(i = 0; i < letter.length; i += 1) {
        if(letter[i].textContent.toLowerCase() === button.textContent.toLowerCase()){
            matchingLetter = letter[i];
            matchingLetter.classList.add('show');
        }   
    }
    console.log(matchingLetter);
        return matchingLetter;
 }

// Check if the game has been won or lost

function checkWin () {
    const letter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    if (letter.length === show.length){
        console.log(letter);
        console.log(show);
        overlay.classList.add('win');
        overlay.children[0].textContent = 'You Won';
    }
}

// Listen for the onscreen keyboard to be clicked

qwerty.addEventListener('click', (event) => {
    const button = event.target;
    if (button.tagName === 'BUTTON'){
        button.classList.add('chosen');
    }
    if (button.className === 'chosen'){
        button.disabled = true;
    }
    
    const letterFound = checkLetter(button);
    if (letterFound === null) {
        missed += 1;
        console.log(missed);
        const tries = document.getElementsByClassName('tries');
        for(i = 4; i >= 0; i-- ){
            if(tries[i].children[0].src.includes('images/liveHeart.png')){
                tries[i].children[0].src = 'images/lostHeart.png';
                break;
            }
        
        }
    }

    checkWin();

});



