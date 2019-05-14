var botonabrirpop=document.getElementById('btabrirpop');
var btcerrarpop=document.getElementById('cerrarpopup');

btcerrarpop.addEventListener('click', function(){
    
    document.getElementById("overlay").style.display='none';
});
botonabrirpop.addEventListener('click', function(){
    
    document.getElementById("overlay").style.display='flex';
});
