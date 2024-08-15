document.addEventListener('keydown', function(event) {
   
    document.getElementById('key').textContent = event.key;         
    document.getElementById('keyCode').textContent = event.keyCode; 
    document.getElementById('which').textContent = event.which;     
});
