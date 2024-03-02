const navLinkImages = ['home', 'edit', 'add-person', 'flag'];

const navLinkContainer = document.getElementById('nav-link-container');

for (const i of navLinkImages) {
  navLinkContainer.innerHTML += `
  <div class="px-4 py-4 bg-slate-900 bg-opacity-5 rounded-full border border-gray-950 border-opacity-15 justify-start items-center gap-2 inline-flex cursor-pointer" title="${i}">
  <img src="images/icons/${i}.png">
</div>`
}

