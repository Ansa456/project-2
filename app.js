let myleads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage) {
  myleads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener('click', function(){
  if(inputEl.value !== '') {
    myleads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem('myLeads', JSON.stringify(myleads));
    renderLeads();
  }
});

function renderLeads() {
  let listItems = '';
  for(let i=0 ; i<myleads.length ; i++) {
    listItems += `
    <li>
    <a target='_blank' href='${myleads[i]}'>
    ${myleads[i]}
    </a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}