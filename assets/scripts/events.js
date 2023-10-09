const button = document.querySelector('button');

// button.onclick = function () {}; // this always should be set equal to a function

const buttonClickHandler = () => {
  alert('Button was clicked!');
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler; // this overrides the old listener

button.addEventListener('click', buttonClickHandler);

setTimeout(() => {
  button.removeEventListener('click', buttonClickHandler);
}, 2000);

// button.addEventListener('click', () => {
//   console.log('Clicked!');
// });

// setTimeout(() => {
//   button.removeEventListener('click', () => {
//     console.log('Clicked!');
//   });
// }, 2000);
// => This way is not working

const bounFn = buttonClickHandler.bind(this); // you will have to store the bound function in a new constant for removeEventListener to work

button.addEventListener('click', bounFn);

setTimeout(() => {
  button.removeEventListener('click', bounFn);
}, 2000);
