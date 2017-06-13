/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  let worth = 0
  let ace = 0
  for (let i = 0 ; i < hand.length ; i++) {
    if (hand[i]==="A") {
      worth = worth + 11;
      ace +=1;
    } else if (hand[i]==="K" || hand[i]==="Q" || hand[i]==="J") {
      worth += 10;
    } else {
      worth = worth += Number(hand[i])
    }
  }

  while (ace > 0) {
    if (worth>21) {
      worth = worth - 10;
    }
    ace = ace - 1
  }

  return worth
}

(function () {

  'use strict';

  // Assert Function
  function assert(hand, value) {
    let output = handValue(hand);
    console.assert(output === value, `Expecting ${output} to be ${value}`);
  }

  // Blackjack Hand Tests
  // Hand, Value
  assert(["2", "2", "8"], 12);
  assert(["2", "2", "K"], 14);
  assert(["2", "Q"], 12);
  assert(["7", "J"], 17);
  assert(["7", "A"], 18);
  assert(["8", "J", "A"], 19);
  assert(["8", "A", "J"], 19);
  assert(["8", "7", "A", "A"], 17);

})();


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
