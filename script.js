function openTool(tool) {

    if (tool === "url") {
        alert("🔍 URL Scanner will be added in Step 2");
    }

    else if (tool === "password") {
        alert("🔐 Password Analyzer will be added in Step 2");
    }

    else if (tool === "score") {
        alert("📊 Cyber Score System coming in Step 3");
    }

    else if (tool === "awareness") {
        alert("📘 Cyber Awareness Page coming in Step 2");
    }
}
function checkURL() {
    let url = document.getElementById("urlInput").value;
    let result = document.getElementById("result");

    let score = 100;

    if (!url.includes("https")) {
        score -= 30;
    }

    if (url.includes("login") || url.includes("verify") || url.includes("free")) {
        score -= 30;
    }

    if (/[0-9]/.test(url)) {
        score -= 20;
    }

    if (score >= 80) {
        result.innerText = "🟢 Safe Website | Score: " + score;
        result.style.color = "lightgreen";
    }
    else if (score >= 50) {
        result.innerText = "🟡 Suspicious Website | Score: " + score;
        result.style.color = "yellow";
    }
    else {
        result.innerText = "🔴 Dangerous Website | Score: " + score;
        result.style.color = "red";
    }
}
function checkPassword() {
    let pwd = document.getElementById("passwordInput").value;
    let msg = document.getElementById("strengthText");

    let score = 0;

    // length check
    if (pwd.length >= 6) score += 20;
    if (pwd.length >= 10) score += 20;

    // uppercase check
    if (/[A-Z]/.test(pwd)) score += 20;

    // numbers check
    if (/[0-9]/.test(pwd)) score += 20;

    // special characters check
    if (/[@$!%*?&]/.test(pwd)) score += 20;

    if (score >= 80) {
        msg.innerText = "🟢 Strong Password";
        msg.style.color = "lightgreen";
    }
    else if (score >= 40) {
        msg.innerText = "🟡 Medium Password";
        msg.style.color = "yellow";
    }
    else {
        msg.innerText = "🔴 Weak Password";
        msg.style.color = "red";
    }
}
function calculateScore() {

    let url = document.getElementById("urlScore").value;
    let pwd = document.getElementById("passScore").value;
    let result = document.getElementById("finalScore");

    let score = 0;

    // URL scoring
    if (url.includes("https")) {
        score += 30;
    } else {
        score += 10;
    }

    if (!url.includes("login") && !url.includes("verify") && !url.includes("free")) {
        score += 20;
    }

    // Password scoring
    if (pwd.length >= 10) {
        score += 30;
    } else if (pwd.length >= 6) {
        score += 20;
    } else {
        score += 10;
    }

    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) {
        score += 20;
    }

    // Final result
    if (score >= 70) {
        result.innerText = "🟢 Safe | Score: " + score;
        result.style.color = "lightgreen";
    }
    else if (score >= 40) {
        result.innerText = "🟡 Medium Risk | Score: " + score;
        result.style.color = "yellow";
    }
    else {
        result.innerText = "🔴 High Risk | Score: " + score;
        result.style.color = "red";
    }
}