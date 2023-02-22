{
  /* 

<div class="product-item">
  <img src="https://picsum.photos/200/240?random=1" />
  <h3>Ürün 1</h3>
  <p>
    Ürün açıklama <br />
    Ürün açıklama <br />
    Ürün açıklama <br />
    Ürün açıklama <br />
  </p>
  <button>Sepete Ekle</button>
  <a href="#">Favorilere Ekle</a>
</div>; 

*/
}

const generateProductItem = (imgURL, header, description) => {
  const productItem = document.createElement("div");
  productItem.classList.add("product-item");

  const imgItem = document.createElement("img");
  imgItem.setAttribute("src", imgURL);
  productItem.append(imgItem);

  const h3Item = document.createElement("h3");
  h3Item.textContent = header;
  productItem.append(h3Item);

  const pItem = document.createElement("p");
  pItem.textContent = description;
  productItem.append(pItem);

  const addButton = generateIconButton("cart-plus", "Sepete Ekle", () => {});
  productItem.append(addButton);

  const favButton = generateIconButton("star", "Favorilere Ekle", () => {});
  productItem.append(favButton);

  return productItem;
};
