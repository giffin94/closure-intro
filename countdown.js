var countdownGenerator = function (x) {
  let count = x;

  return function(){
      if(count-- > 0){
      return console.log("T-minus " + (count + 1) + "...");
    } else if(count === 0) {
      return console.log("Blast Off!");
    } else {
      return console.log("Rockets already gone, bub!");
    }

  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
