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
 
    badInputs.forEach(function(input){
      (function () {
        fizzBuzzer(input);
      }).should.throw(Error);
    });
  });
});
