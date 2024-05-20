const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

function previewImage(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var previewImg = document.getElementById("previewImg");
    previewImg.setAttribute("src", e.target.result);
    previewImg.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function drag() {
  document.querySelector('.dragBox').classList.add('draging');
}

function leave() {
  document.querySelector('.dragBox').classList.remove('draging');
}

function drop(event) {
  event.preventDefault();
  document.querySelector('.dragBox').classList.remove('draging');
  var files = event.dataTransfer.files;
  if (files.length > 0) {
    var fileInput = document.getElementById('uploadFile');
    fileInput.files = files;
    previewImage({ target: { files: files } });
  }
}

window.addEventListener("dragover", function(e) {
  e.preventDefault();
}, false);

window.addEventListener("drop", function(e) {
  e.preventDefault();
}, false);

const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');

dropdownItems.forEach(function(item) {
    item.addEventListener('click', function() {
        const selectedText = item.textContent;
        document.getElementById('dropdownbtn').textContent = selectedText;
    });

});
