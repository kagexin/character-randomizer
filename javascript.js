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

function addRandomHexResult(classTag, divName, blockClass) {
    const hexCode = randomHexCode();
    const result = document.createElement("p");
    result.classList.add("results", classTag);
    result.textContent = `${hexCode}`;
    divName.appendChild(result);

    const colorDiv = document.createElement("div");
    colorDiv.classList.add(blockClass, "colorBlock");
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


// Add funtionality for generating a random natural color

function addNaturalColorResult(checkbox, array, className, divName, blockClass) {
    if (!checkbox.checked) {
        addRandomHexResult(className, divName, blockClass);
    } else {
        const naturalColor = randomizeResults(array);
        const result = document.createElement("p");
        result.classList.add("results", className);
        result.textContent = `${naturalColor}`;
        divName.appendChild(result);

        const colorDiv = document.createElement("div");
        colorDiv.classList.add(blockClass, "colorBlock");
        divName.appendChild(colorDiv);
        colorDiv.style.backgroundColor = `${naturalColor}`;
    }
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
const naturalSkinColorBox = document.querySelector("#naturalSkinColor");

skinColorBtn.addEventListener("click", () => randomSkinColorResult());

function randomSkinColorResult() {
    checkIfPrevResultExists(document.querySelector(".skinColor"), skinColorDiv);
    checkIfPrevResultExists(document.querySelector(".skinColorBlock"), skinColorDiv);

    const naturalSkinColorArray = [
        "#DBA974", "#E3C08B", "#F1D9B7", "#F6E5C4", "#f7c19b",
        "#ebab7f", "#d39972", "#bd8966", "#8d5524", "#c68642",
        "#e0ac69", "#f1c27d", "#ffdbac", "#e3b499", "#e6bca3",
        "#e9c3ad", "#ebcbb8", "#f1dacc", "#BF9169", "#8C644D",
        "#593123", "#714937", "#321B0F", "#5e3526", "#9b6f56",
        "#583c34", "#dcb48c", "#f7e8be", "#d1a888", "#9c785c"
    ]
    addNaturalColorResult(naturalSkinColorBox, naturalSkinColorArray, "skinColor", skinColorDiv, "skinColorBlock");
}


// Eye color randomization

const eyeColorDiv = document.querySelector("#eyes");
const eyeColorBtn = document.querySelector("#eyeBtn");
const naturalEyeColorBox = document.querySelector("#naturalEyeColor");

eyeColorBtn.addEventListener("click", () => randomEyeColorResult());

function randomEyeColorResult() {
    checkIfPrevResultExists(document.querySelector(".eyeColor"), eyeColorDiv);
    checkIfPrevResultExists(document.querySelector(".eyeColorBlock"), eyeColorDiv);

    const naturalEyeColorArray = [
        // brown
        "#634e34", "#5e481e", "#542a0e", "#63390f", "#603101",
        "#451800", "#814f12", "#6d481a", "#673f0d", "#47331e",

        // blue
        "#2e536f", "#A1CAF1", "#0D98BA", "#0D5176", "#81badd",
        "#81b1ce", "#579ec9", "#a3bdd4", "#354c5e", "#a3cfca",

        // green
        "#3d671d", "#1c7847", "#497665", "#8D9B87", "#7e8546",
        "#787e3f", "#7db49f", "#405449", "#53645c", "#a9e09f",

        // gray
        "#989696", "#7c7c7c", "#6c7d8f", "#5a6171", "#b2b5b1"
    ]
    addNaturalColorResult(naturalEyeColorBox, naturalEyeColorArray, "eyeColor", eyeColorDiv, "eyeColorBlock");
}


// Hair color randomization

const hairColorDiv = document.querySelector("#hairColor");
const hairColorBtn = document.querySelector("#hairColorBtn");
const naturalHairColorBox = document.querySelector("#naturalHairColor");

hairColorBtn.addEventListener("click", () => randomHairColorResult());

function randomHairColorResult() {
    checkIfPrevResultExists(document.querySelector(".hairColor"), hairColorDiv);
    checkIfPrevResultExists(document.querySelector(".hairColorBlock"), hairColorDiv);

    const naturalHairColorArray = [
       // brown
       "#583322", "#714721", "#744729", "#412922", "#8a6030", 
       "#a47a3f", "#a15d1a", "#7e4d1e", "#57330f", "#4b3621",

       // blonde 
       "#fde968",  "#b48b57", "#c19249", "#d6b370", "#b58143",
       "#fffbb6", "#fdee87", "#b29258", "#dac586", "#fafad2",

       // ginger
       "#8c4a06", "#a55728", "#ea871e", "#d5750a", "#c06205",
       "#ac4f00", "#7e3a06",

       // gray & black
       "#7b746e", "#838794", "#6e727a", "#2c1b18", "#181818",
       "#1b1b1b", "#1a1110", "#160604", "#0c0803", "#494949"

    ]
    addNaturalColorResult(naturalHairColorBox, naturalHairColorArray, "hairColor", hairColorDiv, "hairColorBlock");
}


// Hair length randomization

const hairLengthDiv = document.querySelector("#hairLength");
const hairLengthBtn = document.querySelector("#hairLengthBtn");

hairLengthBtn.addEventListener("click", () => randomHairLengthResult());

function randomHairLengthResult() {
    checkIfPrevResultExists(document.querySelector(".hairLength"), hairLengthDiv);

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
    let randomPositive2 = posititvesArray[Math.floor(Math.random() * posititvesArray.length)];
    const randomNegative = negativesArray[Math.floor(Math.random() * negativesArray.length)];

    if (randomPositive2 == randomPositive) {
        randomPositive2 = posititvesArray[Math.floor(Math.random() * posititvesArray.length)];
    }

    const randomTraits = `${randomPositive}, ${randomPositive2}, ${randomNegative}`;

    const result = document.createElement("p");
    result.classList.add("results", "personality");
    result.textContent = `${randomTraits}`;
    personalityDiv.appendChild(result);
}


// Outfit randomization

const outfitDiv = document.querySelector("#outfit");
const outfitBtn = document.querySelector("#outfitBtn");

outfitBtn.addEventListener("click", () => randomOutfitResult());

function randomOutfitResult() {
    checkIfPrevResultExists(document.querySelector(".outfit"), outfitDiv)

    const outfitArray = [
        "Academia", "Androgynous", "Autumnal",
        "Biker", "Bright", "Business",
        "Casual", "Cottagecore", "Cyperpunk",
        "Dark",
        "Edgy", "Elegant",
        "Feminine", "Flamboyant", "Formal", "Futuristic",
        "Goth", "Grunge",
        "Loungewear",
        "Masculine", "Military", "Minimalistic", "Modest",
        "Pastel", "Psychadelic", "Punk",
        "Retro", "Royal",
        "Sophisticated", "Sporty",  "Steampunk", "Streetwear", "Summer", "Swimwear",
        "Techwear",
        "Vibrant", "Victorian", "Vintage",
        "Winter"
    ];
    addRandomArrayResult(outfitArray, "outfit", outfitDiv);
}


// Extra features randomization

const extrasDiv = document.querySelector("#extras");
const extrasBtn = document.querySelector("#extrasBtn");

extrasBtn.addEventListener("click", () => randomExtrasResult());

function randomExtrasResult() {
    checkIfPrevResultExists(document.querySelector(".extras"), extrasDiv)

    const extrasArray = [
        "Has a tail",
        "Has animal ears",
        "Has freckles",
        "Has piercings",
        "Has scars",
        "Has tattoos",
        "Has wings",
        "Is blind",
        "Wears a face mask",
        "Wears an eyepatch",
        "Wields a gun",
        "Wields a greatsword",
        "Wields a knife",
        "Wields a spear",
        "Wields a sword",
    ];
    addRandomArrayResult(extrasArray, "extras", extrasDiv);
}


// Randomize all button

const randomAllBtn = document.querySelector(".randomAllBtn");

randomAllBtn.addEventListener("click", () => randomAllResult());

function randomAllResult() {
    randomGenderResult();
    randomSkinColorResult();
    randomEyeColorResult();
    randomHairColorResult();
    randomHairLengthResult();
    randomHeightResult();
    randomPersonalityResult();
    randomOutfitResult();
    randomExtrasResult();
}