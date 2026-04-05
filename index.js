// Full Js. Very much hardcoded 

document.addEventListener('DOMContentLoaded', () => {
    // Project Cards
    const proj1BTN = document.getElementById("proj1");
    const proj2BTN = document.getElementById("proj2");
    const proj3BTN = document.getElementById("proj3");

    // Main Wrappers
    const introCont = document.querySelector(".introCont");
    const projectCont = document.querySelector(".projectCont");

    // Title text
    const titleText = document.querySelector(".projectTitle");

    // BackBTN
    const BackBTN = document.getElementById("backBtn");

    // Info Conts
    const proj1Info = document.getElementById("proj1Info");
    const proj2Info = document.getElementById("proj2Info");
    const proj3Info = document.getElementById("proj3Info");




    proj1BTN.addEventListener("click", function () {
        titleText.textContent = "A Family of Buttons";
        proj1BTN.style.display = "none";
        proj2BTN.style.display = "none";
        proj3BTN.style.display = "none";
        BackBTN.style.display = "block";
        // projectCont.style.height = "auto";
        projectCont.style.boxShadow = "0 0 5px #00ff88, 0 0 15px #00ff88, 0 0 30px #00cc66, 0 0 60px #00994d";
        introCont.style.boxShadow = "0 0 5px #00ff88, 0 0 15px #00ff88, 0 0 30px #00cc66, 0 0 60px #00994d";
        proj1Info.style.display = "flex";


    });

    proj2BTN.addEventListener("click", function () {
        titleText.textContent = "Expertise Sharing";
        proj1BTN.style.display = "none";
        proj2BTN.style.display = "none";
        proj3BTN.style.display = "none";
        BackBTN.style.display = "block";
        // projectCont.style.height = "auto";
        projectCont.style.boxShadow = "0 0 5px #ffc1e3, 0 0 10px #ffc1e3, 0 0 20px #e0aaff, 0 0 40px #b388eb";
        introCont.style.boxShadow = "0 0 5px #ffc1e3, 0 0 10px #ffc1e3, 0 0 20px #e0aaff, 0 0 40px #b388eb";
        proj2Info.style.display = "flex";



    });

    proj3BTN.addEventListener("click", function () {
        titleText.textContent = "Augmented Eating Experience";
        proj1BTN.style.display = "none";
        proj2BTN.style.display = "none";
        proj3BTN.style.display = "none";
        BackBTN.style.display = "block";
        // projectCont.style.height = "auto";
        projectCont.style.boxShadow = "0 0 5px #ffb347, 0 0 10px #ffb347, 0 0 20px #ff9a3c, 0 0 40px #ff7a00";
        introCont.style.boxShadow = "0 0 5px #ffb347, 0 0 10px #ffb347, 0 0 20px #ff9a3c, 0 0 40px #ff7a00";

        proj3Info.style.display = "flex";

    });

    BackBTN.addEventListener("click", function () {
        titleText.textContent = "Projects";
        proj1BTN.style.display = "flex";
        proj2BTN.style.display = "flex";
        proj3BTN.style.display = "flex";
        BackBTN.style.display = "none";
        // projectCont.style.height = "90%";
        proj1Info.style.display = "none";
        proj2Info.style.display = "none";
        proj3Info.style.display = "none";
        projectCont.style.boxShadow = " 0 0 10px #fff, -1px 0 20px #b2ffff, 10px 0 80px #00ced1";
        introCont.style.boxShadow = " 0 0 10px #fff, -1px 0 20px #b2ffff, 10px 0 80px #00ced1";

    });


});