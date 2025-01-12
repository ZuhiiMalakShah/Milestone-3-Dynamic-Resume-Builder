// script.js
function generateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;

    // Output fields
    document.getElementById("outputName").innerText = name;
    document.getElementById("outputEmail").innerText = email;
    document.getElementById("outputExperience").innerText = experience;
    document.getElementById("outputSkills").innerText = skills;

    // Show the generated resume
    document.getElementById("resumeOutput").style.display = "block";

    // Reset form
    document.getElementById("resumeForm").reset();
}
