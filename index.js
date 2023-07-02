const navItems = document.querySelectorAll(".mob-list-item");
const toggleButton = document.querySelector(".nav-button");
const mobNav = document.querySelector(".mob-side-bar");
// for navbar to have active classes on link on click
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const activeItem = document.querySelector(".mob-list-item.active");
    if (activeItem) {
      activeItem.classList.remove("active");
    }
    item.classList.add("active");
  });
});

// to toggle between in hamburger animation and open and close nav
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  mobNav.classList.toggle("visible");
});

// navbar effect on scroll

const navbarOpacity = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  navbarOpacity.style.backgroundColor = "rgba(255, 255, 255, 0.7)";

});

// to set scroll for home top

const homeBtn = document.querySelector(".home");

homeBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// to dynamically add images and captions in html
const updateContainer = document.querySelector(".updates-container");

const caption1 = "Special offer 20% OFF for this 'Shubh Deepwali'.";
const caption2 =
  "Special orders are taken here for birthday parties and other celebrations.";

const imgData = [
  { url: "./src/img/diwaliSpec.jpg", caption: caption1 },
  { url: "./src/img/notice_birthday.jpg", caption: caption2 },
];

imgData.reverse().forEach((curEle) => {
  const figure = document.createElement("figure");
  figure.classList.add("img-container");
  const imageElement = document.createElement("img");
  imageElement.src = curEle.url;
  imageElement.loading = "lazy";

  const captionHolder = document.createElement("figcaption");
  captionHolder.innerText = curEle.caption;

  figure.appendChild(imageElement);
  figure.appendChild(captionHolder);

  updateContainer.appendChild(figure);
});

// dynamically add images for gallery

const galleryContainer = document.querySelector(".gallery-container");

const galleryImageArray = [
  "./src/img/namkeens.jpg",
  "./src/img/chocolateCake.jpg",
  "./src/img/dont_cakes.jpg",
  "./src/img/cupcakes.jpg",
  "./src/img/cookies.jpg",
  "./src/img/bread.jpg",
];

galleryImageArray.reverse().forEach((curEle) => {
  const galleryFig = document.createElement("figure");
  galleryFig.classList.add("gallery-image");

  const galleryImg = document.createElement("img");
  galleryImg.src = curEle;
  galleryImg.loading = "lazy";

  galleryContainer.appendChild(galleryFig);
  galleryFig.appendChild(galleryImg);
});

// To open modal

const reviewBtnToggle = document.querySelector(".review-writer");
const form = document.querySelector(".review-form");
const validate = document.querySelectorAll(".input-validate");

const modal = document.querySelector(".modal");
let isModalOpen = false;

reviewBtnToggle.addEventListener("click", (e) => {
  e.preventDefault();
  modal.showModal();
});

// to close modal
const closeModal = document.querySelector(".review-close");
closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
  modal.close();
});

// review form submisssion and innerText

const testimonialContainer = document.querySelector(".testimonial-container");
const nameInput = document.querySelector(".name");
const reviewInput = document.querySelector("textarea.review");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const card = document.createElement("div");
  card.className = "card";

  const logo = `
    <figure class="card-logo">
      <img src="./src/img/images.jpg" alt="logo">
    </figure>
  `;

  const cardName = `
    <div class="card-name">
      <h4>${nameInput.value}</h4>
    </div>
  `;

  const cardReview = `
    <div class="card-review">
      <p>${reviewInput.value}</p>
    </div>
  `;

  card.innerHTML = logo + cardName + cardReview;
  if (nameInput.value && reviewInput.value) {
    testimonialContainer.appendChild(card);
  } else return;
});

// Validation for contact form

const contactDialog = document.querySelectorAll(".redirect-btn");
const contactModal = document.querySelector(".contact-modal");

contactDialog.forEach((curEle) => {
  curEle.addEventListener("click", (e) => {
    contactModal.showModal();
  });
});

// validation for review form

const inputs = document.querySelectorAll(".input");
let isError = false;

const errorMsg = document.createElement("span");
errorMsg.className = "error";

function validateInputs() {
  const newErr = document.createElement("span");
  newErr.className = "error";

  const revErr = document.createElement("span");
  revErr.className = "error";

  inputs.forEach((input) => {
    switch (true) {
      case !input.checkValidity():
        isError = true;
        errorMsg.textContent = "Fill all the fields";
        form.appendChild(errorMsg);
        break;
      case !nameInput.value:
        isError = true;
        newErr.textContent = "Enter your Name";
        form.insertBefore(newErr, errorMsg.nextSibling);
        errorMsg.remove();
        break;
      case !reviewInput.value:
        isError = true;
        revErr.textContent = "Enter your Review";
        form.insertBefore(revErr, errorMsg.nextSibling);
        newErr.remove();
        errorMsg.previousSibling.remove();
        break;
      default:
        isError = true;
        document.querySelectorAll(".error").forEach((err) => {
          err.remove();
        });
        form.reset();
        modal.close();
        break;
    }
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

// dynamic date update for rights reserved in footer

const datePara = document.querySelector(".right-reserved");
const date = new Date();
const curYear = date.getFullYear();

datePara.innerText = `All rights reserved @ ${curYear}`;

// reset the contact form

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  contactForm.reset();
});

// user geolocation for current location for the google maps
const directionBtn = document.querySelectorAll(".direction-button");

directionBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(showPosition));
    }
  });
})


function showPosition(position) {
  const { lat, long } = position.coords;
  const url = `https://www.google.com/maps/dir/${lat},${long}/Laxmi+Nagar,+New+Delhi,+Delhi/@28.6029214,77.0711219,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x390d05478638149f:0x3478a5062c930123!2m2!1d77.0333266!2d28.6192938!1m5!1m1!1s0x390cfcac7381f671:0x531f06064145554a!2m2!1d77.2756181!2d28.6371746!3e0`;
  window.open(url, '_blank');
}
