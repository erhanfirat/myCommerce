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

// string literal - backtick

// const makale =
//   "selam  \nalt satırdan merhaba" +
//   "asdasda" +
//   ordersBtn.textContent +
//   "asdasd";

// const makale2 = `selam
// alt satırdan merhaba ${ordersBtn.textContent}
// bir alt satıra`;

// console.log(makale);
// console.log(makale2);

const productsData = [
  {
    createdAt: "2023-04-18T15:29:07.437Z",
    name: "Gerardo Borer",
    img: "https://loremflickr.com/640/480/people",
    description:
      "Maxime iusto architecto est. Illo temporibus nulla sint possimus. Dolore maxime suscipit aspernatur veritatis reiciendis expedita aliquam laboriosam veritatis. Ipsa ullam quos sed ipsam iste quis numquam. Nesciunt debitis soluta.",
    stock: "8",
    price: "94.00",
    id: "1",
  },
  {
    createdAt: "2023-04-18T20:48:39.967Z",
    name: "Taylor Langosh",
    img: "https://loremflickr.com/640/480/business",
    description:
      "Sed eaque provident voluptatem facilis dicta consectetur vel. Sit ratione ab laborum. Voluptatum dicta maiores commodi voluptatem repudiandae. Enim rem quod ab facere quis. Id quod error ex velit praesentium enim quod neque. Asperiores voluptates ad temporibus suscipit tenetur ad.",
    stock: "5",
    price: "424.00",
    id: "2",
  },
  {
    createdAt: "2023-04-19T00:58:49.418Z",
    name: "Roman Roob",
    img: "https://loremflickr.com/640/480/abstract",
    description:
      "Ex nesciunt est necessitatibus ad tempore. Facere sint nostrum quos debitis officiis optio in assumenda. Rerum eligendi debitis dolor. Nobis corrupti accusamus atque quia. Eius sint ut inventore minus. Illo porro cum recusandae praesentium atque alias nostrum magni suscipit.",
    stock: "6",
    price: "607.00",
    id: "3",
  },
  {
    createdAt: "2023-04-18T15:17:15.314Z",
    name: "Nicholas Feil",
    img: "https://loremflickr.com/640/480/city",
    description:
      "Architecto cumque ab. Nesciunt quidem eaque nemo possimus quam cupiditate ab eligendi vitae. Iusto aspernatur natus minus nesciunt earum iusto debitis.",
    stock: "6",
    price: "879.00",
    id: "4",
  },
  {
    createdAt: "2023-04-18T18:48:19.084Z",
    name: "Rafael Kunze",
    img: "https://loremflickr.com/640/480/abstract",
    description:
      "Sint facere earum. Tenetur dolore porro excepturi. Corrupti magni maxime ut provident. Consequatur dolorum voluptatem quia repellendus impedit amet.",
    stock: "2",
    price: "220.00",
    id: "5",
  },
  {
    createdAt: "2023-04-18T16:11:53.162Z",
    name: "Theodore Yundt",
    img: "https://loremflickr.com/640/480/business",
    description:
      "Quas recusandae aliquid labore sunt libero. Tenetur id assumenda facilis rerum impedit beatae ratione dolores. Ullam accusamus reprehenderit aperiam fugiat labore tempore delectus excepturi aliquid.",
    stock: "2",
    price: "228.00",
    id: "6",
  },
  {
    createdAt: "2023-04-18T21:44:42.677Z",
    name: "Jenny Jakubowski",
    img: "https://loremflickr.com/640/480/sports",
    description:
      "Temporibus excepturi quasi. Quam quia voluptatem dicta ipsum. Adipisci eaque sit dicta quo. Ut repellat rerum magnam odit consequuntur.",
    stock: "3",
    price: "737.00",
    id: "7",
  },
  {
    createdAt: "2023-04-18T14:42:14.725Z",
    name: "Ramiro Bradtke",
    img: "https://loremflickr.com/640/480/city",
    description:
      "Beatae veritatis perspiciatis. Autem error quasi architecto asperiores nam esse autem. Debitis est cumque odit debitis ut. Iste temporibus delectus voluptates quam. Incidunt at laboriosam quaerat.",
    stock: "4",
    price: "467.00",
    id: "8",
  },
  {
    createdAt: "2023-04-19T00:58:32.584Z",
    name: "Rudolph Reynolds Sr.",
    img: "https://loremflickr.com/640/480/technics",
    description:
      "Architecto fugiat doloremque. Corrupti ducimus quis nemo. Autem officia iure aliquid id. Velit ullam omnis totam optio quaerat excepturi accusantium.",
    stock: "9",
    price: "538.00",
    id: "9",
  },
  {
    createdAt: "2023-04-19T07:39:51.935Z",
    name: "Gilberto Johnston",
    img: "https://loremflickr.com/640/480/people",
    description:
      "Vitae praesentium necessitatibus. Ullam optio numquam nemo accusantium voluptas labore debitis laudantium dolorem. Corporis natus odit totam ipsa earum. Dolor inventore vitae nulla minus ex. Alias deleniti est quaerat voluptates nesciunt.",
    stock: "4",
    price: "264.00",
    id: "10",
  },
  {
    createdAt: "2023-04-19T07:58:02.398Z",
    name: "Violet Connelly",
    img: "https://loremflickr.com/640/480/abstract",
    description:
      "Quasi delectus sint qui rerum optio. Iusto nobis omnis minus aliquid necessitatibus ea. Ab quasi culpa iure sequi illum nesciunt enim. Cupiditate facere molestias cum adipisci cupiditate voluptatum ad quasi.",
    stock: "5",
    price: "259.00",
    id: "11",
  },
  {
    createdAt: "2023-04-18T14:53:36.690Z",
    name: "Frank Will",
    img: "https://loremflickr.com/640/480/animals",
    description:
      "Quas cumque assumenda. Sit harum minus ratione rem perspiciatis. Ea rerum ducimus quaerat rerum. Officiis nesciunt quod dicta excepturi perferendis dolorum inventore. Exercitationem doloribus unde omnis iusto. Vitae exercitationem facere vel.",
    stock: "2",
    price: "180.00",
    id: "12",
  },
  {
    createdAt: "2023-04-18T11:39:51.346Z",
    name: "Miss Lester Bergnaum Sr.",
    img: "https://loremflickr.com/640/480/animals",
    description:
      "Iusto id neque voluptatibus architecto eos illum. Veritatis et velit consequuntur eligendi reprehenderit esse ipsa. Blanditiis illo qui pariatur aperiam dignissimos minima. Dicta totam ipsa hic numquam sed alias optio non.",
    stock: "7",
    price: "253.00",
    id: "13",
  },
  {
    createdAt: "2023-04-18T17:37:02.778Z",
    name: "Suzanne Denesik",
    img: "https://loremflickr.com/640/480/animals",
    description:
      "Id eius esse alias tenetur repudiandae error. Sapiente ipsam quas quasi doloribus harum aperiam temporibus doloribus quibusdam. Nobis officia enim molestiae quisquam natus. Eum commodi doloremque cum dolor excepturi cumque neque perferendis. Aspernatur neque aliquam fugit hic laboriosam. Illo non modi magni doloribus a.",
    stock: "7",
    price: "220.00",
    id: "14",
  },
  {
    createdAt: "2023-04-19T05:00:52.067Z",
    name: "Ebony McDermott",
    img: "https://loremflickr.com/640/480/city",
    description:
      "Consequuntur itaque laudantium. Omnis repellendus quod perferendis esse tenetur harum blanditiis. Consectetur sed repellendus laborum quibusdam vel ipsa. Exercitationem reprehenderit recusandae dolor dicta cum sunt perspiciatis atque corrupti. Odit rem aspernatur accusantium recusandae deserunt neque sed ullam. Vel beatae labore id rerum qui explicabo beatae repellendus.",
    stock: "1",
    price: "690.00",
    id: "15",
  },
  {
    createdAt: "2023-04-18T22:04:08.393Z",
    name: "Lydia Harber Jr.",
    img: "https://loremflickr.com/640/480/nightlife",
    description:
      "Earum reprehenderit quia. Eaque vero sunt necessitatibus rerum saepe distinctio. Aliquid fugit ipsum ut iusto ex soluta. Eius modi libero distinctio reiciendis. Est odio dolores cumque mollitia. Tempora officiis molestias unde voluptatum nesciunt rem incidunt labore.",
    stock: "4",
    price: "700.00",
    id: "16",
  },
  {
    createdAt: "2023-04-19T01:05:45.282Z",
    name: "Mr. Andy Nikolaus",
    img: "https://loremflickr.com/640/480/technics",
    description:
      "Dignissimos alias voluptatum atque delectus pariatur laboriosam porro occaecati. Qui temporibus maxime minus molestias dolore maiores. Eveniet maiores doloremque eos doloremque. Occaecati nulla iste quibusdam optio a placeat aliquam minus.",
    stock: "3",
    price: "157.00",
    id: "17",
  },
  {
    createdAt: "2023-04-18T14:42:30.907Z",
    name: "Sharon Kohler",
    img: "https://loremflickr.com/640/480/abstract",
    description:
      "Totam repellat nemo fuga voluptates odio fugit mollitia ratione eveniet. Nulla accusantium officia iste minima voluptatem quisquam nemo sapiente. Quaerat earum maiores perferendis nostrum corporis nesciunt. Rerum velit unde sed doloribus. Nihil libero eum corporis est ducimus excepturi similique facere. Laborum vero nihil minima occaecati quia.",
    stock: "4",
    price: "886.00",
    id: "18",
  },
  {
    createdAt: "2023-04-18T11:19:01.276Z",
    name: "Mrs. Leon Wuckert",
    img: "https://loremflickr.com/640/480/fashion",
    description:
      "Praesentium molestias sunt nisi qui veniam. Nihil nam sit cupiditate fuga. Adipisci numquam numquam quasi praesentium.",
    stock: "9",
    price: "174.00",
    id: "19",
  },
  {
    createdAt: "2023-04-18T11:12:24.659Z",
    name: "Mrs. Sheryl Walter",
    img: "https://loremflickr.com/640/480/fashion",
    description:
      "Similique eos tempore aliquid sed assumenda ipsum soluta similique atque. Culpa aliquid temporibus velit necessitatibus id soluta. Delectus odit expedita nulla dicta nesciunt nulla sequi ipsum. Sed unde iste cupiditate voluptate minima et alias ullam placeat. Sint neque sunt doloribus.",
    stock: "5",
    price: "463.00",
    id: "20",
  },
  {
    createdAt: "2023-04-19T08:04:38.331Z",
    name: "Mr. Glen Abshire",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "Amet at unde quo nihil. Dolores alias sapiente debitis. Tenetur placeat placeat ipsam ex est. Nobis aliquam illo ipsa. Quidem impedit ad iure sapiente inventore nostrum.",
    stock: "3",
    price: "82.00",
    id: "21",
  },
  {
    createdAt: "2023-04-18T21:17:58.870Z",
    name: "Cindy Ullrich",
    img: "https://loremflickr.com/640/480/abstract",
    description:
      "Magni ad laudantium. Architecto incidunt labore quibusdam doloremque reprehenderit totam error fuga. Recusandae modi aperiam dolores molestiae quam modi facere consectetur reiciendis. Reprehenderit possimus ipsam ipsam odio eius. Ratione pariatur odit cupiditate ex explicabo eos. Dolores cupiditate voluptatem magnam occaecati velit ducimus aut.",
    stock: "2",
    price: "203.00",
    id: "22",
  },
  {
    createdAt: "2023-04-19T05:36:18.082Z",
    name: "Mrs. Byron Rutherford",
    img: "https://loremflickr.com/640/480/business",
    description:
      "Consequuntur quas minus alias iusto totam fugiat dolorem suscipit eveniet. Qui adipisci iure libero facere. Ratione fugiat eius nemo dignissimos quia reprehenderit quibusdam unde voluptatum. Adipisci in animi. Nisi eum rerum dolore modi commodi consequuntur fugiat culpa culpa. Recusandae debitis est laboriosam commodi.",
    stock: "2",
    price: "680.00",
    id: "23",
  },
  {
    createdAt: "2023-04-18T14:37:25.930Z",
    name: "Nicolas Larson",
    img: "https://loremflickr.com/640/480/food",
    description:
      "Facilis maxime impedit. Illum voluptatibus alias nesciunt laborum. Expedita natus reiciendis velit repudiandae excepturi exercitationem sit. Natus consequuntur nihil at est nam numquam exercitationem unde. Laudantium praesentium architecto facilis tempora sapiente laudantium a autem voluptatum. Nulla quae quas aliquam beatae.",
    stock: "1",
    price: "352.00",
    id: "24",
  },
  {
    createdAt: "2023-04-18T13:06:10.041Z",
    name: "Ms. Nina Smitham",
    img: "https://loremflickr.com/640/480/people",
    description:
      "Deserunt quas fugit quod eos. Vero nemo sunt veniam natus provident debitis et amet. Ratione vitae illum porro laboriosam placeat distinctio enim.",
    stock: "4",
    price: "652.00",
    id: "25",
  },
  {
    createdAt: "2023-04-19T09:36:36.772Z",
    name: "Floyd Considine",
    img: "https://loremflickr.com/640/480/animals",
    description:
      "Fugit dolores pariatur sint. Ipsam rerum perspiciatis. Eum delectus vitae doloribus eaque illum dolorum doloremque. Tempora repudiandae nobis. Expedita voluptates quaerat eaque autem porro alias quae architecto. Numquam culpa nihil eaque ex culpa doloribus exercitationem iure.",
    stock: "1",
    price: "465.00",
    id: "26",
  },
  {
    createdAt: "2023-04-19T07:29:10.796Z",
    name: "Maria Hagenes",
    img: "https://loremflickr.com/640/480/abstract",
    description:
      "Accusantium nam eaque officia quas tempora accusamus accusantium facere optio. Tenetur ullam sunt eum eius voluptatibus dolore nesciunt. Nobis in aliquam. Occaecati in est officiis saepe occaecati facere sequi id. Nostrum voluptates quia aliquam consectetur. Nemo earum eum vel.",
    stock: "8",
    price: "574.00",
    id: "27",
  },
  {
    createdAt: "2023-04-18T10:36:33.051Z",
    name: "Dr. Lillian Stehr",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "Vero eum incidunt numquam dicta earum nihil quo. Ea consequuntur perspiciatis quaerat aut. Itaque recusandae culpa assumenda repellendus recusandae.",
    stock: "7",
    price: "11.00",
    id: "28",
  },
  {
    createdAt: "2023-04-18T15:34:25.668Z",
    name: "Sheri Haag IV",
    img: "https://loremflickr.com/640/480/business",
    description:
      "Quam doloribus consectetur ullam minima dolorem nulla alias. Hic quos quibusdam velit veniam officiis autem. Aliquid nam dolorum fuga minima cum blanditiis nobis voluptas dolores.",
    stock: "3",
    price: "157.00",
    id: "29",
  },
  {
    createdAt: "2023-04-18T10:43:00.306Z",
    name: "Joann Cummings",
    img: "https://loremflickr.com/640/480/technics",
    description:
      "Aliquid id aut recusandae sit rerum. Repudiandae iure voluptatibus illum mollitia. Nobis eveniet voluptatum officiis temporibus numquam facere animi. Nihil necessitatibus et doloremque quisquam. Impedit sed excepturi. Dolore recusandae ad reiciendis magnam necessitatibus.",
    stock: "8",
    price: "672.00",
    id: "30",
  },
  {
    createdAt: "2023-04-18T13:21:01.258Z",
    name: "Camille Donnelly",
    img: "https://loremflickr.com/640/480/abstract",
    description:
      "Ipsum harum nemo maiores saepe dignissimos cum tenetur alias. Deserunt officia repellat mollitia facere. A quae doloremque in qui inventore iure reprehenderit. Quae porro mollitia temporibus eveniet ratione laudantium quam in cumque. Veritatis culpa ullam iusto. Quaerat quia nostrum aut sed sint a eligendi sit exercitationem.",
    stock: "2",
    price: "277.00",
    id: "31",
  },
  {
    createdAt: "2023-04-18T12:38:27.100Z",
    name: "Bethany Kreiger",
    img: "https://loremflickr.com/640/480/sports",
    description:
      "Quia tempora voluptatem nihil error molestiae distinctio iure rem autem. Labore delectus magnam magni similique. Aperiam molestias cupiditate dolorem sed. Cupiditate error dolore temporibus numquam sint distinctio a aperiam delectus. Quos placeat adipisci nemo vel. Quas cum aperiam voluptatem tempora.",
    stock: "3",
    price: "38.00",
    id: "32",
  },
  {
    createdAt: "2023-04-19T07:26:05.920Z",
    name: "Sabrina Kshlerin",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "Et nostrum nihil numquam et tenetur odit. Quam ullam maxime sequi et nihil natus ipsum et. Nostrum unde sunt necessitatibus ipsum animi quae. Repudiandae ipsa aspernatur ipsam voluptate. Numquam non ullam quasi modi dolores odio officia. Eos maiores magnam expedita earum ratione dolore eaque earum.",
    stock: "1",
    price: "44.00",
    id: "33",
  },
  {
    createdAt: "2023-04-18T15:32:31.365Z",
    name: "Daisy Borer",
    img: "https://loremflickr.com/640/480/sports",
    description:
      "Officia iusto molestiae. Nam quo deleniti neque inventore ipsa earum. Voluptatem ratione deserunt reiciendis aliquam iusto.",
    stock: "4",
    price: "398.00",
    id: "34",
  },
  {
    createdAt: "2023-04-18T10:23:29.765Z",
    name: "Kendra White V",
    img: "https://loremflickr.com/640/480/business",
    description:
      "Deleniti nobis inventore laudantium distinctio quam quo eius magni. Recusandae beatae ad quidem molestiae fugiat voluptatum. Beatae ratione quidem eaque laudantium unde tempora voluptas deserunt at. Perspiciatis aut saepe itaque harum nesciunt labore. Quo odit cum nulla facilis quaerat facilis ex id. Necessitatibus ratione excepturi eius provident quia.",
    stock: "8",
    price: "321.00",
    id: "35",
  },
  {
    createdAt: "2023-04-19T02:02:35.545Z",
    name: "Clinton Kunze",
    img: "https://loremflickr.com/640/480/fashion",
    description:
      "Hic dolorum qui assumenda soluta explicabo consequatur quae vero. Iure exercitationem pariatur. Sunt optio officia voluptatum. Officiis quas doloremque eligendi. Ratione pariatur veritatis ad aliquid dignissimos temporibus cum neque ipsum. Quo suscipit eaque veritatis cumque cumque quia dolore optio sequi.",
    stock: "9",
    price: "60.00",
    id: "36",
  },
  {
    createdAt: "2023-04-19T01:47:42.527Z",
    name: "Holly Miller",
    img: "https://loremflickr.com/640/480/fashion",
    description:
      "Cupiditate maiores est temporibus similique molestiae. Accusantium dolorem cum officiis autem occaecati unde debitis. Asperiores sequi dolorem nostrum sint ad earum quaerat aperiam. Asperiores quae quasi veritatis qui totam commodi recusandae veritatis adipisci. Soluta cupiditate molestias deserunt nostrum. Porro est reiciendis eaque fugit molestiae soluta asperiores.",
    stock: "8",
    price: "960.00",
    id: "37",
  },
  {
    createdAt: "2023-04-19T06:19:58.128Z",
    name: "Lance Mann",
    img: "https://loremflickr.com/640/480/fashion",
    description:
      "Saepe ducimus sint sapiente ipsa quisquam deserunt praesentium similique maiores. Autem itaque asperiores porro consequatur temporibus praesentium explicabo. Ipsa atque quaerat odit error soluta rem. Vero architecto doloremque. Quas et nemo repellendus doloribus. Officia hic quia nesciunt necessitatibus magni totam vel.",
    stock: "7",
    price: "416.00",
    id: "38",
  },
];

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

  return container;
};

const productsContainer = document.getElementById("products-container-section");

productsData.forEach((product) => {
  productsContainer.append(generateProductComponent(product));
});
