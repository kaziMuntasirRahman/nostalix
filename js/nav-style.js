const navLinkImages = ['home', 'edit', 'add-person', 'flag'];

const navLinkContainer = document.getElementById('nav-link-container');
navLinkContainer.classList = 'flex gap-2 lg:gap-3';

for (const i of navLinkImages) {
  navLinkContainer.innerHTML += `
  <div class="p-2 lg:p-4 bg-slate-900 bg-opacity-5 rounded-full border border-gray-950 border-opacity-15 justify-start items-center inline-flex cursor-pointer" title="${i}">
  <img src="images/icons/${i}.png">
</div>`
}

