import NavBar from "./js/navbar";

const content = document.getElementById("content");

const updateContent = () => {
  content.innerHTML = '';
  content.append(NavBar());
};

updateContent();
