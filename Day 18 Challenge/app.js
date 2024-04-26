// Question no.52
var smartPhone = {
    make: "Samsung",
    model: "Galaxy A03",
    specs: {
        storage: "64GB",
        screenSize: "6.5 inches",
        betteryLife: "18 hours"
    }
};
console.log(smartPhone);
// Question no.53
var developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameWork: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
var languages = developerSkills.languages, frameWork = developerSkills.frameWork, tools = developerSkills.tools;
console.log("language: ".concat(languages[0], ", framework: ").concat(frameWork[0], ", tool: ").concat(tools[0]));
// Question no.54
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPrefrance = createObjectWithDynamicKey("theme", "dark");
console.log(userPrefrance);
