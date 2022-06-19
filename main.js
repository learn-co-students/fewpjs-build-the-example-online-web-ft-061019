// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  attachLikeClick();
})

//------------------------------------------------------------------------------
// DOM Grabbers
//------------------------------------------------------------------------------
const getErrorModal = () => document.getElementById('modal')
const getErrorMessage = () => document.getElementById('modal-message')




//------------------------------------------------------------------------------
// DOM Events
//------------------------------------------------------------------------------
const clickLike = e => {
  const li = e.target;
  mimicServerCall()
  .then(promise => modifyHeart(li))
  .catch(errors => {
    showError();
    errorMessage(errors);
    setTimeout(hideError, 5000);
  })
}





//------------------------------------------------------------------------------
// DOM Event Handlers
//------------------------------------------------------------------------------
const attachLikeClick = () => {
  let likes = document.querySelectorAll('.like');
  for(let i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click', clickLike);
  }
}




//------------------------------------------------------------------------------
// DOM Manipulators
//------------------------------------------------------------------------------

const hideError = () => getErrorModal().classList.add('hidden');
const showError = () => getErrorModal().classList.remove('hidden');
const errorMessage = message => getErrorMessage().textContent = message;

const displayFullHeart = span => {
  span.classList.add('activated-heart')
  span.textContent = FULL_HEART;
}

const displayEmptyHeart = span => {
  span.classList.remove('activated-heart')
  span.textContent = FULL_HEART;
}

const modifyHeart = li => {
  hideError();
  let span = li.querySelector('span');
  if(span.classList.length < 2) {
    displayFullHeart(span);
  } else {
    displayEmptyHeart(span);
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
