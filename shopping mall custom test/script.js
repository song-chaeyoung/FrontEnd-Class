// import products from "./product.js";
// console.log(products.data[0].img);

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
      // data: data.data.forEach((item) => ({
      //   ...item,
      //   id: idCounter++,
      // })),
      // 원본데이터를 보존하지 못해서 실행자체가 X, 배열을 다시 복구 > 새로운 배열로 / forEach는 단순 반복
    };
    // console.log(products.data);

    // Removing Items
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    // Making Items
    const createItem = (product) => {
      const ul = document.querySelector("ul");

      const li = document.createElement("li");
      const img = document.createElement("img");
      const attr = document.createAttribute("src");
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;

      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);

      h3.className = "name";
      h3.innerText = product.name;

      span.className = "price";
      span.innerText = price;

      attr.value = product.img;
      img.setAttributeNode(attr);
      div.append(h3, span);
      li.append(img, div);
      ul.appendChild(li);
      // 자식부터 부모순으로, js는 위에서부터 읽는다.

      li.addEventListener("click", () => {
        const url = `product-detail.html?category=${encodeURIComponent(
          product.category
        )}&name=${product.name}`;
        window.location.href = url;
      });
    };

    // Importing Items
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      });
    };

    importData();

    // newest event
    const newListing = document.querySelector(".newlisting");

    const sortNew = (e) => {
      e.preventDefault();
      const myproducts = products.data.sort((a, b) => {
        return a.id - b.id;
      });

      removeItems();

      myproducts.forEach((product) => {
        createItem(product);
      });
    };

    newListing.addEventListener("click", sortNew);

    // ascending event
    const ascending = document.querySelector(".ascending");

    const sortAsce = (e) => {
      e.preventDefault();
      const myproducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });

      removeItems();

      myproducts.forEach((product) => {
        createItem(product);
      });
    };
    ascending.addEventListener("click", sortAsce);

    // Descending
    const descendBtn = document.querySelector(".decending");

    const sortDesc = (e) => {
      e.preventDefault();
      const myproducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });
      removeItems();

      myproducts.forEach((product) => {
        createItem(product);
      });
    };

    descendBtn.addEventListener("click", sortDesc);

    //search
    const searchBar = document.querySelector(".searchbar");

    searchBar.addEventListener("input", () => {
      const keyword = searchBar.value.toLowerCase();
      if (keyword === "") {
        removeItems();
        importData();
        // 예외조항처리
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        });

        removeItems();

        filtered.forEach((product) => {
          createItem(product);
        });
      }
    });

    // Category Select event
    const select = document.querySelector("select");

    const selectCategory = (e) => {
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;
      console.log(value);
      // console.log(e.target.options.selectedIndex);
      // console.log(e.target.value);

      const filtered = products.data.filter((product) => {
        return product.category === value;
      });

      removeItems();

      filtered.forEach((product) => {
        createItem(product);
      });
    };

    select.addEventListener("change", selectCategory);
  })

  .catch((error) => {
    console.log(error);
  });

// chatbot
(function () {
  var w = window;
  if (w.ChannelIO) {
    return w.console.error("ChannelIO script included twice.");
  }
  var ch = function () {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function (args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) {
      return;
    }
    w.ChannelIOInitialized = true;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    var x = document.getElementsByTagName("script")[0];
    if (x.parentNode) {
      x.parentNode.insertBefore(s, x);
    }
  }
  if (document.readyState === "complete") {
    l();
  } else {
    w.addEventListener("DOMContentLoaded", l);
    w.addEventListener("load", l);
  }
})();

ChannelIO("boot", {
  pluginKey: "5d746fcf-88c0-411f-ada2-2c92a72f1d64",
});
