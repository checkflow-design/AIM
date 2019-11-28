// = require jquery
// = require rails-ujs
// = require_tree .


const content = document.querySelector('.content-how');
const link2 = document.querySelector('.link-t');

console.log(link2)

link2.addEventListener('click', (event) => {
  event.preventDefault()
  console.log(event);
  if (content.classList.contains('d-none')) {
    link2.innerText = '--'
    content.classList.remove('d-none')
  } else {
    link2.innerText = '+'
    content.classList.add('d-none')
  }
})


