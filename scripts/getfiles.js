const directory = './src/assets/posts/';
const fs = require('fs');
const postsArray = [];
let processed = 0;
const routes = ['start', 'impressum', 'blog'];

const posts = fs.readdirSync(directory);
let popstCount = posts.filter(name => name.indexOf('.md') !== -1).length;
posts.sort((a, b) => {
  return (
    fs.statSync(directory + a).mtime.getTime() -
    fs.statSync(directory + b).mtime.getTime()
  );
});

posts
  .filter(name => name.indexOf('.md') !== -1)
  .forEach(post => {
    let postObj = {
      url: '',
      name: '',
      title: '',
      preview: '',
      timestamp: ''
    };
    postObj.url = `assets/posts/${post}`;
    postObj.name = post.replace('.md', '');
    routes.push('blog/' + postObj.name);
    postObj.timestamp = fs.statSync(directory + post).mtime.getTime();
    fs.readFile(`${directory}${post}`, 'utf8', function(err, postcontent) {
      processed++;
      if (err) {
        return console.log(err);
      }

      posts[popstCount - 1];

      postObj.preview = postcontent.substr(0, 200);
      let title = postcontent
        .substr(0, postcontent.indexOf('</strong>'))
        .replace('<strong>', '');
      postObj.title = title;
      postsArray.push(postObj);
      if (popstCount === processed) {
        writeJson(postsArray);
      }
    });
  });

writeJson = postsarr => {
  const arr = JSON.stringify(postsarr);
  const jsonContent = `export const postsArray =  ${arr}`;

  fs.writeFile(`./src/app/blog/dashboard/posts.ts`, jsonContent, function(err) {
    if (err) {
      return console.log(err);
    }
  });
  fs.writeFile(
    `./routes.json`,
    `{ "routes": ${JSON.stringify(routes)}}`,
    function(err) {
      if (err) {
        return console.log(err);
      }
    }
  );
};
