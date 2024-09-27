// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")
const errorModalText = document.querySelector("#modal-message")

function hideModal() {
  errorModal.className = "hidden"
}


function likeToggle(event) {
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
  const likeSpans = document.querySelectorAll(".like-glyph") 
  likeSpans.forEach(likeButton => likeButton.addEventListener("click", likeToggle))
});



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
