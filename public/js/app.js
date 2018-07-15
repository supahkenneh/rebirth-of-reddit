console.log('test •');

const wtfButton = document.getElementById('subreddit-one');
wtfButton.addEventListener('click', showWTF);

function showWTF() {

  const getWTF = new XMLHttpRequest();
  getWTF.addEventListener('load', outside);
  getWTF.open('GET', 'https://www.reddit.com/r/WTF/.json');
  getWTF.send();

  let getContentDiv = document.getElementById('body-div');


  function outside() {
    const parsedWTF = JSON.parse(this.responseText);
    console.log(parsedWTF);

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
      redditor.innerHTML = 'by ' + wtfPosts[i].data.author + ' • ' + 'Score ' + wtfPosts[i].data.score + ' • ' + wtfPosts[i].data.num_comments + ' comments';
      postDiv.appendChild(redditor);


      //get post text
      let textBody = document.createElement('div');
      textBody.className = 'text-body';
      textBody.innerHTML = wtfPosts[i].data.selftext;
      postDiv.appendChild(textBody);

    }
  }

}