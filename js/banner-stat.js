const bannerStat = [{field:'Registered User', number:1},{field:'Forum', number:1},{field:'Topics', number:5},{field:'Replies', number:1}];

const bannerRight = document.getElementById('right');
bannerRight.classList += 'opacity-80 lg:opacity-100 w-full lg:max-w-min flex flex-col p-12 bg-white gap-6 rounded-3xl'

for(const i of bannerStat){
  bannerRight.innerHTML += `
  <div class='flex justify-between min-w-[275px]'>
  <p class="text-slate-900 text-opacity-80 text-2xl font-medium font-['Mulish']">${i.field}</p>
  <p class="text-slate-900 text-opacity-80 text-2xl font-medium font-['Mulish']">0${i.number}</p>
  </div>
  `
}