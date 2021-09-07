const urlValidation = (url) => {
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return r.test(url);
}
export default urlValidation;
