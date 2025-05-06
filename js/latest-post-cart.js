const latestPostCartContainer = document.getElementById('latest-post-cart-container');
const latestPostUrl = `https://openapi.programming-hero.com/api/retro-forum/latest-posts`;


fetch(latestPostUrl)
  .then(response => response.json())
  .then(json => displayLatestPost(json))



function displayLatestPost(array) {
  for (const obj of array) {
    latestPostCartContainer.innerHTML += `<div
  class="bg-white rounded-3xl border border-slate-900 border-opacity-20 p-6 mt-6  flex flex-col gap-3">
  <img src="${obj.cover_image}" class="w-full h-[200px] bg-slate-900 bg-opacity-5 rounded-[20px] object-cover">
  <!-- date section -->
  <div class="flex gap-2 mb-1 mt-3">
    <img src="images/icons/calendar.png" alt="">
    <div class="text-slate-900 text-opacity-60 font-['Mulish']">${(obj.author.posted_date)?obj.author.posted_date:'No publish date'}</div>
  </div>
  <!-- title section -->
  <h3 class="text-slate-900 text-lg font-extrabold font-['Mulish'] leading-[30px]">${obj.title}</h3>
  <!-- semi title section -->
  <p class="text-slate-900 text-opacity-60 font-['Mulish'] leading-relaxed">${obj.description}</p>
  <!-- author section -->
  <div class="flex items-center gap-4 mt-1">
    <!-- author image -->
    <img src="${obj.profile_image}" class="size-11 rounded-full">
    <!-- author details -->
    <div class="flex flex-col gap-[5px]">
      <h4 class="text-slate-900  font-bold font-['Mulish']">${obj.author.name}</h4>
      <p class="text-slate-900 text-opacity-60 text-sm font-['Mulish']">${(obj.author.designation)?obj.author.designation:'Unknown'}</p>
    </div>
  </div>
  </div>`
  }
}


