const nav = document.createElement("nav");
nav.setAttribute('id', 'navbar');

const NavList = () => {
  const navList = document.createElement("ul");
  navList.classList.add("nav-section");
  return navList;
};

const NavListItem = () => {
  const navListItem = document.createElement("li");
  navListItem.classList.add("nav-item");
  return navListItem;
};

const NavLink = (href, text) => {
  const link = document.createElement("a");
  link.setAttribute(href, `#${href}`);
  link.innerText = text;
  return link;
};

const listItemLink = (href, text) => {
  let listItem = NavListItem();
  listItem.append(NavLink(href, text));
  return listItem;
};

const homeList = () => {
  let list = NavList();
  list.append(listItemLink("home", "Loving Pets"));
  return list;
};

const pageList = () => {
  let list = NavList();
  list.append(listItemLink("adoption-process", "Adoption Process"));
  list.append(listItemLink("about", "About us"));
  list.append(listItemLink("contact", "Contact"));
  return list;
};

const NavBar = () => {
  nav.append(homeList());
  nav.append(pageList());

  return nav;
};

export default NavBar;
