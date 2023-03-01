const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const items = document.querySelector('.items');
/* 
1. 입력창 엔터 눌리면 리스트 추가하고 초기화 포커스 
2. 버튼 눌리면 리스트 추가하고 초기화 포커스 
3. 삭제 누르면 리스트 삭제 
*/

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
  itemRow.setAttribute('data-id', id);
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

addBtn.addEventListener('click', () => onAdd());

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id && event.target.tagName === 'I') {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});

window.addEventListener('load', input.focus());
