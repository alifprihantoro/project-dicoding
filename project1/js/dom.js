export default (data, getId) => {
  data.forEach((e) => {
    const nav = document.createElement("li");
    nav.innerHTML = `<a href="${e.link}">${e.name}</a>`;
    getId.appendChild(nav);
  });
};
