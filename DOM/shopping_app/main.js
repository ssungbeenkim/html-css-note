const footerBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const deleteBtn = document.querySelector('.item__delete');
const items = document.querySelector('.items');
/* 
1. 입력창 엔터 눌리면 리스트 추가하고 초기화 포커스 
2. 버튼 눌리면 리스트 추가하고 초기화 포커스 
3. 삭제 누르면 리스트 삭제 
*/

function onAdd() {
  // 사용자의 입력 데이터를 받아옴.
  const text = input.value;
  // 입력받은 데이터로 요소를 만듦
  const item = createItem(text);
  // 요소를 리스트에 추가
  items.appendChild(item);
  // 인풋 초기화 후 포커스
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

  const itemBtn = document.createElement('button');
  itemBtn.setAttribute('class', 'item__delete');
  itemBtn.innerHTML = '<i class="fa-sharp fa-solid fa-trash-can"></i>';

  const devider = document.createElement('div');
  devider.setAttribute('class', 'devider');

  itemRow.appendChild(item);
  itemRow.appendChild(devider);
  item.appendChild(itemName);
  item.appendChild(itemBtn);

  return itemRow;
}

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    onAdd();
  }
});
