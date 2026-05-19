let xp = 0;

const btn = document.getElementById("clicker");

btn.onclick = () => {
    xp++;
    btn.innerText = "XP: " + xp;
};