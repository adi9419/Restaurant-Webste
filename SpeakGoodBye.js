// NOTE! The steps in this file are basically identical to the ones
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function () {

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  // STEP 7 + STEP 8:
  // Create an object called 'byeSpeaker' and attach a 'speak' method to it.
  var byeSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };

  // STEP 9: Expose the 'byeSpeaker' object to the global scope.
  window.byeSpeaker = byeSpeaker;

})();
