const bts = document.querySelectorAll(".theme-btn");
const bd = document.querySelector("body");
console.log(bts);
// a task that we want to execute when occurring a click event
for (let index = 0; index < bts.length; index++) {
    const btn = bts[index];
    console.log(btn);
    btn.addEventListener("click", () => {
        console.log(btn.getAttribute("data-theme"));
        console.log(btn.getAttribute("class"));
        bd.className = btn.getAttribute("data-theme");
    });

}