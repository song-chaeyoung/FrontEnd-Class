const dataurl = "https://reqres.in/api/products/10";

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://reqres.in/api/products/10");
xhr.send();

const productCreate = (products) => {
  const product = document.querySelector(".product");

  product.innerHTML = `
      <div class="title">Name : ${products.name}</div>
      <div class="year">Year : ${products.year}</div>
      <div class="pantone_value">Pantone_value : ${products.pantone_value}</div>
      <div class="color"></div>
  `;
  console.log(products.color);
  const color = document.querySelector(".color");
  document.querySelector(".color").style.backgroundColor = `${products.color}`;
};

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const products = JSON.parse(xhr.responseText);
    productCreate(products.data);
  }
};
