var fs = require('fs');

fs.readFile('./intro.txt', 'utf8', function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);

  fs.writeFile('./intro.txt', 'Hello Node.js', (err) => {
    if (err) {
      throw err;
    }

    console.log('The file has been saved!');
  });


});
