export function convertObjToArr(obj) {
    const keys = Object.keys(obj);
    return keys.map(key => obj[key]);
}
