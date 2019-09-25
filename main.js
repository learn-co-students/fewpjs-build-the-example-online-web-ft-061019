// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")
const errorModalText = document.querySelector("#modal-message")
// Your JavaScript code goes here!

function hideModal() {
  errorModal.className = "hidden"
}


function likeToggle(event) {
  //check on this specific span element to see what the content of the like-glyph span is currently -- is it empty or full then toggle it accordingly. 
  // like: if EMPTY_HEART do this, else do this 
  // will need nested error handling. ??
  // If the heart is not filled in yet, hit the server to update and if successful, then change textContent to FULL_HEART
  const currentLikeBtn = this
  if (this.textContent == EMPTY_HEART) {
    mimicServerCall()
      .then(likeSuccess => liked(currentLikeBtn))
      .catch(error => {
        errorModal.className = ""
        errorModalText.textContent = error
        setTimeout(hideModal, 5000)
      })

      function liked(likeBtn) {
        likeBtn.textContent = FULL_HEART
        likeBtn.className = "activated-heart"
      }
  } else {
      mimicServerCall()
        .then(unlikeSuccess => unliked(currentLikeBtn))
        .catch(error => {
          errorModal.className = ""
          errorModalText.textContent = error
          setTimeout(hideModal, 5000)
        })
  
        function unliked(likeBtn) {
          likeBtn.textContent = EMPTY_HEART
          likeBtn.className = ""
        }
      
  }
}

document.addEventListener("DOMContentLoaded", function() {
  //Actually, I need select all the likeglyph spans and then iterate through them and add event listeners
  const likeSpans = document.querySelectorAll(".like-glyph") // should be a query selector all
  // need to iterate through all the spans and add event listeners.
  likeSpans.forEach(likeButton => likeButton.addEventListener("click", likeToggle))
});


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
