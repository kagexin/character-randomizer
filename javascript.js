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


// Add randomized array options to their respective divs

function addRandomArrayResult(array, className, divName) {
    const random = randomizeResults(array);
    const result = document.createElement("p");
    result.classList.add("results", className);
    result.textContent = `${random}`;
    divName.appendChild(result);
}


// Gender randomization

const genderDiv = document.querySelector("#gender");
const genderBtn = document.querySelector("#genderBtn");

genderBtn.addEventListener("click", () => randomGenderResult());

function randomGenderResult() {
    checkIfPrevResultExists(document.querySelector(".gender"), genderDiv)

    const genderArray = ["Male", "Female"];
    addRandomArrayResult(genderArray, "gender", genderDiv);
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

    addRandomHexResult("eyeColor", eyeColorDiv, "eyeColorBlock");
}


// Hair color randomization

const hairColorDiv = document.querySelector("#hairColor");
const hairColorBtn = document.querySelector("#hairColorBtn");

hairColorBtn.addEventListener("click", () => randomHairColorResult());

function randomHairColorResult() {
    checkIfPrevResultExists(document.querySelector(".hairColor"), hairColorDiv);
    checkIfPrevResultExists(document.querySelector(".hairColorBlock"), hairColorDiv);

    addRandomHexResult("hairColor", hairColorDiv, "hairColorBlock");
}


// Hair length randomization

const hairLengthDiv = document.querySelector("#hairLength");
const hairLengthBtn = document.querySelector("#hairLengthBtn");

hairLengthBtn.addEventListener("click", () => randomHairLengthResult());

function randomHairLengthResult() {
    checkIfPrevResultExists(document.querySelector(".hairLength"), hairLengthDiv)

    const hairLengthArray = ["Short", "Medium", "Long"];
    addRandomArrayResult(hairLengthArray, "hairLength", hairLengthDiv);
}


// Height randomization

const heightDiv = document.querySelector("#height");
const heightBtn = document.querySelector("#heightBtn");

heightBtn.addEventListener("click", () => randomHeightResult());

function randomHeightResult() {
    checkIfPrevResultExists(document.querySelector(".height"), heightDiv);

    const feetArray = ["4", "5", "6"];
    const inchesArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    
    const randomFootValue = feetArray[Math.floor(Math.random() * feetArray.length)];
    const randomInchValue = inchesArray[Math.floor(Math.random() * inchesArray.length)];

    const randomHeight = `${randomFootValue}'${randomInchValue}"`;

    const result = document.createElement("p");
    result.classList.add("results", "height");
    result.textContent = `${randomHeight}`;
    heightDiv.appendChild(result);
}


// Personality randomization

const personalityDiv = document.querySelector("#personality");
const personalityBtn = document.querySelector("#personalityBtn");

personalityBtn.addEventListener("click", () => randomPersonalityResult());

function randomPersonalityResult() {
    checkIfPrevResultExists(document.querySelector(".personality"), personalityDiv);

    const posititvesArray = [
        "Adventurous", "Athletic",
        "Calm", "Caring", "Charismatic", "Charming", "Cheerful", "Clever", "Compassionate", "Confident", "Creative", "Curious",
        "Daring", "Decisive", "Dedicated", "Dramatic",
        "Empathetic", "Energetic",  "Enthusiastic",
        "Friendly",
        "Generous", "Gentle",
        "Hardworking", "Honest", "Humble", "Humorous",
        "Imaginative",  "Independent", "Insightful", "Intelligent",
        "Loyal",
        "Modest",
        "Observant", "Optimistic", "Organized",
        "Passionate", "Patient",  "Perceptive", "Persuasive", "Playful", "Protective",
        "Rational", "Reliable", "Romantic",
        "Selfless", "Self-sufficent", "Sensitive", "Sentimental", "Serious", "Sociable", "Stoic", "Strong", "Sympathetic",
    ]

    const negativesArray = [
        "Abrasive", "Aloof", "Angry", "Anxious", "Apathetic", "Argumentative", "Arrogant", "Assertive",
        "Blunt",
        "Careless",  "Childish", "Clumsy",  "Compulsive", "Conceited", "Critical", "Crude", "Cynical",
        "Deceitful", "Demanding", "Destructive", "Devious", "Dishonest", "Disloyal",
        "Egocentric",  "Envious",
        "Fiery", "Forgetful",
        "Greedy", "Gullible",
        "Hesitant", "Hostile",
        "Ignorant", "Impatient", "Impulsive", "Inconsiderate", "Indecisive", "Insecure", "Insensitive", "Irrational", "Irresponsible", "Irritable",
        "Lazy",
        "Malicious", "Masochistic", "Melancholic", "Misguided",
        "Naive", "Nihilistic",
        "Obesessive",
        "Passive", "Petty", "Possessive",
        "Regretful", "Resentful", "Rigid",
        "Sadistic", "Secretive", "Selfish", "Shallow", "Sly", "Steely", "Submissive",
        "Thievish", "Timid",
        "Unfriendly", "Unrealistic", "Unreliable", "Unstable",
        "Vindictive",
        "Weak"
    ]

    const randomPositive = posititvesArray[Math.floor(Math.random() * posititvesArray.length)];
    const randomPositive2 = posititvesArray[Math.floor(Math.random() * posititvesArray.length)];
    const randomNegative = negativesArray[Math.floor(Math.random() * negativesArray.length)];

    const randomTraits = `${randomPositive}, ${randomPositive2}, ${randomNegative}`;

    const result = document.createElement("p");
    result.classList.add("results", "personality");
    result.textContent = `${randomTraits}`;
    personalityDiv.appendChild(result);
}