// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal")
const errorModalText = document.querySelector("#modal-message")

function hideErrorModal() {
  errorModal.className = "hidden"
}

document.addEventListener("DOMContentLoaded", function() {
  hideErrorModal()
  likeClickability()
  // postLikeToggle()

})

// add event listener for like clicks
function likeClickability() {
  // select all hearts
  const likeGlyphs = document.querySelectorAll(".like-glyph")
  // make each heart clickable
  likeGlyphs.forEach(likeHeart => likeHeart.addEventListener("click", postLikeToggle))
};



function postLikeToggle(event) {
  // event.preventDefault()
  const hrtBtn = this

  // liked and unliked states
  function hearted(hrtBtn) {
    hrtBtn.textContent = FULL_HEART
    hrtBtn.className = "activated-heart"
  }

  function unhearted(hrtBtn) {
    hrtBtn.textContent = EMPTY_HEART
    hrtBtn.className = "broken-heart"
  }

  // debugger
  // user clicks heart - if empty fills, if full empties
  if (this.textContent == EMPTY_HEART) {
    // mimicServerCall - randomly fails 
    mimicServerCall()
    // respond to success
    .then(heartedSuccess => hearted(hrtBtn))
    // respond to error
    // .catch(() => {})
    .catch(error => {
      errorModal.className = ""
      error = errorModalText.textContent
      setTimeout(hideErrorModal, 5000)
    })
  
  } else {
    // mimicServerCall - randomly fails 
    mimicServerCall()
    // respond to success
    .then(unheartedSuccess => unhearted(hrtBtn))
    // respond to error
    // .catch(() => {})
    .catch(error => {
      errorModal.className = ""
      error = errorModalText.textContent
      setTimeout(hideErrorModal, 5000)
    })
  }

    

  // const postId = this.getAttribute("id")

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
