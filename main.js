// document.addEventListener("mousemove", function (e) {
//     var cursor = document.querySelector(".cursor");
//     cursor.style.left = e.clientX + "px";
//     cursor.style.top = e.clientY + "px";
// });

document.addEventListener("mousemove", function (e) {
    var cursor = document.querySelector(".cursor");
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    var target = e.target;
    if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.classList.contains("hover-effect")
    ) {
        cursor.classList.add("active");
    } else {
        cursor.classList.remove("active");
    }
});
