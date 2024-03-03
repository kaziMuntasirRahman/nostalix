const commentContainer = document.getElementById('comment-container');
let msgReadCounter = 0;


function addComment(img){
  const authorTitle = img.parentElement.parentElement.querySelector('.titl').innerHTML;
  const authorView = img.parentElement.parentElement.querySelector('.viw').innerHTML;
  msgReadCounter++;
  document.getElementById('msg-read-counter').innerHTML = msgReadCounter;
  commentContainer.innerHTML += `
  <div class="bg-white rounded-2xl flex items-center gap-2 px-4 py-[15px]">
  <div class="text-slate-900 text-base font-semibold font-['Mulish'] leading-relaxed mr-auto">${authorTitle}</div>
  <img src="images/icons/view.png" class=""></img>
  <div class="text-slate-900 text-opacity-60 font-['Inter']">${authorView}</div>
</div>`
img.classList.add('pointer-events-none', 'opacity-20');
}