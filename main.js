import data from "./data.js";

console.log(data);

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
  {
    id: 9,
    img: "./images/products/image-2.png",
    name: "الشجرة الخضراء",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "trees",
  },
  {
    id: 10,
    img: "./images/products/image-2.png",
    name: "الشجرة الخضراء",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "trees",
  },
  {
    id: 11,
    img: "./images/products/image-2.png",
    name: "الشجرة الخضراء",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "trees",
  },
  {
    id: 12,
    img: "./images/products/image-2.png",
    name: "الشجرة الخضراء",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "trees",
  },
  {
    id: 13,
    img: "./images/products/image-2.png",
    name: "الشجرة الخضراء",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "trees",
  },
  {
    id: 14,
    img: "./images/products/image-2.png",
    name: "الشجرة الخضراء",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "trees",
  },
  {
    id: 15,
    img: "./images/products/image-2.png",
    name: "الشجرة الخضراء",
    description: "شجرة تعيش في التربه الرملية وتحتاج الي اشمس بشكل دائم",
    category: "trees",
  },
  {
    id: 16,
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

// categoryContainer.innerHTML = data
//   .map((product, i) => {
//     return `
//         <div class="swiper-slide swiper-card">
//         <img src="${product.img[i]}" alt="product" loading="lazy" />
//         <h3>${product.name}</h3>
//         </div>
//     `;

//     /**
//          return `
//         <div class="swiper-slide swiper-card">
//          <div class="product-images">
//             <div class="swiper-wrapper" id="swiper-wrapper" >
//               ${product.images.map(
//                 (img) => `<img src="${img}" alt="product" loading="lazy" />`
//               )}
//             </div>
//          </div>
//          <h3>${product.name}</h3>
//         </div>
//     `;

//      */
//   })
//   .join("");

// .................................

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".swiper-card");
  const productsContainer = document.getElementById("products_sec");
  const loadMoreButton = document.getElementById("load-more");

  let filteredProducts = data;
  let productsToShow = 9;
  const productsIncrement = 6;

  // Function to render products
  // function renderProducts() {
  //   let productsHTML = data
  //     .slice(0, productsToShow)
  //     .map((product) => {
  //       return `
  //       <div class="card">
  //         <div class="swiper-product">
  //           <div class="swiper-wrapper">
  //             <img
  //               src="./images/products/product01.jpg"
  //               alt=""
  //               loading="lazy"
  //               class="product_image swiper-slide"
  //             />

  //             <img
  //               src="./images/products/product02.jpg"
  //               alt=""
  //               loading="lazy"
  //               class="product_image swiper-slide"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       `;
  //     })
  //     .join("");
  //   productsContainer.innerHTML = productsHTML;
  // }

  // // Initial render
  // renderProducts();

  // "Load More" button click event
  loadMoreButton.addEventListener("click", () => {
    productsToShow += productsIncrement;
    renderProducts();
  });

  // Category filter click event
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      cards.forEach((card) => {
        card.classList.remove("active");
      });
      card.classList.add("active");

      filteredProducts = products.filter(
        (product) => product.category === card.dataset.category
      );

      productsToShow = 9;
      renderProducts();

      // Stop the Swiper autoplay when a card is clicked
      if (window.mySwiper && window.mySwiper.autoplay) {
        window.mySwiper.autoplay.stop();
      }
    });
  });
});

// counter ---------------------------
document.addEventListener("DOMContentLoaded", function () {
  let count = document.querySelectorAll(".count");
  let arr = Array.from(count);

  function createCounter(item) {
    let startnumber = 0;

    function counterup() {
      startnumber++;
      item.innerHTML = startnumber;

      if (startnumber == item.dataset.number) {
        clearInterval(stop);
      }
    }

    let stop = setInterval(function () {
      counterup();
    }, 50);
  }

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        createCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  arr.forEach(function (item) {
    observer.observe(item);
  });
});
