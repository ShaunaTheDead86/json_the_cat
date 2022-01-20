// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error for an undefined breed, via callback', (done) => {
    fetchBreedDescription(undefined, (err, desc) => {

      const expectedError = "You didn't input a breed name, please add a breed name to the end of the commandline and try again";

      assert.equal(err, expectedError);

      done();
    });
  });

  it('returns an error for a breed that was not found, via callback', (done) => {
    fetchBreedDescription('asdfsadfasdf', (err, desc) => {

      const expectedError = "Couldn't find that breed, check your spelling and try again";

      assert.equal(err, expectedError);

      // const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      // assert.equal(null, null);

      done();
    });
  });
});
