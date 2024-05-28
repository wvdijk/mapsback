// quick n dirty
let searchquery = document.querySelectorAll('textarea')[0].value;
let items = document.querySelectorAll('[role="list"]')[0];
let maps = document.createElement('div');
maps.setAttribute("role", "listitem");
let link = document.createElement('a');
link.href=`https://maps.google.nl/?q=${searchquery}`;
link.setAttribute("role", "link");
let titlediv = document.createElement('div');
let title = document.createTextNode('Maps');

// put it all together:
titlediv.appendChild(title);
link.appendChild(titlediv);
maps.appendChild(link);
items.appendChild(maps);
