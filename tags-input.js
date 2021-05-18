const tagContainer = document.querySelector('.tags-input');
const input = document.querySelector('.tags-input input');

let tags = [];


function createTag(enteredInputValue) {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  
  const span = document.createElement('span');
  span.setAttribute('class', 'closeIcon');
  
  div.innerHTML = enteredInputValue;
  span.setAttribute('data-item', enteredInputValue);
  div.appendChild(span);
  return div;
}

input.addEventListener('keyup', (event) => {
   const keyCode = event.keyCode ? event.keyCode : event.which;
   
   if (keyCode === 13 || keyCode === 188) {
       console.log('event value', event.target.value);
       const value=event.target.value.split(',');
       tags.push(value[0]);  

      addTags();
      input.value = '';
   }
});

function addTags() {
    clearTags();
    console.log('tags111', tags);
    tags.slice().reverse().forEach(tag => {
        tagContainer.prepend(createTag(tag));
    });
}

function clearTags() {
  document.querySelectorAll('.tag').forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
}

document.addEventListener('click', (e) => {
  console.log('u',e.target.tagName);
  if (e.target.tagName === 'SPAN') {
    const tagLabel = e.target.getAttribute('data-item');
    console.log('tags', tags);
    console.log('taglabel', tagLabel);
    const index = tags.indexOf(tagLabel);
    console.log('index', index);
    tags = [...tags.slice(0, index), ...tags.slice(index+1)];
    console.log('tags', tags);
    addTags();    
  }
})

input.focus();


