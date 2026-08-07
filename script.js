// STEP 1: Wrap the entire contents of script.js inside of an IIFE
(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10: Loop over the names array and say either 'Hello' or 'Good Bye'
  // using helloSpeaker's or byeSpeaker's 'speak' method.
  for (var i = 0; i < names.length; i++) {

    // STEP 11: Retrieve the first letter of the current name, lower-cased.
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12: If it's 'j', say goodbye; otherwise say hello.
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();
