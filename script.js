const list = document.getElementById('list');
const totalEl = document.getElementById('total');

function load(){
  const data = JSON.parse(localStorage.getItem('exp') || '[]');
  list.innerHTML = '';
  let total = 0;
  data.forEach((e,i)=>{
    total += Number(e.amount);
    const li = document.createElement('li');
    li.innerHTML = `<span>${e.title}</span><span>${e.amount}</span>`;
    li.onclick = ()=> remove(i);
    list.appendChild(li);
  });
  totalEl.innerText = total;
}

function add(){
  const title = document.getElementById('title').value;
  const amount = document.getElementById('amount').value;
  if(!title || !amount) return;

  const data = JSON.parse(localStorage.getItem('exp') || '[]');
  data.push({title, amount});
  localStorage.setItem('exp', JSON.stringify(data));
  document.getElementById('title').value = '';
  document.getElementById('amount').value = '';
  load();
}

function remove(i){
  const data = JSON.parse(localStorage.getItem('exp'));
  data.splice(i,1);
  localStorage.setItem('exp', JSON.stringify(data));
  load();
}

load();
