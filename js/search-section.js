function searching(){
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  const searchUrl = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`;
  deployFetchData(searchUrl);
}