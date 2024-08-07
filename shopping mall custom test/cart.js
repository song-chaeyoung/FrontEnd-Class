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
      currency: "KRW",
    }).format(product.price);

    if (product) {
      const productDetailDiv = document.querySelector("#cart");

      productDetailDiv.innerHTML = `
        <div class="cart-info">
          <div class="cart_img">
            <img src="${product.img}" alt="${product.name}" />
          </div>
          <div class="cart_desc">
            <h1>CUP</h1>
            <p>Category: ${product.category}</p>
            <p>Price : ${product.price}</p>
          </div>
        </div>
      `;
    } else {
      productDetailDiv.innerText = "존재하지 않는 상품입니다.";
    }
  })

  .catch((error) => {
    console.log("error");
  });
