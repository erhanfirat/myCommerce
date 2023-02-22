const user = {
  name: "ali",
  email: "ali@ali.com",
};

if (!user) {
  const userLink = document.getElementById("myPage");
  if (userLink) {
    // prop
    userLink.textContent = "Login";
    // setter method
    userLink.setAttribute("href", "/login");
    // camelCase > fontSize =? font-size
    // font-weight > fontWeight
    userLink.style.fontSize = "2rem";
    console.log("userLink.classList > ", userLink.classList);
    userLink.classList.add("special-link");
    console.log("userLink.classList > ", userLink.classList);
    userLink.classList.remove("ücüncü-class");
  }
} else {
  const welcome = document.createElement("h3");
  welcome.innerHTML = "<strong>" + user.name + "</strong> hoşgeldin!";
  console.log("welcome > ", welcome);
  document.getElementsByClassName("user-greeting")[0].prepend(welcome);
}

// Object Array
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Ürün açıklaması 1",
    imgURL: "https://picsum.photos/200/240?random=1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Ürün açıklaması 2",
    imgURL: "https://picsum.photos/200/240?random=2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Ürün açıklaması 3",
    imgURL: "https://picsum.photos/200/240?random=3",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Ürün açıklaması 4",
    imgURL: "https://picsum.photos/200/240?random=4",
  },
  {
    id: 5,
    name: "Product 5",
    description: "Ürün açıklaması 5",
    imgURL: "https://picsum.photos/200/240?random=5",
  },
  {
    id: 6,
    name: "Product 6",
    description: "Ürün açıklaması 6",
    imgURL: "https://picsum.photos/200/240?random=6",
  },

  {
    id: 7,
    name: "Product 7",
    description: "Ürün açıklaması 7",
    imgURL: "https://picsum.photos/200/240?random=7",
  },

  {
    id: 8,
    name: "Product 8",
    description: "Ürün açıklaması 8",
    imgURL: "https://picsum.photos/200/240?random=8",
  },

  {
    id: 9,
    name: "Product 9",
    description: "Ürün açıklaması 9",
    imgURL: "https://picsum.photos/200/240?random=9",
  },

  {
    id: 10,
    name: "Product 10",
    description: "Ürün açıklaması 10",
    imgURL: "https://picsum.photos/200/240?random=10",
  },

  {
    id: 11,
    name: "Product 11",
    description: "Ürün açıklaması 11",
    imgURL: "https://picsum.photos/200/240?random=11",
  },

  {
    id: 12,
    name: "Product 12",
    description: "Ürün açıklaması 12",
    imgURL: "https://picsum.photos/200/240?random=12",
  },
];

const appendProductsIntoContainer = () => {
  const productsContainer = document.getElementById(
    "products-container-section"
  );

  for (const product of products) {
    const productItem = generateProductItem(
      product.imgURL,
      product.name,
      product.description
    );

    productsContainer.append(productItem);
  }
};

appendProductsIntoContainer();

const productCards = document.querySelectorAll(".product-item");

for (const productCard of productCards) {
  productCard.addEventListener("click", (e) => {
    window.location =
      "file:///C:/Projects/WorkInTech/Sprint%205/myCommerce/src/productDetail.html";
  });
}

const productButtons = document.querySelectorAll(".product-item > button");

let shoppingCart = [];

for (const btn of productButtons) {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    shoppingCart.push(e.target.parentElement.children[1].textContent);
    document.getElementById("shopping-cart").textContent = shoppingCart.length;
    e.target.disabled = true;
  });
}

document.getElementById("about-link").addEventListener("click", (e) => {
  e.preventDefault();
});

const preventContextMenu = (e) => {
  e.preventDefault();
};

window.addEventListener("contextmenu", preventContextMenu);

const sepetBtn = generateIconButton("cart-shopping", "Sepete Git", () => {
  window.location = "sepet-sayfasi.html";
});

sepetBtn.append(document.createElement("span"));

document.getElementById("user-info-panel").append(sepetBtn);
