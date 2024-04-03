
const input = document.querySelector('#input');
const title = document.querySelector('#texth2');
const btn = document.querySelector('#btnColor');

input.addEventListener('change', (e)=>{
  e.preventDefault();
  setTimeout(replaceTitle);
});

function replaceTitle() {
  title.textContent = input.value; 
  document.title = input.value; 
}

btn.addEventListener('click', function() {
    title.style.color = 'blue'
})

