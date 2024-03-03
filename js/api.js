// get all data
const fetchAllData = async () => {
  const url = "https://openapi.programming-hero.com/api/retro-forum/posts";
  const res = await fetch(url);
  const data = await res.json();
  displayAllData(data.posts);
};

// latest post
const fetchLatestData = async () => {
  const url = "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
  const res = await fetch(url);
  const data = await res.json();
  displayLatestData(data);
};

// search post
const fetchSearchData = async (search) => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${search}`;
  const res = await fetch(url);
  const data = await res.json();
  spinner("spinner", true);
  setTimeout(() => {
    displayAllData(data.posts);
  }, 2000);
};

spinner("spinner", true);
spinner("spinner2", true);
fetchAllData();
fetchLatestData();
