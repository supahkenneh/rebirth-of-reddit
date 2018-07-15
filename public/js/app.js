console.log('test •');

//append content here
let getContentDiv = document.getElementById('body-div');


//wtf subreddit
const wtfButton = document.getElementById('subreddit-one');
wtfButton.addEventListener('click', showWTF);

function showWTF() {

  getContentDiv.innerHTML = '';

  const getWTF = new XMLHttpRequest();
  getWTF.addEventListener('load', wtfSubreddit);
  getWTF.open('GET', 'https://www.reddit.com/r/WTF/.json');
  getWTF.send();

  function wtfSubreddit() {
    const parsedWTF = JSON.parse(this.responseText);

    const wtfPosts = parsedWTF.data.children;

    for (let i = 0; i < wtfPosts.length; i++) {

      let postDiv = document.createElement('div');
      postDiv.className = 'posts';
      getContentDiv.appendChild(postDiv);

      //get picture

      let pictureDiv = document.createElement('div');
      pictureDiv.className = 'picture';
      if (wtfPosts[i].data.thumbnail === 'nsfw') {
        pictureDiv.innerHTML = 'NSFW';
      }
      pictureDiv.style.backgroundImage = 'url("' + wtfPosts[i].data.thumbnail + '")'
      postDiv.appendChild(pictureDiv);

      //get title
      let titleDiv = document.createElement('div'); titleDiv.className = 'title';
      titleDiv.innerHTML = wtfPosts[i].data.title;
      postDiv.appendChild(titleDiv);

      //get post stats
      let redditor = document.createElement('p');
      redditor.className = 'stats';
      redditor.innerHTML = 'by ' + wtfPosts[i].data.author + ' • ' + 'Upvotes ' + wtfPosts[i].data.score + ' • ' + wtfPosts[i].data.num_comments + ' comments';
      postDiv.appendChild(redditor);


      //get post text
      let textBody = document.createElement('div');
      textBody.className = 'text-body';
      textBody.innerHTML = wtfPosts[i].data.selftext;
      postDiv.appendChild(textBody);

    }
  }

}

const dadButton = document.getElementById('subreddit-two');
dadButton.addEventListener('click', showDadJokes);

function showDadJokes(){

  getContentDiv.innerHTML = '';
  
  const getDadJokes = new XMLHttpRequest();
  getDadJokes.addEventListener('load', dadJokesSubreddit);
  getDadJokes.open('GET', 'https://www.reddit.com/r/dadjokes/.json');
  getDadJokes.send();

  function dadJokesSubreddit(){
    const parsedDads = JSON.parse(this.responseText);

    const dadPosts = parsedDads.data.children;

    for (let i = 0 ; i < dadPosts.length; i++){

      let postDiv = document.createElement('div');
      postDiv.className = 'posts';
      getContentDiv.appendChild(postDiv);

       //get picture

      //  let pictureDiv = document.createElement('div');
      //  pictureDiv.className = 'picture';
      //  if (dadPosts[i].data.thumbnail === 'nsfw') {
      //    pictureDiv.innerHTML = 'NSFW';
      //  }
      //  pictureDiv.style.backgroundImage = 'url("' + dadPosts[i].data.thumbnail + '")'
      //  postDiv.appendChild(pictureDiv);
 
       //get title
       let titleDiv = document.createElement('div'); titleDiv.className = 'title';
       titleDiv.innerHTML = dadPosts[i].data.title;
       postDiv.appendChild(titleDiv);
 
       //get post stats
       let redditor = document.createElement('p');
       redditor.className = 'stats';
       redditor.innerHTML = 'by ' + dadPosts[i].data.author + ' • ' + 'Upvotes ' + dadPosts[i].data.score + ' • ' + dadPosts[i].data.num_comments + ' comments';
       postDiv.appendChild(redditor);
 
 
       //get post text
       let textBody = document.createElement('div');
       textBody.className = 'text-body';
       textBody.innerHTML = dadPosts[i].data.selftext;
       postDiv.appendChild(textBody);

    }
  }
}

const showerButton = document.getElementById('subreddit-three');
showerButton.addEventListener('click', showThoughts);

function showThoughts () {
    
  getContentDiv.innerHTML = '';
  
  const getThoughts = new XMLHttpRequest();
  getThoughts.addEventListener('load', showerThoughtsSubreddit);
  getThoughts.open('GET', 'https://www.reddit.com/r/Showerthoughts/.json');
  getThoughts.send();

  function showerThoughtsSubreddit(){
    const parsedThoughts = JSON.parse(this.responseText);

    const thoughtPosts = parsedThoughts.data.children;

    for (let i = 0; i < thoughtPosts.length; i++){

      let postDiv = document.createElement('div');
      postDiv.className = 'posts';
      getContentDiv.appendChild(postDiv);

      //get picture

      // let pictureDiv = document.createElement('div');
      // pictureDiv.className = 'picture';
      // if (thoughtPosts[i].data.thumbnail === 'nsfw') {
      //   pictureDiv.innerHTML = 'NSFW';
      // }
      // pictureDiv.style.backgroundImage = 'url("' + thoughtPosts[i].data.thumbnail + '")'
      // postDiv.appendChild(pictureDiv);

      //get title
      let titleDiv = document.createElement('div'); titleDiv.className = 'title';
      titleDiv.innerHTML = thoughtPosts[i].data.title;
      postDiv.appendChild(titleDiv);

      //get post stats
      let redditor = document.createElement('p');
      redditor.className = 'stats';
      redditor.innerHTML = 'by ' + thoughtPosts[i].data.author + ' • ' + 'Upvotes ' + thoughtPosts[i].data.score + ' • ' + thoughtPosts[i].data.num_comments + ' comments';
      postDiv.appendChild(redditor);


      //get post text
      let textBody = document.createElement('div');
      textBody.className = 'text-body';
      textBody.innerHTML = thoughtPosts[i].data.selftext;
      postDiv.appendChild(textBody);

    }
  }
}



//CUT OFF TEXT FOR SHOWERTHOUGHTS
//GET RANDOM SUBREDDITS
//ADD BUTTON ON TOP RIGHT
//MAKE FOOTER
//DESKTOP VERSION