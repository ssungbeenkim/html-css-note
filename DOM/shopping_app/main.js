const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const deleteBtn = document.querySelector('.item__delete');
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

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const itemName = document.createElement('span');
  itemName.setAttribute('class', 'item__name');
  itemName.textContent = text;

  const itemDelete = document.createElement('button');
  itemDelete.setAttribute('class', 'item__delete');
  itemDelete.innerHTML = '<i class="fa-sharp fa-solid fa-trash-can"></i>';
  itemDelete.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const devider = document.createElement('div');
  devider.setAttribute('class', 'devider');

  itemRow.appendChild(item);
  itemRow.appendChild(devider);
  item.appendChild(itemName);
  item.appendChild(itemDelete);

  return itemRow;
}

addBtn.addEventListener('click', onAdd);

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
