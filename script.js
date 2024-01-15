var loader = document.getElementById('preloader')
 function closepreloader(){
    loader.style.display='none';
 }

 window.addEventListener( "load" , function()
 {
  this.setTimeout(closepreloader , 2000);
 }

 )