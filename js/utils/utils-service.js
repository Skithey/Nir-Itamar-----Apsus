export const utilsService = {
    getRandomInt,
    getRandomId,
    saveToStorage,
    loadFromStorage
};

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
        // localStorage[key] = JSON.stringify(val);
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function getRandomId() {
    var pt1 = Date.now().toString(16);
    var pt2 = getRandomInt(1000, 9999).toString(16);
    var pt3 = getRandomInt(1000, 9999).toString(16);
    return `${pt3}-${pt1}-${pt2}`.toUpperCase();
}

function getRandomInt(num1, num2) {
    var max = num1 >= num2 ? num1 + 1 : num2 + 1;
    var min = num1 <= num2 ? num1 : num2;
    return Math.floor(Math.random() * (max - min)) + min;
}