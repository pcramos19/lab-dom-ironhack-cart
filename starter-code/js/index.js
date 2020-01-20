let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');

let $delete = document.querySelectorAll('.btn-delete');
let deletes = Array.from($delete);



function updateSubtot(products) {
  let unitPrice = document.querySelectorAll('.pu > span');
  let qty = document.querySelectorAll('.qty input[type=number]');
  let subtotal = document.querySelectorAll('.subtot > span');
  let newPrice = 0;

  for (let i = 0; i<products.length; i++){
      newPrice = parseFloat(unitPrice[i].innerText) * parseFloat(qty[i].value);
      subtotal[i].innerHTML = newPrice;
  }
}

function calcAll() {
let $products = document.querySelectorAll('.product');
let products = Array.from($products);
  updateSubtot(products);
    let result = 0;
    $products.forEach(elem => result += elem.querySelector('.pu span').innerText * elem.querySelector('.qty input').value);
    document.querySelector('h2 span').innerHTML = result;
}



function deletingProducts(elem){
  document.querySelector('.product').remove();
  calcAll();
}
$calc.onclick = calcAll;
$delete.forEach(elem => elem.onclick = deletingProducts);



var addBtn = document.querySelector('#create');
addBtn.onclick = addProducts;


function addProducts(e) {
  var productName = document.querySelector('.create-name').value;
  var productPrice = document.querySelector('.create-price').value;
  var newProduct = document.createElement('tr');
  newProduct.className = 'product';

  newProduct.innerHTML = 
  `<td class="name">
    <span>${productName}</span>
  </td>
  <td class="pu">
    $<span>${productPrice}</span>
  </td>
  <td class="qty">
    <label>
      <input type="number" value="0" min="0">
    </label>
  </td>
  <td class="subtot">
    $<span>0</span>
  </td>
  <td class="rm">
    <button class="btn btn-delete newdeletebtn">Delete</button>
  </td>`;

  newProduct.querySelector('button.btn-delete').onclick = deletingProducts;
  $cart.appendChild(newProduct);
  $calc.onclick = calcAll;
}
