// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function () {

  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = "Hello";

  // STEP 3 + STEP 4:
  // Create an object called 'helloSpeaker' and attach a 'speak' method
  // to it (instead of leaving 'speak' as a standalone function).
  // See Lecture 52, part 1 and part 2
  var helloSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };

  // STEP 5: Expose the 'helloSpeaker' object to the global scope.
  // See Lecture 52, part 2
  window.helloSpeaker = helloSpeaker;

})();
