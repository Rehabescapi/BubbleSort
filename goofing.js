("use strict");
var TestArrays = require("./arraytemplate");
//Instead of Resetting to 0 I just put the counter back a bit.
const BubbleSort = Array => {
  console.log("BubbleSort Backing up a schooch" + "\n" + "Starting " + Array);

  const Swap = a => {
    [Array[a], Array[a + 1]] = [Array[a + 1], Array[a]];
  };
  var counter = 0;
  for (var i = 0; i < Array.length - 1; i++) {
    counter = counter + 1;

    if (Array[i] > Array[i + 1]) {
      Swap(i);
      i = i - 2;
    }
  }
  console.log("Ending " + Array);
  console.log("Total Counts  " + counter);
};
//Replicating The example
const BubbleSortPlay = Array => {
  console.log("Sort resetting to 0, Starting " + Array);

  const Swap = a => {
    [Array[a], Array[a + 1]] = [Array[a + 1], Array[a]];
  };
  var counter = 0;
  for (var i = 0; i < Array.length - 1; i++) {
    counter = counter + 1;

    if (Array[i] > Array[i + 1]) {
      Swap(i);
      i = -1;
    }
  }
  console.log("Ending " + Array);
  console.log("Total Counts  " + counter);
};

const BubbleSortLastCallCheck = Array => {
  console.log("Last Call \nStarting " + Array);

  const Swap = a => {
    [Array[a], Array[a + 1]] = [Array[a + 1], Array[a]];
  };

  var counter = 0;
  var passCounter = 0;
  var clean;
  var distance = Array.length;
  do {
    clean = true;
    for (var i = 0; i < distance - 1; i++) {
      counter = counter + 1;

      if (Array[i] > Array[i + 1]) {
        Swap(i);
        if (clean && i === distance - 2) {
        } else {
          clean = false;
        }
      }
    }
    passCounter++;
  } while (!clean);
  console.log("Ending " + Array);
  console.log("Total Counts  " + counter + "\n Total Passes " + passCounter);
};

const BubbleSortFull = Array => {
  console.log("Clean Swap, Starting " + Array);

  const Swap = a => {
    [Array[a], Array[a + 1]] = [Array[a + 1], Array[a]];
  };

  var counter = 0;
  var passCounter = 0;
  var clean;
  var distance = Array.length;
  do {
    clean = true;
    for (var i = 0; i < distance - 1; i++) {
      counter = counter + 1;

      if (Array[i] > Array[i + 1]) {
        Swap(i);
        clean = false;
      }
    }
    passCounter++;
  } while (!clean);
  console.log("Ending " + Array);
  console.log("Total Counts  " + counter + "\nTotal Passes " + passCounter);
};

const BubbleSortDynamicFor = Array => {
  console.log("DynamicFor \nStarting " + Array);

  const Swap = a => {
    [Array[a], Array[a + 1]] = [Array[a + 1], Array[a]];
  };

  var counter = 0;
  var passCounter = 0;
  var clean;
  //I think I'm over abstracting here
  const distance = Array.length - 1;

  var beginMark = 0;
  var endMark = distance;
  var newEndMark, newBeginMark;
  do {
    clean = true;

    for (var i = beginMark; i < endMark; i++) {
      counter = counter + 1;

      if (Array[i] > Array[i + 1]) {
        //Update Dynamic range
        if (clean) {
          newBeginMark = i - 2;

          if (newBeginMark < 0) {
            newBeginMark = 0;
          }
        }

        if (i + 2 > distance) {
          newEndMark = distance;
        } else {
          newEndMark = i + 2;
        }

        //return to normal
        Swap(i);

        //Todo : figure out inverse of this since it is the last call
        if (clean && i === distance - 1) {
        } else {
          clean = false;
        }
      }
    }
    passCounter++;
    console.log(Array);
    console.log(
      "Begin ==> newBegin : " + beginMark + "=> " + newBeginMark + "\n"
    );
    console.log("End ==> newEnd : " + endMark + "=> " + newEndMark + "\n");
    beginMark = newBeginMark;
    endMark = newEndMark;
  } while (!clean);
  console.log("Ending " + Array);
  console.log("Total Counts  " + counter + "\n Total Passes " + passCounter);
};

if (process.argv[2]) {
  BubbleSort(process.argv[2]);
} else {
  console.log(TestArrays);
  for (element in TestArrays) {
    //BubbleSort(TestArrays[element].slice(0));
    console.log("\n");
    BubbleSortLastCallCheck(TestArrays[element].slice(0));
    console.log("\n");
    BubbleSortDynamicFor(TestArrays[element].slice(0));
    //32 best record of comparisons.
    console.log("\n");
  }
}
