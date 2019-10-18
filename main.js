// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//ERROR MODAL FUNCTIONALITY
const errorModal = document.querySelector('#modal')
const errorModalContent = document.querySelector('#modal-message')
function hideErrorModal(){
  error.Modal.className = "hidden"
}

document.addEventListener('DOMContentLoaded', function(){
  hideErrorModal()
})

function clickToLike(){
  const hearts = document.querySelectorAll('.like-glyph')
  hearts.forEach(likeHeart => likeHeart.addEventListener('click', likePost))
}

function postAction(event){
  const heartButton = heart
}

function like(postAction){
  heartButton.textContent = FULL_HEART
}

function unlike(postAction){
  heartButton.textContent = EMPTY_HEART
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
