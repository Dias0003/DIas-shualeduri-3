  function captureUserInput() {
            const userEmail = document.getElementById('userEmail').value;
            const userPassword = document.getElementById('userPassword').value;
            const userSpecies = document.getElementById('genderSelector').value;
            const subscribeToSpaceNews = document.getElementById('subscribeCheckbox').checked;

            console.log('Galactic Email:', userEmail);
            console.log('Secret Code:', userPassword);
            console.log('Species:', userSpecies);
            console.log('Subscribe to Space News:', subscribeToSpaceNews);
        }
   
        console.log('Different Test');


const arrayOfUsers = [
  { userName: 'Joni', age: 25 },
  { userName: 'jano', age: 30 },
  { userName: 'jumberi', age: 22 }
];


const totalAge = arrayOfUsers.reduce((sum, user) => sum + user.age, 0);
console.log('Total Age of Users:', totalAge);


function getInputValue() {
  let email = document.getElementById('email').value;
  console.log("User's Email: ", email);

  let password = document.getElementById('password').value;
  console.log("User's Password: ", password);

  let gender = document.querySelector('select').value;
  console.log("User's Gender: ", gender);
}


const differentWordsArr = ['apple', 'orange', 'banana', 'grapefruit'];

function findLongestWord(words) {
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const longestWordInDifferentArray = findLongestWord(differentWordsArr);
console.log('Longest Word in the Different Array:', longestWordInDifferentArray);
