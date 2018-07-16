console.log('test •');

//append content here
let getContentDiv = document.getElementById('body-div');


//wtf subreddit
const cityButton = document.getElementById('subreddit-one');
cityButton.addEventListener('click', showCity);

function showCity() {

  getContentDiv.innerHTML = '';

  const getCity = new XMLHttpRequest();
  getCity.addEventListener('load', wtfSubreddit);
  getCity.open('GET', 'https://www.reddit.com/r/CityPorn/.json');
  getCity.send();

  function wtfSubreddit() {
    const parsedCity = JSON.parse(this.responseText);

    const cityPosts = parsedCity.data.children;
    console.log(cityPosts);

    for (let i = 0; i < cityPosts.length; i++) {

      let postDiv = document.createElement('div');
      postDiv.className = 'posts';
      getContentDiv.appendChild(postDiv);

      //get picture

      let pictureDiv = document.createElement('div');
      pictureDiv.className = 'picture';
      if (cityPosts[i].data.url.split('').reverse().join('').charAt(0) !== 'g') {
        pictureDiv.style.backgroundImage = 'url("https://b.thumbs.redditmedia.com/1A0mtan1uVG3Om-BfkpU_Fie3FuZ20ZmUawhNOo4x0c.jpg")'
      } else {
        pictureDiv.style.backgroundImage = 'url("' + cityPosts[i].data.url + '")'
      }
      postDiv.appendChild(pictureDiv);

      //get title
      let titleDiv = document.createElement('div'); titleDiv.className = 'title';
      titleDiv.innerHTML = cityPosts[i].data.title;
      postDiv.appendChild(titleDiv);

      //get post stats
      let redditor = document.createElement('p');
      redditor.className = 'stats';
      redditor.innerHTML = 'by ' + cityPosts[i].data.author + ' • ' + 'Score ' + cityPosts[i].data.score + ' • ' + cityPosts[i].data.num_comments + ' comments';
      postDiv.appendChild(redditor);


      //get post text
      let textBody = document.createElement('div');
      textBody.className = 'text-body';
      textBody.innerHTML = cityPosts[i].data.selftext;
      postDiv.appendChild(textBody);
    }
  }
}

const skyButton = document.getElementById('subreddit-two');
skyButton.addEventListener('click', showSky);

function showSky() {

  getContentDiv.innerHTML = '';

  const getSky = new XMLHttpRequest();
  getSky.addEventListener('load', skyPornSubreddit);
  getSky.open('GET', 'https://www.reddit.com/r/SkyPorn/.json');
  getSky.send();

  function skyPornSubreddit() {
    const parsedSky = JSON.parse(this.responseText);

    const skyPosts = parsedSky.data.children;

    console.log(parsedSky);

    for (let i = 0; i < skyPosts.length; i++) {

      let postDiv = document.createElement('div');
      postDiv.className = 'posts';
      getContentDiv.appendChild(postDiv);

      //get picture
      let pictureDiv = document.createElement('div');
      pictureDiv.className = 'picture';
      if (skyPosts[i].data.url.split('').reverse().join('').charAt(0) !== 'g') {
        pictureDiv.style.backgroundImage = 'url("https://b.thumbs.redditmedia.com/1A0mtan1uVG3Om-BfkpU_Fie3FuZ20ZmUawhNOo4x0c.jpg")'
      } else {
        pictureDiv.style.backgroundImage = 'url("' + skyPosts[i].data.url + '")'
      }
      postDiv.appendChild(pictureDiv);

      //get title
      let titleDiv = document.createElement('div'); titleDiv.className = 'title';
      titleDiv.innerHTML = skyPosts[i].data.title;
      postDiv.appendChild(titleDiv);

      //get post stats
      let redditor = document.createElement('p');
      redditor.className = 'stats';
      redditor.innerHTML = 'by ' + skyPosts[i].data.author + ' • ' + 'Score ' + skyPosts[i].data.score + ' • ' + skyPosts[i].data.num_comments + ' comments';
      postDiv.appendChild(redditor);

      //get post text
      let textBody = document.createElement('div');
      textBody.className = 'text-body';
      textBody.innerHTML = skyPosts[i].data.selftext;
      postDiv.appendChild(textBody);
    }
  }
}

const meirlButton = document.getElementById('subreddit-three');
meirlButton.addEventListener('click', showMeirl);

function showMeirl() {

  getContentDiv.innerHTML = '';

  const getMeirl = new XMLHttpRequest();
  getMeirl.addEventListener('load', meirlSubreddit);
  getMeirl.open('GET', 'https://www.reddit.com/r/meirl/.json');
  getMeirl.send();

  function meirlSubreddit() {
    const parsedMeirl = JSON.parse(this.responseText);

    const meirlPosts = parsedMeirl.data.children;

    console.log(parsedMeirl);

    for (let i = 0; i < meirlPosts.length; i++) {

      let postDiv = document.createElement('div');
      postDiv.className = 'posts';
      getContentDiv.appendChild(postDiv);

      //get picture
      let pictureDiv = document.createElement('div');
      pictureDiv.className = 'picture';
      if (meirlPosts[i].data.url.split('').reverse().join('').charAt(0) !== 'g') {
        pictureDiv.style.backgroundImage = 'url("https://b.thumbs.redditmedia.com/1A0mtan1uVG3Om-BfkpU_Fie3FuZ20ZmUawhNOo4x0c.jpg")'
      } else {
        pictureDiv.style.backgroundImage = 'url("' + meirlPosts[i].data.url + '")'
      }
      postDiv.appendChild(pictureDiv);

      //get title
      let titleDiv = document.createElement('div'); titleDiv.className = 'title';
      titleDiv.innerHTML = meirlPosts[i].data.title;
      postDiv.appendChild(titleDiv);

      //get post stats
      let redditor = document.createElement('p');
      redditor.className = 'stats';
      redditor.innerHTML = 'by ' + meirlPosts[i].data.author + ' • ' + 'Score ' + meirlPosts[i].data.score + ' • ' + meirlPosts[i].data.num_comments + ' comments';
      postDiv.appendChild(redditor);


      //get post text
      let textBody = document.createElement('div');
      textBody.className = 'text-body';
      textBody.innerHTML = meirlPosts[i].data.selftext;
      postDiv.appendChild(textBody);
    }
  }
}



//GET RANDOM SUBREDDITS
//ADD BUTTON ON TOP RIGHT
//CREATE FUNCTIONS?
//DESKTOP VERSION
//MAKE FOOTER
