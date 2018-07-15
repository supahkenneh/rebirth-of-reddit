console.log('test •');

const getOutside = new XMLHttpRequest();
getOutside.addEventListener('load', outside);
getOutside.open('GET', 'https://www.reddit.com/r/WTF/.json');
getOutside.send();

let getContentDiv = document.getElementById('body-div');


function outside() {
  const parsedOutside = JSON.parse(this.responseText);
  console.log(parsedOutside);

  const outsidePosts = parsedOutside.data.children;

  for (let i = 0; i < outsidePosts.length; i++) {
    //get title
    let contentDiv = document.createElement('div');contentDiv.className = 'content';
    contentDiv.innerHTML = outsidePosts[i].data.title;
    getContentDiv.appendChild(contentDiv);

    //get post stats
    let redditor = document.createElement('p');
    redditor.className = 'stats';
    redditor.innerHTML = 'by ' + outsidePosts[i].data.author + ' • ' + 'Score ' + outsidePosts[i].data.score + ' • ' + outsidePosts[i].data.num_comments + ' comments';
    contentDiv.appendChild(redditor);

    //get 4 lines of post text
    let textBody = document.createElement('div');
    textBody.className = 'text-body';
    textBody.innerHTML = outsidePosts[i].data.selftext;
    console.log(outsidePosts[i].data.selftext);
    contentDiv.appendChild(textBody);
  }

}