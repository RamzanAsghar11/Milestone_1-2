function toggleworkExperience() {
    const experienceList = document.getElementById("Work_experience") as HTMLElement
    const button = document.getElementById("hide_experience") as HTMLElement

    if (experienceList.style.display === "none") {
        experienceList.style.display = "block";
        button.textContent = "Hide Experience";
    } else {
        experienceList.style.display = "none";
        button.textContent = "Show Experience";
    }
}