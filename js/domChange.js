// loading spinner
const spinner = (id, isSpinner) => {
  const container = document.getElementById(id);
  if (isSpinner) {
    container.classList.remove("hidden");
  } else {
    container.classList.add("hidden");
  }
};


//(step: 3) dynamic post 
const AllDataAppend = (
  image,
  category,
  author,
  title,
  description,
  comment_count,
  view_count,
  posted_time,
  isActive
) => {
  title = title.replace(/'/g, "");
  let activeBudge = "";
  if (isActive) {
    activeBudge = `<p class='absolute w-[18.667px] h-[18.667px] bg-[#10B981] rounded-full -top-2 -right-2'></p>`;
  } else {
    activeBudge = `<p class='absolute w-[18.667px] h-[18.667px] bg-[#FF3434] rounded-full -top-2 -right-2'></p>`;
  }
  const allItems = document.getElementById("allItems");
  const div = document.createElement("div");
  div.classList = "bg-[#F3F3F5] p-8 rounded-3xl flex flex-col md:flex-row gap-6 all-item";
  div.innerHTML = `<div class='relative w-[72px] h-[72px] bg-white'>
    <img src='${image}' alt='' class='w-full'>
    ${activeBudge}
  </div>
  <div class='space-y-4 w-full'>
    <div class='flex gap-6 grayColor2 text-sm font-medium'>
      <p># ${category}</p>
      <p>Author : ${author}</p>
    </div>
    <h1 class='text-[#12132D] text-xl font-bold'>${title}</h1>
    <p class='grayColor2 text-base font-normal'>${description}</p>
    <hr class='border-b border-dotted border-4'>
    <div class='flex justify-between gap-5'>
      <div class='flex gap-5 items-center'>
        <div class='flex items-center gap-3'>
          <img src='./images/mgs.svg' alt=''>
          <p>${comment_count}</p>
        </div>
        <div class='flex items-center gap-3'>
          <img src='./images/views.svg' alt=''>
          <p>${view_count}</p>
        </div>
        <div class='flex items-center gap-3'>
          <img src='./images/time.svg' alt=''>
          <p>${posted_time} min</p>
        </div>
      </div>
      <div onclick='readMePost("${title}","${view_count}",this)' class='cursor-pointer'>
        <img class="w-[28px] h-[28px]" src='./images/readme1.png' alt=''>
      </div>
    </div>
  </div>`;
  allItems.appendChild(div);
};


//(step: 4) dynamic read Post
let readCounter = 1;
let validate = [];
const readMePost = (title, views, ele) => {
  const errorShowContainer = document.getElementById("alreadyReadBookError");
  if (validate.includes(parseInt(views))) {
    errorShowContainer.innerText = "Already Read This Post!";
    return;
  }
  validate.push(parseInt(views));
  const readCountContainer = document.getElementById("readCount");
  const readDisplayContainer = document.getElementById("readDisplayContainer");
  const div = document.createElement("div");
  div.classList = "flex flex-col lg:flex-row lg:justify-between gap-3 lg:items-center bg-[#FFF] p-6 rounded-3xl";
  div.innerHTML = `<p class="text-[#12132D] text-base font-semibold">${title}</p>
  <div class="flex items-center">
    <img src="./images/views.svg" alt="" class="w-[24px] h-[24px]"><span>${views}</span>
  </div>`;
  readDisplayContainer.appendChild(div);
  readCountContainer.innerText = readCounter;
  errorShowContainer.innerText = "";
  ele.children[0].src = `./images/readme2.png`;
  readCounter++;
};


//(step: 8) dynamic latest post
const latestDataAppend = (
  coverPic,
  profilePic,
  name,
  title,
  description,
  postDate,
  designation
) => {
  const latestItems = document.getElementById("latestItems");
  const div = document.createElement("div");
  div.classList = "card p-6 space-y-3";
  div.innerHTML = `<div class="h-[190px] card-img">
            <img src="${coverPic}" alt="" class="h-full w-full rounded-2xl">
          </div>
          <div class="flex items-center gap-1">
            <img src="./images/calander.svg" alt="">
            <p class="font-normal grayColor2">${postDate}</p>
          </div>
          <p class="text-[#12132D] text-lg font-extrabold">${title}</p>
          <p class="font-normal grayColor2">${description}</p>
          <div class="flex gap-3 items-center">
            <div class="w-11 h-11">
              <img src="${profilePic}" alt="" class="h-full w-full rounded-full">
            </div>
            <div>
              <h4 class="text-[#12132D] text-base font-extrabold">${name}</h4>
              <p class="font-normal grayColor2">${designation}</p>
            </div>
          </div>`;
  latestItems.appendChild(div);
};

//(step: 11) search Not Found error show
const searchNotFound = () => {
  const allItems = document.getElementById("allItems");
  allItems.innerHTML = `<div>
  <img class="rounded-2xl" src="./images/searchNotFound.gif" alt="" srcset="">
 </div>`;
}