const productInfo =
  "https://my-json-server.typicode.com/song-chaeyoung/oliveyoung-fake/db";

fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const name = params.get("name");

    const product = products.data.find(
      (product) => product.category === category && product.name === name
    );

    const price = new Intl.NumberFormat("ko-kr", {
      // style: "currency",
      currency: "KRW",
    }).format(product.price);

    if (product) {
      const productDetailDiv = document.querySelector("#product-detail");

      productDetailDiv.innerHTML = `
      <div class="product-category">
        <h3>현재카테고리 ${product.category} > ${product.name}<h3>
      </div>
      <div class="product-img">
        <img src="${product.img}" alt="${product.name}" />
      </div>
      <div class="product-info">
        <h1>${product.name}</h1>
        <p>Category: ${product.category}</p>
        <p>Price : ${price}</p>
      </div>
      <button id="addtocart">장바구니 이동</button>
      `;
    } else {
      productDetailDiv.innerText = "존재하지 않는 상품입니다.";
    }

    // 1번
    const addToCartBtn = document.querySelector("#addtocart");
    addToCartBtn.addEventListener("click", () => {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.push({
        ...product,
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      window.location.href = "cart.html";
    });
    // 2번
    // const cartBtn = document.querySelector("button");
    // cartBtn.addEventListener("click", () => {
    //   const carturl = `cart.html?category=${encodeURIComponent(
    //     product.category
    //   )}&name=${product.name}`;
    //   window.location.href = carturl;
    // });
  })

  .catch((error) => {
    console.log(error);
  });
