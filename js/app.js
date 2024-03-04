//(step: 2) display all data
const displayAllData = (data) => {
  const allItems = document.getElementById("allItems");
  allItems.innerHTML = '';
  data.forEach((post) => {
    AllDataAppend(
      post.image,
      post.category,
      post.author.name,
      post.title,
      post.description,
      post.comment_count,
      post.view_count,
      post.posted_time,
      post.isActive
    );
  });
  spinner("spinner", false);
};

//(step: 7) display latest post
const displayLatestData = (data) => {
  data.forEach((post) => {
    latestDataAppend(
      post.cover_image,
      post.profile_image,
      post.author?.name || "Unknown",
      post.title,
      post.description,
      post.author?.posted_date || "No Publish Date",
      post.author?.designation || "Unknown",
    );
  });
  spinner("spinner2", false);
};

//(step: 9) search data 
const searchBtn = document.getElementById('searchBtn');
const searchErrorShow = document.getElementById('searchErrorShow');
searchBtn.addEventListener('click', () => {
  const searchField = document.getElementById('searchField');
  if (!searchField.value) {
    searchErrorShow.innerText = 'please not provide empty search!';
    return;
  }
  searchErrorShow.innerText = '';
  fetchSearchData(searchField.value);
});