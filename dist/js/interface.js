// REDRAW
function reDraw() {
    removeElementsByClass("back");
    removeElementsByClass("shape");
    createComp( bckMin, bckMax, divMin, divMax, circle, palette, imgUrl );
}

// INITIAL DRAW
reDraw();

// delete elements
function removeElementsByClass(className){
    let elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Choose image
let newPath;
let imageRadios = document.querySelectorAll('[name="imageurl"]');
for (let i = 0; i < imageRadios.length; i++) {
    imageRadios[i].addEventListener('change', function() {
        newPath = imageRadios[i].nextSibling.nextSibling.children[0].src;
    });
}
document.getElementById("chooseImage").onclick = function() {
    
    let imagePath = document.getElementById('imagePath').value;
    if (imagePath != null && imagePath != "") {
        newPath = imagePath;
    }
    imgUrl = newPath;
    document.getElementById('imagePath').value = "";
    reDraw();
}

// shape
let shapeRadios = document.querySelectorAll('[name="shape"]');
for (var i = 0; i < shapeRadios.length; i++) {
    shapeRadios[i].addEventListener('change', function() {
        circle = !circle;
    });
}

// img position
document.getElementById("imgPos").onchange = function() {
    let newImgPos = this.options[this.selectedIndex].text;
    document.getElementById("imageholder").style.backgroundPosition = newImgPos;
}

// img size
document.getElementById("imgSize").onchange = function() {
    let newImgSize = this.options[this.selectedIndex].text;
    document.getElementById("imageholder").style.backgroundSize = newImgSize;
}

// 100%
document.getElementById("w100").onclick = function() {
    document.getElementById("tela").classList.toggle("fullwidth");
}

// overflow hidden 
document.getElementById("overflow").onclick = function() {
    document.getElementById("divs").classList.toggle("show");
}

// sliders
document.getElementById("backMin").oninput = function() {
    this.setAttribute('value', this.value);
    bckMin = this.value;
}
document.getElementById("backMax").oninput = function() {
    this.setAttribute('value', this.value);
    bckMax = this.value;
}
document.getElementById("frontMin").oninput = function() {
    this.setAttribute('value', this.value);
    divMin = this.value;
}
document.getElementById("frontMax").oninput = function() {
    this.setAttribute('value', this.value);
    divMax = this.value;
}

// MAIN ACTION
document.getElementById("redraw").onclick = function() {
    reDraw();
}