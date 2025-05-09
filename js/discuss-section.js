const articleContainer = document.getElementById('article-container');
const articleUrl = `https://openapi.programming-hero.com/api/retro-forum/posts`;


function deployFetchData(url){
  fetch(url)
  .then(response => response.json())
  .then(json => displayArticle(json.posts))
}

let isRead = false;


function displayArticle(ara){
  articleContainer.innerHTML = '';
  for(const obj of ara){
    articleContainer.innerHTML += `
    <div id=${obj.id}
class="bg-zinc-100 rounded-3xl p-10 flex gap-6 items-start border-[1px] border-white hover:border-[1px] hover:border-violet-500 hover:bg-violet-100">
<!-- avatar -->
<div class="size-[72px]  relative">
  <img src="${obj.image}" class="rounded-2xl"/>
  <div class="size-5 ${(obj.isActive)?"bg-emerald-500":"bg-red-500"}  rounded-full border-2 border-white absolute -top-2 -right-2"></div>
</div>
<!-- text-section -->
<div class="w-full flex flex-col gap-3">
  <div class="flex gap-5">
    <p class="text-slate-900 text-opacity-80 text-sm font-medium font-['Inter']"># ${obj.category}</p>
    <p class="text-slate-900 text-opacity-80 text-sm font-medium font-['Inter']">Author : ${obj.author.name}</p>
  </div>
  <h2 class="titl text-slate-900 text-xl font-bold font-['Mulish']mb-1">${obj.title}</h2>
  <p
    class="text-slate-900 text-opacity-60 text-base font-normal font-['Inter'] leading-relaxed">${obj.description}</p>
  <div class="w-full h-[0px] border border-dashed border-slate-900 border-opacity-25 my-2"></div>
  <div class="flex items-center">
    <div class="flex gap-6 items-center mr-auto">
      <div class="msg flex items-center gap-3">
        <img src="images/icons/message.png" alt="">
        <div class="cmt text-slate-900 text-opacity-60 text-base font-normal font-['Inter']">${obj.comment_count}</div>
      </div>
      <div class="flex items-center gap-3">
        <img src="images/icons/view.png" alt="">
        <div class="viw text-slate-900 text-opacity-60 text-base font-normal font-['Inter']">${obj.view_count}</div>
      </div>
      <div class="clock flex items-center gap-3">
        <img src="images/icons/clock.png" alt="">
        <div class="text-slate-900 text-opacity-60 text-base font-normal font-['Inter']">${obj.posted_time} min</div>
      </div>
    </div>
    <img
    src="images/icons/inbox-close.png"
    onclick="addComment(this)" class="cursor-pointer size-7 object-cover">
  </div>
</div>
</div>
    `
  }
}


deployFetchData(articleUrl);


