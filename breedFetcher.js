const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, data) => {
    if (error !== null) {
      return callback(error,null);
    }

    if (breedName === undefined) {
      return callback("You didn't input a breed name, please add a breed name to the end of the commandline and try again",null);
    }
    
    const result = JSON.parse(data)[0];

    if (result === undefined) {
      return callback("Couldn't find that breed, check your spelling and try again");
    }

    return callback(null,result.description);
  });
};

module.exports = { fetchBreedDescription };
