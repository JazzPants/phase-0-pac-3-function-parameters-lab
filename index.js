function introduction(name) {
    return (`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}


function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

console.log(introductionWithLanguageOptional("Gracie")) //second argument defaults to JavaScript
console.log(introductionWithLanguageOptional("Gracie", "hello.js"))
//introductionWithLanguageOptional("Gracie"); second variable is omitted, so it goes to default

//introductionWithLanguageOptional("Gracie", "hello.js"); second variable overrides default

