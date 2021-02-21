

/* Looping through all applicable columns and use the modulus operator to determine where to split out into new rows. */

var table = document.getElementsByTagName('table')[0],
  columns = Array.prototype.slice.call(document.getElementsByTagName('td')),
  newTable = document.createElement('table'), html;

columns.forEach(function(next, idx) {
  if (idx % 2 === 0 || idx === 0) {
    html += '<tr>' + next.outerHTML;
    return;
  }
  html += next.outerHTML + '</tr>';
});

newTable.innerHTML = html;
table.replaceWith(newTable);
}


