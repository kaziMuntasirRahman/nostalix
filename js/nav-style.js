const navLinkImages = ["images/icons/home.png", "images/icons/edit.png", "images/icons/add-person.png", "images/icons/flag.png"];

const navLinkContainer = document.getElementById('nav-link-container');

for (const i of navLinkImages) {
  navLinkContainer.innerHTML += `
  <div class="px-4 py-4 bg-slate-900 bg-opacity-5 rounded-full border border-gray-950 border-opacity-15 justify-start items-center gap-2 inline-flex">
  <img src=${i}>
</div>`
}

