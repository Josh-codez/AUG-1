const intro_btn = document.getElementById("intro_btn");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const info = document.querySelector(".info");
const gift_BTN = document.querySelector("#gift_btn");
const no_gift_BTN = document.querySelector("#no_gift_btn");


function toggleBoxes() {
    if (!intro_btn) return;
    intro_btn.addEventListener("click", function() {
        box1.className = "intro_box animation_box1";
        box2.className = "intro_box animation_box2";
        intro_btn.style.display = "none";
        if (info) info.style.display = 'flex';

    });
}

toggleBoxes();

gift_BTN.addEventListener("click", function() {})


no_gift_BTN.addEventListener("click", function() {
    no_gift_BTN.style.display = "none";
    gift_BTN.style.width = "300px";
});