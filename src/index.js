
import './sass/styles.scss';

console.log("heyyyy there!");

// document.body.addEventListener('mousemove',function(e){
//   var top = e.pageY;
//   var left = e.pageX;
//   var torch = document.getElementById('torch');
//   torch.style.clip = "rect("+(top-100)+"px,"+left+"px,"+top+"px,"+(left-100)+"px)";
// });


$(document).ready(function() {
  $(this).mousemove(function(e) {
    $("#light").css({
      "top": e.pageY - 250,
      "left": e.pageX - 250
    })
  }).mousedown(function(e) {
    switch (e.which) {
        case 1:
            $("#light").toggleClass("light-off");
            break;
        case 2:
            console.log('Middle Mouse button pressed.');
            break;
        case 3:
            console.log('Right Mouse button pressed.');
            break;
        default:
            console.log('You have a strange Mouse!');
    }
  })
})
