const categories = [
  {
    id: 1,
    name: "أشجار",
    category: "trees",
    img: "./images/products/image-2.png",
  },
  {
    id: 2,
    name: "صبار",
    category: "cactus",
    img: "./images/products/image-2.png",
  },
  {
    id: 3,
    name: "زهور",
    category: "flowers",
    img: "./images/products/image-2.png",
  },
  {
    id: 4,
    name: "أشجار مثمرة",
    category: "fruitful-trees",
    img: "./images/products/image-2.png",
  },
  {
    id: 5,
    name: "نباتات",
    category: "plants",
    img: "./images/products/image-2.png",
  },
  {
    id: 6,
    name: "أشجار الفاكهة",
    category: "fruit-trees",
    img: "./images/products/image-2.png",
  },
  {
    id: 7,
    name: "أشجار الفاكهة",
    category: "fruit-trees",
    img: "./images/products/image-2.png",
  },
];

const products = [
  {
    id: 1,
    img: "./images/products/image-2.png",
    name: "اشجار التوت",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "trees",
  },
  {
    id: 2,
    img: "./images/products/image-2.png",
    name: "اشجار التفاح",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "fruitful-trees",
  },
  {
    id: 3,
    img: "./images/products/image-2.png",
    name: "اشجار الفاكهة",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "fruit-trees",
  },
  {
    id: 4,
    img: "./images/products/image-2.png",
    name: "نباتات زينة",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "plants",
  },
  {
    id: 5,
    img: "./images/products/image-2.png",
    name: "نباتات الصحراء",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "plants",
  },
  {
    id: 6,
    img: "./images/products/image-2.png",
    name: "صبار الصحراء",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "cactus",
  },
  {
    id: 7,
    img: "./images/products/image-2.png",
    name: "زهور الصحراء",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "flowers",
  },
  {
    id: 8,
    img: "./images/products/image-2.png",
    name: "الشجرة الخضراء",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "trees",
  },
];

// .................................
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

const menu = document.getElementById("menu");

const menuItems = document.querySelectorAll("#menu ul li a");

openMenu.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

closeMenu.addEventListener("click", (e) => {
  menu.classList.remove("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    menu.classList.remove("active");
  });
});

// ---------------------------

const categoryContainer = document.getElementById("swiper-wrapper");

categoryContainer.innerHTML = categories
  .map((category) => {
    return `
        <div data-category="${category.category}" class="swiper-slide swiper-card">
        <img src="${category.img}" alt="product" />
        <h3>${category.name}</h3>
        </div>
    `;
  })
  .join("");

// ---------------------------
const cards = document.querySelectorAll(".swiper-card");

const productsContainer = document.getElementById("filterd_products");

let filteredProducts = products;

productsContainer.innerHTML = filteredProducts
  .map((product) => {
    return `
      <div class="card">
        <img src="${product.img}" alt="product" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
    `;
  })
  .join("");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    card.classList.add("active");

    filteredProducts = products.filter(
      (product) => product.category === card.dataset.category
    );

    productsContainer.innerHTML = filteredProducts
      .map((product) => {
        return `
      <div class="card">
        <img src="${product.img}" alt="product" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
    `;
      })
      .join("");
  });
});
