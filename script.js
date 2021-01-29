var i = 0;
var images = [];


images[0] = 'img1.jpg';
images[1] = 'img2.jpg';
images[2] = 'img3.jpg';
images[3] = 'img4.jpg';
images[4] = 'img5.jpg';

function imgChange()
{
document.slider.src = images[i];
if(i < images.length-1){
    i++;
}else{
    i = 0
}
}
function reverse(){
   document.slider.src = images[i];
   if(i  < images.length){
       i=i-1;
   }
   else{
       --i;
   }


} 
