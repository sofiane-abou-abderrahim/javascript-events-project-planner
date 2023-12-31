const button = document.querySelector('button');

const buttonClickHandler = event => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

const bounFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener(
  'click',
  event => {
    console.log('CLICKED DIV');
    console.log(event);
  }
  // true // "true" tells to the browser that this event listener should be part of the capturing phase
);

button.addEventListener('click', function (event) {
  event.stopPropagation();
  // event.stopImmediatePropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

list.addEventListener('click', function (event) {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();
  button.click();
  console.log(this); // it points at the current target, so basically at the element on which you registered the event listener
});
