//append content here
let getContentDiv = document.getElementById('body_div');

const randomSubreddits = ['AskReddit', 'Showerthoughts', 'shittyfoodporn', 'OldSchoolCool', 'greentext', 'dadjokes', 'nosleep', 'adviceanimals', 'birdswitharms'];


function showSubreddit(subreddit) {

  return function () {

    const request = new XMLHttpRequest();
    request.addEventListener('load', createPosts);
    request.open('GET', `https://www.reddit.com/r/${subreddit}/.json`);
    request.send();

  }
};

function createPosts() {
  const parsedData = JSON.parse(this.responseText);

  const subredditInfo = parsedData.data.children;
  console.log(subredditInfo);

  getContentDiv.innerHTML = '';

  for (let i = 0; i < subredditInfo.length; i++) {

    let postDiv = document.createElement('div');
    postDiv.className = 'posts';

    //get picture

    let pictureDiv = document.createElement('div');
    pictureDiv.className = 'picture';

    if (subredditInfo[i].data.url.charAt(subredditInfo[i].data.url.length - 1) === 'g') {
      pictureDiv.style.backgroundImage = 'url("' + subredditInfo[i].data.url + '")'
    } 
    else if (subredditInfo[i].data.url.charAt(subredditInfo[i].data.url.length - 1) !== 'g' && subredditInfo[i].data.thumbnail.charAt(subredditInfo[i].data.thumbnail.length - 1) === 'g') {
      pictureDiv.style.backgroundImage = 'url("' + subredditInfo[i].data.thumbnail + '")';
    } 
    else {
      pictureDiv.style.backgroundImage = 'url("https://b.thumbs.redditmedia.com/1A0mtan1uVG3Om-BfkpU_Fie3FuZ20ZmUawhNOo4x0c.jpg")'
    };

    postDiv.appendChild(pictureDiv);

    //get title
    let titleDiv = document.createElement('div'); titleDiv.className = 'title';
    titleDiv.innerHTML = subredditInfo[i].data.title;
    postDiv.appendChild(titleDiv);

    //get post stats
    let redditor = document.createElement('p');
    redditor.className = 'stats';
    redditor.innerHTML = 'by ' + subredditInfo[i].data.author + ' • ' + 'Score ' + subredditInfo[i].data.score + ' • ' +
      subredditInfo[i].data.num_comments + ' comments';
    postDiv.appendChild(redditor);


    //get post text
    let textBody = document.createElement('div');
    textBody.className = 'text_body';
    textBody.innerHTML = subredditInfo[i].data.selftext;
    postDiv.appendChild(textBody);

    getContentDiv.appendChild(postDiv);
  }
};


//cityporn subreddit
const cityButton = document.getElementById('subreddit-one');
cityButton.addEventListener('click', showSubreddit('cityporn'));

//skyporn subreddit
const skyButton = document.getElementById('subreddit-two');
skyButton.addEventListener('click', showSubreddit('skyporn'));;

//earthporn subreddit
const earthButton = document.getElementById('subreddit-three');
earthButton.addEventListener('click', showSubreddit('earthporn'));

//random subreddit
const randomButton = document.getElementById('subreddit-four');
randomButton.addEventListener('click', showRandomSubreddit);

function showRandomSubreddit() {

  let randomize = randomSubreddits[Math.floor(Math.random() * randomSubreddits.length)];

  getContentDiv.innerHTML = '';

  const getRandom = new XMLHttpRequest();
  getRandom.addEventListener('load', createPosts);
  getRandom.open('GET', `http://www.reddit.com/r/${randomize}/.json`);
  getRandom.send();
}

