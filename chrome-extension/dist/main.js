'use strict';

(() => {

let id = document.querySelector('meta[name=octolytics-dimension-gist_name]').content;

// pagehead action
let li = document.createElement('li');
let a = document.createElement('a');
li.appendChild(a);
a.href=`https://gist.run?id=${id}`;
a.target = '_blank';
a.setAttribute('class', 'btn btn-sm tooltipped-n');
a.title = 'Run this Gist';
a.textContent = 'Run';

let actions = document.querySelector('ul.pagehead-actions');
actions.insertBefore(li, actions.firstChild);

// revisions
Array.prototype.slice.call(document.querySelectorAll('a[aria-label^="View the whole gist at version"]'))
  .forEach(viewAnchor => {
    let sha = /\/([\da-f]+)$/.exec(viewAnchor.href)[1];
    let a = document.createElement('a');
    a.href = `https://gist.run?id=${id}&sha=${sha}`;
    a.target = '_blank';
    a.setAttribute('class', 'btn btn-sm tooltipped-n');
    a.title = 'Run this revision';
    a.textContent = 'Run';
    a.style.marginRight = '5px';
    viewAnchor.parentElement.insertBefore(a, viewAnchor);
  });

})();
