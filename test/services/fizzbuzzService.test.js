const Fizzbuzz = require('./../../lib/services/fizzbuzzService')

describe('Fizzbuzz', () => {
    test('1.- Validate trick', () => {
        expect(Fizzbuzz.applyValidationInExplorer({name: "Explorer1", score: 1})).toEqual({name: "Explorer1", score: 1, trick: 1})
    });

    test('2.- Validate Fizz', () => { 
        expect(Fizzbuzz.applyValidationInExplorer({name: "Explorer3", score: 3})).toEqual({name: "Explorer3", score: 3, trick: 'FIZZ'})
    });

    test('3.- Validate Buzz  ', () => {
        expect(Fizzbuzz.applyValidationInExplorer({name: "Explorer5", score: 5})).toEqual({name: "Explorer5", score: 5, trick: 'BUZZ'})
    });

    test('4.- Validate Fizzbuzz ', () => {
        expect(Fizzbuzz.applyValidationInExplorer({name: "Explorer15", score: 15})).toEqual({name: "Explorer15", score: 15, trick: 'FIZZBUZZ'})
    });
})