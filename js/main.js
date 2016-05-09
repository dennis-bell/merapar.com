var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

// open hidden layer
function mopen(id)
{
  // cancel close timer
  mcancelclosetime();

  // close old layer
  if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

  // get new layer and show it
  ddmenuitem = document.getElementById(id);
  ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
  if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
  closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
  if(closetimer)
  {
    window.clearTimeout(closetimer);
    closetimer = null;
  }
}

// close layer when click-out
document.onclick = mclose;

var count = 0;
function showmenu() {
  count = count + 1;
  if (count == 1 || $(window).scrollTop() != 0) {
  $('ul#menu-primary-items').css('display', 'block');
  window.scrollTo(0, 0);
  debug("clicky");
  };
  if ($(window).scrollTop() == 0) {
  $('ul#menu-primary-items').css('display', 'none');

  count = 0;
  };
};

function contact() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
};
