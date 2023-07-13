const randomBtn = document.querySelector("#genderBtn");
const genderDiv = document.querySelector("#gender");

randomBtn.addEventListener("click", () => genderResult());

function genderChoice() {
    const genderArray = ["Male", "Female"];
    const randomGender = genderArray[Math.floor(Math.random() * genderArray.length)];
    return randomGender;
}

function genderResult() {
    const gender = genderChoice();
    const result = document.createElement("p");
    result.classList.add("results");
    result.textContent = `${gender}`;
    genderDiv.appendChild(result);
}



