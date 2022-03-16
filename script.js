// mobile: when navbar item is clicked, will close
function navbarFunc() {
  document.getElementById('off-navmenu').checked = false
}

// get the element
const text = document.querySelector('.typing-text');

// make a words array
const words = [
  "algorithms?",
  "data structures?",
  "sample code?",
  "we got em' all.",
  ":D"
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 70;
  const WORD_STAY_DELAY = 1500;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}

setTyper(text, words);

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
      var rootElement = document.documentElement

      function handleScroll() {
        // Do something on scroll
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
        if ((rootElement.scrollTop / scrollTotal ) > 0.40) {
          // Show button
          scrollToTopBtn.classList.add("showBtn")
        } else {
          // Hide button
          scrollToTopBtn.classList.remove("showBtn")
        }
      }

      function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
      scrollToTopBtn.addEventListener("click", scrollToTop)
      document.addEventListener("scroll", handleScroll)
