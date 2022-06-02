// import getMergeSortAnimations from "./getMergeSortAnimations";
// import {
//   changeBackgroundColor,
//   changeBoxShadow,
//   swapBars,
//   resetBarStyleDefault,
//   disableButtons,
//   enableButtons,
//   playCompletedSoundEffect,
// } from "../../HelperFunctions.js";

// const MergeSort = (array, animationSpeed) => {
//   // Disabling the buttons so that the animation cannot be interrupted.
//   disableButtons();

//   // Getting the animations which has been generated in the "getBubbleSortAnimations" function.
//   const animations = getMergeSortAnimations(array);

//   for (let i = 0; i < animations.length; i += 6) {
//     const comparingElement1 = animations[i],
//       comparingElement2 = animations[i + 1],
//       minIndexElement = animations[i + 2],
//       doSwap = animations[i + 3],
//       isFinalElement = animations[i + 4],
//       finalElement = animations[i + 5];

//     // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
//     const promise1 = new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         // Changing the color-bar of current elements.
//         changeBackgroundColor(minIndexElement, "rgba(0,0,255, 0.9)");
//         changeBackgroundColor(comparingElement1, "rgba(0,0,0, 0.9)");
//         changeBackgroundColor(comparingElement2, "rgba(255,165,0, 0.9)");

//         if (doSwap === true) {
//           // Changing the color-bar of elements which has to be swapped.
//           changeBackgroundColor(minIndexElement, "rgba(144,238,144, 0.9)");
//           changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
//           // Actually swapping the elements (heights).
//           swapBars(comparingElement1, minIndexElement);
//         }
//       }, i * animationSpeed);

//       // Resolving the promise after the setTimeout ends.
//       resolve();
//     });

//     // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
//     const promise2 = new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         if (isFinalElement === true) {
//           // Changing the color-bar of finalElement index which has taken its final sorted position.
//           changeBackgroundColor(finalElement, "rgba(0, 164, 86, 0.6)");
//           changeBoxShadow(
//             finalElement,
//             "5px 5px 50px 5px rgba(0, 164, 86, 0.2)"
//           );
//         } else {
//           // Changing the color-bar of elements which has not taken its final sorted position yet.
//           changeBackgroundColor(comparingElement2, "rgba(225, 0, 120, 0.6)");
//           changeBackgroundColor(minIndexElement, "rgba(225, 0, 120, 0.6)");
//         }

//         // From "getSelectionSortAnimations" function, we know that the array is sorted when finalElement is (array.length - 1).
//         // Resolving the promise when the finalElement index is (array.length - 1).
//         if (finalElement === array.length - 1) resolve();
//       }, (i + 6) * animationSpeed);
//     });

//     Promise.all([promise1, promise2])
//       .then(playCompletedSoundEffect)
//       // Enabling the buttons when both the promises have been resolved.
//       .then(enableButtons);
//   }

//   // Resetting the color-bar style to default after the animations end.
//   resetBarStyleDefault(array, (animations.length + 6) * animationSpeed);
// };

// export default MergeSort;



/************************************************************************************
 * An implementation for Mergesort. Less efficient
 * than Quicksort. Again, you'd just use Array.sort
 * but if you found yourself unable to use that
 * there's always this option.
 *
 * Tests with:
 *
 * var array = [];
 * for(var i = 0; i < 20; i++) {
 *   array.push(Math.round(Math.random() * 100));
 * }
 *
 * Mergesort.sort(array);
 *
 **************************************************************************************/

 var Mergesort = (function() {

  /**
   * Sorts the array by breaking it down
   * into smaller chunks.
   *
   * @param {Array} array The array to sort
   */
  function sort(array) {

    var length = array.length,
        mid    = Math.floor(length * 0.5),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);

    if(length === 1) {
      return array;
    }

    return merge(sort(left), sort(right));

  }

  /**
   * Merges two sublists back together.
   * Shift either left or right onto
   * the result depending on which is
   * lower (assuming both exist), and simply
   * pushes on a list if the other doesn't
   * exist.
   *
   * @param {Array} left The left hand sublist
   * @param {Array} right The right hand sublist
   */
  function merge(left, right) {

    var result = [];

    while(left.length || right.length) {

      if(left.length && right.length) {

        if(left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }

      } else if (left.length) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }

    }

    return result;

  }

  return {
    sort: sort
  };

})();