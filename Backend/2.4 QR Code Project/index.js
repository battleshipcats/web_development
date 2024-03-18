/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs"; 

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'text',
        name: 'url',
        message: 'Please type or paste a URL.',
        validate(text) {
          if (text.length < 3) {
            return 'Must be at least 3 letters.';
          }
    
          return true;
        },
        waitUserInput: true,
      },
  
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!

        var inputURL = answers.url;
        var qr_png = qr.image(inputURL, { type: 'png' });
        qr_png.pipe(fs.createWriteStream('google_qr.png'));
    
        fs.writeFile("google_qr.txt", inputURL, (err) => {
            if (err) throw err;
            console.log('The text file has been saved!');
            });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

/* const questions = [
    {
      type: 'text',
      name: 'url',
      message: 'Please type or paste a URL.',
      validate(text) {
        if (text.length < 3) {
          return 'Must be at least 3 letters.';
        }
  
        return true;
      },
      waitUserInput: true,
    },
  ];
  
  inquirer.prompt(questions).then((answers) => {

    var inputURL = answers.url;
    var qr_png = qr.image(inputURL, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('google_qr.png'));

    fs.writeFile("google_qr.txt", inputURL, (err) => {
        if (err) throw err;
        console.log('The text file has been saved!');
        });
        
}); */