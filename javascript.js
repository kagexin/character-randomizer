// Randomize a result from an array

function randomizeResults(array) {
    let randomResult = array[Math.floor(Math.random() * array.length)];
    return randomResult;
}

// Gender randomization

const genderBtn = document.querySelector("#genderBtn");
const genderDiv = document.querySelector("#gender");

genderBtn.addEventListener("click", () => genderResult());

function genderResult() {
    checkIfPrevResultExists(document.querySelector(".results"), genderDiv)

    const genderArray = ["Male", "Female"];
    const gender = randomizeResults(genderArray);
    const result = document.createElement("p");
    result.classList.add("results");
    result.textContent = `${gender}`;
    genderDiv.appendChild(result);
}




function checkIfPrevResultExists(prevResult, parentDiv) {
    if (prevResult) {
        parentDiv.removeChild(prevResult)
    }
}
