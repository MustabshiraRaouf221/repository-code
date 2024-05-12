
var modal = document.getElementById('modal');

var images = document.querySelectorAll('.image img');
var modalImg = document.getElementById('modal-image');
var captionText = document.getElementById('caption');

images.forEach(function(image) {
    image.onclick = function(){
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

var span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    modal.style.display = 'none';
}

















  



