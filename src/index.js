import NavBar from "./js/navbar";
import Banner from "./js/banner";


const content = document.getElementById("content");

const updateContent = () => {
  content.innerHTML = ''
  content.append(NavBar());
  content.append(Banner());
};

updateContent();
