const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const items = document.querySelector('.items');
const form = document.querySelector('.new-form');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center', behavior: 'smooth' });
  input.value = '';
  input.focus();
}
let id = 0; //UUID
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-target-id', id);
  itemRow.innerHTML = `
  <div class="item">
    <span class="item__name">${text}</span>
    <button class="item__delete">
      <i class="fa-sharp fa-solid fa-trash-can" data-id=${id}></i>
    </button></div>
  <div class="devider"></div>
  `;
  id++;
  return itemRow;
}

// addBtn.addEventListener('click', () => onAdd());

// input.addEventListener('keyup', (event) => {
//   if (event.key === 'Enter') {
//     onAdd();
//   }
// });
form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});
items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(
      `.item__row[data-target-id="${id}"]`
    );
    toBeDeleted.remove();
  }
});

window.addEventListener('load', input.focus());
