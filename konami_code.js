const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


 
function init() {
<<<<<<< HEAD
  // const input = document.querySelector('body');
  const key = parseInt(e.detail || e.which);
  console.log(e.which)
  console.log('1st break')
  console.log(e.location)
  console.log('2nd break')
  console.log(e.detail)
  console.log('end')
  // input.addEventListener('keydown', function(e) {

  //  });
}

// init()

=======
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
     if (key === code[index]) {
       index++;
      if (index === code.length) {
       alert("Congratulations!");
       index = 0;
      }
    }
    else {
    index = 0;
  };
 })
}
init()
>>>>>>> 628bc807cdf0e475ef45fbf2e1d1164341880a4c
