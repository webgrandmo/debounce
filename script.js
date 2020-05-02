const debounce = (fn, delay) => {
 //Set timeout id
 let timeoutID;
//Return a function with n arguments
  return function(...args) {
    //Clear timeout, if exist(meaning user clicked already)
    if(timeoutID) {
      clearTimeout(timeoutID);
    }
    //Set Timeout function
    timeoutID = setTimeout( () => {
     //Execute a function
     fn(...args);
    }, delay)
  }
}
document.getElementById('button').addEventListener('click', debounce(e => {
  console.log('Clicked');
}, 2000));
