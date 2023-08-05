import "./styles.scss";
require("file-loader?name=[name].[ext]!./index.html");
import mainImage from "./images/barbershop.png";
import barber1 from "./images/barber-1.png";
import barber2 from "./images/barber-2.png";
import map1 from "./images/map1.png";
import barbershopFront from "./images/barbershop-front.png";
import barbershopFront2 from "./images/barbershop-front2.png";
import mainLogo from "./images/main-logo.png";
import facebookIcon from "./images/facebookIcon.svg";
import instagramIcon from "./images/instagramIcon.svg";

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

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);

documentHeight();
