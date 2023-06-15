let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "Six months after being handed the mantle of Captain America at the end of Avengers: Endgame, Sam Wilson teams up with Bucky Barnes on a global mission to stop an anti-patriotism group, the Flag Smashers, who are enhanced with a recreation of the Super Soldier Serum and believe the world was better during the Blip.",
    image: "images/slider 2.png"
  },
  {
    name: "loki",
    des:
      "After stealing the Tesseract during the events of Avengers: Endgame, an alternate version of Loki is brought to the mysterious Time Variance Authority (TVA), a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a time variant, or help fix the timeline and stop a greater threat. Loki ends up trapped in his own crime thriller, traveling through time.",
    image: "images/slider 1.png"
  },
  {
    name: "wanda vision",
    des:
      "Three weeks after the events of Avengers: Endgame, Wanda Maximoff and Vision are living an idyllic suburban life in the town of Westview, New Jersey, trying to conceal their true natures. As their surroundings begin to move through different decades and they encounter various television tropes, the couple suspects that things are not as they seem.",
    image: "images/slider 3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      "Raya and Sisu, the last dragon of Kumandra, and their quest of finding all the pieces of a magical gem to restore the land to its previous, peaceful form.",
    image: "images/slider 4.png"
  },
  {
    name: "Dr. Strange in the Multiverse of Madness",
    des:
      "When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.",
    image: "images/Dr. Strange.png"
  },
  {
    name: "luca",
    des:
      "A young boy experiences an unforgettable seaside summer on the Italian Riviera filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the ocean's surface.",
    image: "images/slider 5.png"
  },
  {
    name: "Cars",
    des:
      "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.",
    image: "images/cars.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
