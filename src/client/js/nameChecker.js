function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return r.test(inputText);
}

export { checkForName }
