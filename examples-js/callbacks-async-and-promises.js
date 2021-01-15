// callbacks

  function callThatTakesLong(callback) {
    // do something that takes a long time
    // 5 seconds in this simulated case
    setTimeout(function() {
      // after the long response trigger callback with no errors;
      callback(false);
    }, 5000);
  }

  callThatTakesLong(
    function(error){
      if(error) {
        console.log('something went wrong', error);
      }
      console.log('slow thing just finished!');
    }
  );

  // Promises
  function callThatTakesLong2() {
    return promise((resolve, reject) => {
      // do something that takes a long time
      // 5 seconds in this simulated case
      let somethingWentWrong = false;
      //
      setTimeout(function() {
        // after the long response trigger callback
        resolve('Some amazing result!');
      }, 5000);

      if (somethingWentWrong) {
        const error = new Error('error reason');
        reject(error);
      }
    });
  }

  callThatTakesLong2()
  .then(() => {
    console.log('slow thing just finished!');
  })
  .catch((error) => {
    console.log('something went wrong', error);
  });

  // prmises in loops
  const index = 5;
  const promises = [];
  while(index--) {
    promises.push(callThatTakesLong2());
  }

  Promise.all(promises)
  .then((results) => {
    console.log(results);
    // slow thing just finished!
    // slow thing just finished!
    // slow thing just finished!
    // slow thing just finished!
    // slow thing just finished!
  })
  .catch((error) => {
    console.log('something went wrong', error);
    // something went wrong
      // error reason
      // error reason
      // error reason
      // error reason
      // error reason
  });


  // async/await
  async function asyncFunction() {
    try {
      const result = await callThatTakesLong2();
      console.log(result);
      // slow thing just finished!
    } catch(error) {
      // if there is an error
      console.log(error);
      // error reason
    }
  }
