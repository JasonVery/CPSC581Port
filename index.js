document.addEventListener('DOMContentLoaded', () => {
    // Project Cards
    const proj1BTN = document.getElementById("proj1");
    const proj2BTN = document.getElementById("proj2");
    const proj3BTN = document.getElementById("proj3");

    // Main Wrappers
    const introCont = document.querySelector(".introCont");
    const projectCont = document.querySelector(".projectCont");

    // Title text
    var titleText = document.querySelector(".projectTitle");

    // BackBTN
    const BackBTN = document.getElementById("backBtn");




    proj1BTN.addEventListener("click", function () {
        titleText.textContent = "A Family of Buttons";
        proj1BTN.style.display = "none";
        proj2BTN.style.display = "none";
        proj3BTN.style.display = "none";
        BackBTN.style.display = "block";
        projectCont.style.height = "auto";


    });

    proj2BTN.addEventListener("click", function () {
        titleText.textContent = "Expertise Sharing";
        proj1BTN.style.display = "none";
        proj2BTN.style.display = "none";
        proj3BTN.style.display = "none";
        BackBTN.style.display = "block";
        projectCont.style.height = "auto";



    });

    proj3BTN.addEventListener("click", function () {
        titleText.textContent = "Augmented Eating Experience";
        proj1BTN.style.display = "none";
        proj2BTN.style.display = "none";
        proj3BTN.style.display = "none";
        BackBTN.style.display = "block";
        projectCont.style.height = "auto";

    });

    BackBTN.addEventListener("click", function () {
        titleText.textContent = "Projects";
        proj1BTN.style.display = "flex";
        proj2BTN.style.display = "flex";
        proj3BTN.style.display = "flex";
        BackBTN.style.display = "none";
        projectCont.style.height = "80%";

    });





});