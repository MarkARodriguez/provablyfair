const crypto = require('crypto');

// Input data provided by the server/game
const clientSeed = '5a01874f8978e82e3f237468d706afade9366b4d90344591223e88164c2a22f7'; // Replace with the actual client seed
const serverSeed = '8eaa5c67611396a2884f3c9d684bce59137c588a58c0453dea0a1ba7dcf41263'; // Replace with the actual server seed
const nonce = 1683690433739; // Replace with the actual nonce value
const expectedOutcome = 69; // Replace with the actual outcome from the game

// Combine the client seed, server seed, and nonce to create the input data
const input = clientSeed + serverSeed + nonce;

// Hash the input data using a cryptographic hash function (SHA512)
const hash = crypto.createHash('sha512').update(input).digest('hex');

// Convert the hash value to a number between 0 and 99
const outcome = parseInt(hash.substr(0, 8), 16) % 100;
console.log("this is the outcome: " + outcome);

// Compare the calculated outcome with the expected outcome
if (outcome === expectedOutcome) {
  console.log('The outcome is verified!');
  console.log(`Outcome: ${outcome}`);
} else {
  console.log('The outcome could not be verified.');
  console.log(`Expected outcome: ${expectedOutcome}`);
  console.log(`Calculated outcome: ${outcome}`);
}
