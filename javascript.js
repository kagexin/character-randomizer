// Randomize a result from an array

function randomizeResults(array) {
    let randomResult = array[Math.floor(Math.random() * array.length)];
    return randomResult;
}


// Check if previous result exists

function checkIfPrevResultExists(prevResult, parentDiv) {
    if (prevResult) {
        parentDiv.removeChild(prevResult);
    }
}

// Generate a random HEX code

function randomHexCode() {
    const randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    const finalHex = `${randomColor}`;
    return finalHex;
}

// Add randomized HEX code to its respective div

function addRandomHexResult(classTag, divName, blockTag) {
    const hexCode = randomHexCode();
    const result = document.createElement("p");
    result.classList.add("results", classTag);
    result.textContent = `${hexCode}`;
    divName.appendChild(result);

    const colorDiv = document.createElement("div");
    colorDiv.classList.add(blockTag, "colorBlock");
    divName.appendChild(colorDiv);
    colorDiv.style.backgroundColor = `${hexCode}`
}


// Gender randomization

const genderDiv = document.querySelector("#gender");
const genderBtn = document.querySelector("#genderBtn");

genderBtn.addEventListener("click", () => randomGenderResult());

function randomGenderResult() {
    checkIfPrevResultExists(document.querySelector(".gender"), genderDiv)

    const genderArray = ["Male", "Female"];
    const randomGender = randomizeResults(genderArray);
    const result = document.createElement("p");
    result.classList.add("results", "gender");
    result.textContent = `${randomGender}`;
    genderDiv.appendChild(result);
}


// Skin color randomization

const skinColorDiv = document.querySelector("#skin");
const skinColorBtn = document.querySelector("#skinBtn")

skinColorBtn.addEventListener("click", () => randomSkinColorResult());

function randomSkinColorResult() {
    checkIfPrevResultExists(document.querySelector(".skinColor"), skinColorDiv);
    checkIfPrevResultExists(document.querySelector(".skinColorBlock"), skinColorDiv)

    addRandomHexResult("skinColor", skinColorDiv, "skinColorBlock");
}


// Eye color randomization

const eyeColorDiv = document.querySelector("#eyes");
const eyeColorBtn = document.querySelector("#eyeBtn");

eyeColorBtn.addEventListener("click", () => randomEyeColorResult());

function randomEyeColorResult() {
    checkIfPrevResultExists(document.querySelector(".eyeColor"), eyeColorDiv);
    checkIfPrevResultExists(document.querySelector(".eyeColorBlock"), eyeColorDiv);

    const hexCode = randomHexCode();
    const result = document.createElement("p");
    result.classList.add("results", "eyeColor");
    result.textContent = `${hexCode}`;
    eyeColorDiv.appendChild(result);

    const colorDiv = document.createElement("div");
    colorDiv.classList.add("eyeColorBlock", "colorBlock");
    eyeColorDiv.appendChild(colorDiv);
    colorDiv.style.backgroundColor = `${hexCode}`;
}


// Hair color randomization

const hairColorDiv = document.querySelector("#hairColor");
const hairColorBtn = document.querySelector("#hairColorBtn");

hairColorBtn.addEventListener("click", () => randomHairColorResult());

function randomHairColorResult() {
    checkIfPrevResultExists(document.querySelector(".hairColor"), hairColorDiv);
    checkIfPrevResultExists(document.querySelector(".hairColorBlock"), hairColorDiv);

    const hexCode = randomHexCode();
    const result = document.createElement("p");
    result.classList.add("results", "hairColor");
    result.textContent = `${hexCode}`;
    hairColorDiv.appendChild(result);

    const colorDiv = document.createElement("div");
    colorDiv.classList.add("hairColorBlock", "colorBlock");
    hairColorDiv.appendChild(colorDiv);
    colorDiv.style.backgroundColor = `${hexCode}`;
}


// Hair length randomization

const hairLengthDiv = document.querySelector("#hairLength");
const hairLengthBtn = document.querySelector("#hairLengthBtn");

hairLengthBtn.addEventListener("click", () => randomHairLengthResult());

function randomHairLengthResult() {
    checkIfPrevResultExists(document.querySelector(".hairLength"), hairLengthDiv)

    const hairLengthArray = ["Short", "Medium", "Long"];
    const randomHairLength = randomizeResults(hairLengthArray);
    const result = document.createElement("p");
    result.classList.add("results", "hairLength");
    result.textContent = `${randomHairLength}`;
    hairLengthDiv.appendChild(result);
}