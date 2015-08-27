//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//Add an image to overlay
$overlay.append($image);

//a caption to overlay
$overlay.append($caption);
//Add an overlay
$('body').append($overlay);
  //An image
  //A caption

//1. Capture the click event on a link to an image
$('#list2 a').click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr('href');
  //Update overlay with the image linked in the link.
  $image.attr('src', imageLocation);
  console.log(imageLocation);
  
  //Show the overlay.
  
  //Get child's alt attribute and set caption
  var captionText = $(this).children('img').attr('alt');
  $caption.text(captionText);
  $overlay.show();
});
  
//When an overlay is clicked
  $overlay.click(function(){
    //Hide the overlay
    $overlay.hide();
  });

//Code Streamline existing code

$('h4').click(function() {
  
  $(this).parent().find('p').toggle('slow', function(){                
     });
});