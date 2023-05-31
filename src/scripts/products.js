// JSDOC
/**
 * It generate icon-button DOM object and returns
 * @param {String} buttonText content text of the button
 * @param {String} iconClass font awesome icon class name. It won't produce i tag if iconClass is null.
 * @returns Button DOM object
 */
const generateButton = (buttonText, iconClass) => {
  const btn = document.createElement("button");

  if (iconClass) {
    btn.innerHTML = `<i class="${iconClass}"></i> ${buttonText}`;
  } else {
    btn.textContent = buttonText;
  }

  // 1
  btn.className = "icon-button";
  // 2
  //   btn.classList.add("icon-button");
  // 3
  //   btn.setAttribute("class", "icon-button");
  return btn;
};

const sepetBtn = generateButton("Sepetim", "fa-solid fa-cart-shopping");
sepetBtn.style.marginRight = "5px";

console.log("sepetBtn  > ", sepetBtn);

document.getElementById("user-info-panel").append(sepetBtn);

const myPageBtn = generateButton("Sayfam", "fa-solid fa-user-ninja");

document.getElementById("user-info-panel").append(myPageBtn);

const ordersBtn = generateButton("Siparişlerim");

document.getElementById("user-info-panel").append(ordersBtn);

/**
 *
 * @param {*} product
 */
const generateProductComponent = (product) => {
  const container = document.createElement("div");
  container.setAttribute("class", "product-item");
  container.setAttribute("title", product.name);

  const img = document.createElement("img");
  img.setAttribute("src", product.img);
  container.append(img);

  const heaedar = document.createElement("h3");
  heaedar.textContent = product.name;
  container.append(heaedar);

  const aciklama = document.createElement("p");
  aciklama.textContent = product.description;
  container.append(aciklama);

  const price = document.createElement("span");
  price.textContent = product.price;
  price.className = "product-price";
  container.append(price);

  const sptBtn = generateButton("Sepete Ekle", "fa-solid fa-cart-plus");
  container.append(sptBtn);

  const favBtn = generateButton("Favoprilere Ekle", "fa-solid fa-star");
  container.append(favBtn);

  const deleteBtn = generateButton("Sil", "fa-solid fa-trash");
  deleteBtn.addEventListener("click", () => deleteProduct(product.id));
  container.append(deleteBtn);

  return container;
};

const productsContainer = document.getElementById("products-container-section");

const fetchProducts = () => {
  const productsPromise = axios.get(
    "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products"
  );

  productsContainer.innerHTML = "Loading...";

  productsPromise
    .then((response) => {
      // response
      // console.log("axios res > ", response);
      console.log("producst > ", response.data);

      const productsData = response.data;
      productsContainer.innerHTML = "";
      productsData.forEach((product) => {
        productsContainer.append(generateProductComponent(product));
      });
    })
    .catch((err) => {
      console.error(
        "Producst request end with error: [" +
          err.response.status +
          "] " +
          err.message
      );
      alert(
        "Producst request end with error: [" +
          err.response.status +
          "] " +
          err.message
      );
    })
    .finally(() => {
      console.warn("Producst req sonlandırıldı!");
    });
};

fetchProducts();

setTimeout(() => {
  if (productsData) {
    alert("products sayısı: " + productsData.length);
  }
}, 2000);

const deleteProduct = (productId) => {
  axios
    .delete(
      `https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/${productId}`
    )
    .then(() => {
      fetchProducts();
    });
};
