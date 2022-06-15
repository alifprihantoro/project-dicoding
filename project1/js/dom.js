export default (data, getMyId) => {
const getId = document.getElementById(getMyId);
  data.forEach((e) => {
    const nav = document.createElement("li");
    nav.innerHTML = `<a href="${e.link}">${e.name}</a>`;
    getId.appendChild(nav);
  });
};
