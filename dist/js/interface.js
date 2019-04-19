
// Defaults
let bckMin = 5,
    bckMax = 10,
    divMin = 3,
    divMax = 10,
    circle = false,
    palette = mine1,
    //imgUrl = "url('dist/img/britishlibrary-11306853283.png')";
    imgUrl = "url('dist/img/fdr.png')";


// START
createComp( bckMin, bckMax, divMin, divMax, circle, palette, imgUrl );

// delete elements
function removeElementsByClass(className){
    let elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// shape
let shapeRadios = document.querySelectorAll('[name="shape"]');
for (var i = 0; i < shapeRadios.length; i++) {
    shapeRadios[i].addEventListener('change', function() {
        circle = !circle;
    });
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

// REDRAW
document.getElementById("redraw").onclick = function() {
    removeElementsByClass("back");
    removeElementsByClass("rect");

    createComp( bckMin, bckMax, divMin, divMax, circle, palette, imgUrl );
}