// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.querySelector('modal')
modal.setAttribute('class','hidden')
//hidden MODAL ^^

document.addEventListener('DOMContentLoaded', function(){
  clickToLike(event);
})

function clickToLike(event){
  mimicServerCall()
}


function likeEvent(event){
  const likeButton = this
}

function displayLiked(likeButton){
  likeButton.className.add('full-heart')
  likeButton.textContent = FULL_HEART
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
