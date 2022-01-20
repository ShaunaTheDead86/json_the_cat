const request = require('request');
const input = process.argv.slice(2);
const inputURL = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;

request(inputURL, (error, response, data) => {
  if (input[0] === undefined) {
    return console.log("You didn't input a search query");
  }

  if (error) throw error;
  if (response.statusCode === 200) console.log('Server says everything is OK!');
  if (JSON.parse(data).length === 0) {
    return console.log('Breed not found, check the spelling and try again!');
  }
  console.log(JSON.parse(data)[0]);
});