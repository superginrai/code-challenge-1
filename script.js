let clickCount = 0;

$(document).ready(onReady);

console.log('JAVA JIVE');

function onReady() { 
    console.log('jQuery is go for launch');
    $('#genButton').on('click', clickHandler);
    $('#gen13').on('click', '.deleteButton', deleteHandler);
    $('#gen13').on('click', '.swapButton', swapForce);
}

function clickHandler(){
    console.log('generate button was clicked!!');
    clickCount++
    $('#gen13').append(
        '<div class="red">' +
        '<p>' + clickCount + '</p>' +
        '<button class="swapButton">SWAP</button>' +
        '<button class="deleteButton">DELETE</button>' + '</div>')
   // $(this).closest('div').addClass('red');
   // $('.deleteButton').on('click', deleteHandler);
}

function deleteHandler(){
    $(this).closest('div').remove();
    console.log('delete button was clicked');
}

function swapForce(){
  //$(this).closest('div').classList.toggle('red');//trying to toggle class off (and then have default div be yellow) so it becomes yellow... tried many other things like if/else, but kept getting hung up
  $(this).closest('div').addClass('yellow');  
  console.log('swap button was clicked');
}
