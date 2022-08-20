const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//1//
// const galleryListRef = document.querySelector('.gallery');

// let itemList = images.map(({ url, alt }) =>
//   `<li><a href=""><img src="${url}" alt="${alt}"> </a></li>`
// ).join('');

// galleryListRef.innerHTML = itemList;

// galleryListRef.style.display = 'flex';
// galleryListRef.style.flexWrap = 'wrap';
// galleryListRef.style.gap = '15px';

//2//
const galleryListRef = document.querySelector(".gallery");
console.log(galleryListRef);
const elements = images
  .map(({ url, alt }) => {
    return `<img alt='${alt}', src = '${url} '></img >`;
  })
  .join("");

console.log(elements);
galleryListRef.insertAdjacentHTML("afterbegin", elements);

galleryListRef.style.display = "flex";
galleryListRef.style.flexWrap = "wrap";
galleryListRef.style.gap = "15px";
