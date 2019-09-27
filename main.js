// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.querySelectorAll(".like")

let glyph = document.addEventListener('click', likeCallback)
let heartStyle = {
  '♡': '♥',
  '♥': '♡'
}
let colors = {
  "red": "",
  "": "red"
}

 function likeCallback(event){
   let heart = e.target
  mimicServerCall()
  .then(function(serverMessage){
    alert("Server Notified")
    alert(serverMessage);
    heart.innerText = heartStyle[heart.innerText];
    heart.style.color = colors[heart.style.color];
  })
  .catch(function(error) {
    alert("Somethin' ain't right")
  });
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
