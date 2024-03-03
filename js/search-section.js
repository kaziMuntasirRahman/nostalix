function searchingFunctionality(){
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  const searchUrl = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`;
  deployFetchData(searchUrl);
  document.getElementById('loadingSpinner').classList.add('hidden');
}


function searching(){
  document.getElementById('loadingSpinner').classList.add('fixed');
  document.getElementById('loadingSpinner').classList.remove('hidden');
  setTimeout(searchingFunctionality, 2000);
}