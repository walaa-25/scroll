let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mount1=document.getElementById('mount1');
let mount2=document.getElementById('mount2');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let nouvil=document.querySelector('.nouvil');
window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value+'px';
    moon.style.top=value*2 +'px';
    mount1.style.top=value +'px';
    mount2.style.top=value*.9 +'px';
    river.style.top=value +'px';
    boat.style.top=value +'px';
    boat.style.left=value*3 +'px';
    nouvil.style.fontSize=value+'px';
    if(scrollY>=67){
        nouvil.style.fontSize=67+'px';
        nouvil.style.position='fixed';
    }
    if(screenY>=478){
        nouvil.style.display= 'hidden';
    }
    else{
        nouvil.style.display= 'block';
    }
}
