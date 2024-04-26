// Question no.82
function stringLength(str: string): number{
    return str.length
}

console.log(stringLength("Hamza"));


// Question no.83

function convertCase(str: string){

    let upperStr = str.toUpperCase()
    let lowerStr = str.toLowerCase()
    console.log("upperCase", upperStr, "lowerCase", lowerStr)
}

convertCase("Hello World")


// Question no.84

function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
    
}

console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
