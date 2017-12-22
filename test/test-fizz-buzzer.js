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
});


// const fizzBuzzInputs = [15, 30, 45];
// fizzBuzzInputs.forEach(function(input) {
//     const answer = fizzBuzzer(input);

// }
// answer.should.be.