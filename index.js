function toggleworkExperience() {
    var experienceList = document.getElementById("Work_experience");
    var button = document.getElementById("hide_experience");
    if (experienceList.style.display === "none") {
        experienceList.style.display = "block";
        button.textContent = "Hide Experience";
    }
    else {
        experienceList.style.display = "none";
        button.textContent = "Show Experience";
    }
}
