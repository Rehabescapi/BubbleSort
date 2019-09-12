("use strict");
var TestArrays = require("./arraytemplate");

const Swap = (Array, a) => {
  [Array[a], Array[a + 1]] = [Array[a + 1], Array[a]];
};

const Compare = (Array, FinalResult) => {
  JSON.stringify(Array) === JSON.stringify(FinalResult)
    ? console.log("works")
    : console.log(
        "\x1b[41m" + "issue " + Array + " != " + FinalResult + "\x1b[0m"
      );
  //32 best record of comparisons.
  console.log("\n");
};
//Instead of Resetting to 0 I just put the counter back a bit.
const BubbleSort = Array => {
  console.log("BubbleSort Backing up a schooch" + "\n" + "Starting " + Array);
  var comparisonCounter = 0;
  for (var i = 0; i < Array.length - 1; i++) {
    comparisonCounter++;
    if (Array[i] > Array[i + 1]) {
      Swap(Array, i);
      i === 0 ? i-- : (i = i - 2);
    }
  }

  //To Block
  console.log("Ending " + Array);
  console.log("Total Counts  " + comparisonCounter);
  return Array;
};
//Replicating The example
const BubbleSortSimple = Array => {
  console.log("Sort resetting to 0, Starting " + Array);

  var comparisonCounter = 0;
  for (var i = 0; i < Array.length - 1; i++) {
    comparisonCounter++;
    if (Array[i] > Array[i + 1]) {
      Swap(Array, i);
      i = -1;
    }
  }
  console.log("Ending " + Array);
  console.log("Total Counts  " + comparisonCounter);
  return Array;
};

const BubbleSortLastCallCheck = Array => {
  console.log("Last Call \nStarting " + Array);

  var comparisonCounter = 0;
  var passCounter = 0;
  let clean = true;
  var distance = Array.length;
  do {
    clean = true;
    for (var i = 0; i < distance - 1; i++) {
      comparisonCounter++;

      if (Array[i] > Array[i + 1]) {
        Swap(Array, i);
        if (clean && i === distance - 2) {
        } else {
          clean = false;
        }
      }
    }
    passCounter++;
  } while (!clean);
  console.log("Ending " + Array);
  console.log(
    "Total Counts  " + comparisonCounter + "\n Total Passes " + passCounter
  );
  return Array;
};

const BubbleSortDynamicFor = Array => {
  console.log("DynamicFor \nStarting " + Array);

  var comparisonCounter = 0;
  var passCounter = 0;
  let clean = true;
  //I think I'm over abstracting here
  const distance = Array.length - 1;

  var beginMark = 0;
  var endMark = distance;
  var newEndMark, newBeginMark;
  do {
    clean = true;

    for (var i = beginMark; i < endMark; i++) {
      comparisonCounter++;

      if (Array[i] > Array[i + 1]) {
        //Update Dynamic range
        if (clean) {
          newBeginMark = i - 2;

          if (newBeginMark < 0) {
            newBeginMark = 0;
          }
        }

        newEndMark = i + 2;

        //return to normal
        Swap(Array, i);
        clean = false;
      }
    }
    passCounter++;

    /* console.log(
      "Begin ==> newBegin : " + beginMark + "=> " + newBeginMark + "\n"
    );
    console.log("End ==> newEnd : " + endMark + "=> " + newEndMark + "\n");*/
    beginMark = newBeginMark;
    endMark = newEndMark;
  } while ((!clean, JSON.stringify()));
  console.log("Ending " + Array);
  console.log(
    "Total Counts  " + comparisonCounter + "\n Total Passes " + passCounter
  );
  return Array;
};

if (process.argv[2]) {
  BubbleSort(process.argv[2]);
} else {
  for (element in TestArrays) {
    var comparison = TestArrays[element].slice(0).sort();
    Compare(comparison, BubbleSort(TestArrays[element].slice(0)));
    console.log("\n");
    Compare(comparison, BubbleSortLastCallCheck(TestArrays[element].slice(0)));
    console.log("\n");
    Compare(comparison, BubbleSortDynamicFor(TestArrays[element].slice(0)));
  }
}
