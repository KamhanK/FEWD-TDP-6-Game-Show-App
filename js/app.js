
/* Variables */

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementById('start_btn');
const overlay = document.getElementById('overlay');
const missed = 0;

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

function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in
    // const emptyArray = [];

    const randomNumber = Math.floor(Math.random() * arr.length);
    const indexOfArray = arr[randomNumber];
    console.log(indexOfArray);

    const splitArray = indexOfArray.split('');
    console.log(splitArray);

    // for ( let i = 0; i < splitArray.length; i += 1 ) {
    //     emptyArray.push(splitArray[i]);
    // }

}

console.log(getRandomPhraseAsArray(phrases));

