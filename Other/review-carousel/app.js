// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// finding elements
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.getElementById("person-img");

const nextbtn = document.querySelector(".next-btn");
const prevbtn = document.querySelector(".prev-btn");
const surpriseMe = document.querySelector(".random-btn");

// i will use it for reviews array
let currentReview = 0;

// domcontentLoaded is for initial start of the page
window.addEventListener("DOMContentLoaded", () => {
  img.src = reviews[currentReview].img;
  author.textContent = reviews[currentReview].name;
  job.textContent = reviews[currentReview].job;
  info.textContent = reviews[currentReview].text;
});

// click events selfexplainatory
nextbtn.addEventListener("click", () => {
  currentReview++;
  // fixed the hardcode now the code is more flexable when took thousand of elements
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  img.src = reviews[currentReview].img;
  author.textContent = reviews[currentReview].name;
  job.textContent = reviews[currentReview].job;
  info.textContent = reviews[currentReview].text;
  console.log(currentReview);
});

prevbtn.addEventListener("click", () => {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  img.src = reviews[currentReview].img;
  author.textContent = reviews[currentReview].name;
  job.textContent = reviews[currentReview].job;
  info.textContent = reviews[currentReview].text;
  console.log(currentReview);
});

surpriseMe.addEventListener("click", () => {
  // i want absolute random no repeating same random
  let randomNew = Math.floor(Math.random() * reviews.length);
  while (randomNew === currentReview) {
    randomNew = Math.floor(Math.random() * reviews.length);
    console.log(`Random number was the same as before now it's ${randomNew}`);
  }
  currentReview = randomNew;
  img.src = reviews[currentReview].img;
  author.textContent = reviews[currentReview].name;
  job.textContent = reviews[currentReview].job;
  info.textContent = reviews[currentReview].text;
  console.log(currentReview);
});
