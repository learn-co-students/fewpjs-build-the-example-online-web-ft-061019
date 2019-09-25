// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById('modal')
modal.setAttribute('class', 'hidden')

const likeHearts = document.querySelectorAll('.like')



function liker(event) {
  event.preventDefault()
  let heartIcon = event.target
  mimicServerCall()
    .then( serverMessage => {
      if (heartIcon.innerText === EMPTY_HEART){ 
      heartIcon.innerText = FULL_HEART
      heartIcon.setAttribute('class', 'activated-heart')
      } else {
        heartIcon.innerText = EMPTY_HEART
        heartIcon.removeAttribute('class')
      }
      alert("The server was notified")
      alert(serverMessage)
    })
    .catch(error => {
      alert("Something went wrong.")
    })
}
for (let gly of likeHearts) {
  gly.addEventListener('click', liker)
  
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
