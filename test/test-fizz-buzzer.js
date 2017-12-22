'use strict';

const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {
    
  it('should provide fizz/buzz/fizz-buzz or a number', function() {
    const normalCases = [
      {num: 30, expected: 'fizz-buzz'},
      {num: 10, expected: 'buzz'},
      {num: 6, expected: 'fizz'},
      {num: 2, expected: 2}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });




  });

  it('should raise an error if argument is not a number', function(){
    const badInputs = 
      ['arr', true, '3'];
      //  function(badInputs){
      //    fizzBuzzer(badInputs).should.throw(Error);
      //  };   
    badInputs.forEach(function(input){
      (function(){
        (fizzBuzzer(input)).should.be(Error);
      });
    });
  });
});
//   badInputs.forEach(function(input) {
// (function () {
//     adder(input[0], input[1]);
// }).should.throw(Error);
//         });
// });

// const fizzBuzzInputs = [15, 30, 45];
// fizzBuzzInputs.forEach(function(input) {
//     const answer = fizzBuzzer(input);

// }
// answer.should.be.