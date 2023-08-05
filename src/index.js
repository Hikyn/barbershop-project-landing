import "./styles.scss";
require("file-loader?name=[name].[ext]!./index.html");
// Eslint shows that they are not used, but they are required to build images
// eslint-disable-next-line no-unused-vars
import mainImage from "./images/barbershop.png";
// eslint-disable-next-line no-unused-vars
import barber1 from "./images/barber-1.png";
// eslint-disable-next-line no-unused-vars
import barber2 from "./images/barber-2.png";
// eslint-disable-next-line no-unused-vars
import map1 from "./images/map1.png";
// eslint-disable-next-line no-unused-vars
import barbershopFront from "./images/barbershop-front.png";
// eslint-disable-next-line no-unused-vars
import barbershopFront2 from "./images/barbershop-front2.png";
// eslint-disable-next-line no-unused-vars
import mainLogo from "./images/main-logo.png";
// eslint-disable-next-line no-unused-vars
import facebookIcon from "./images/facebookIcon.svg";
// eslint-disable-next-line no-unused-vars
import instagramIcon from "./images/instagramIcon.svg";
// eslint-disable-next-line no-unused-vars
import icon from "./images/favicon.ico";
// eslint-disable-next-line no-unused-vars
import scissors from "./images/barbershop-scissors.png";

const button = document.querySelector(".sidebar-button");
const sidebar = document.querySelector(".sidebar");

button.addEventListener("click", () => {
  sidebar.classList.toggle("view");
});

const btnClose = document.querySelector(".btn-close");
btnClose.addEventListener("click", () => {
  sidebar.classList.toggle("view");
});

const otherButtons = document.querySelectorAll(".other-btns button");
otherButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("view");
  });
});

// Create global height var in CSS to adjust window properly when user uses extension bars on browser 
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);

documentHeight();
