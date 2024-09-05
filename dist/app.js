"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvxyz';
const numbersChars = '0123456789';
const symbolsChars = '!@#$%&^*()';
// BUttons
const getPasswordBtn = document.getElementById('generate');
const generateAnotherWay = document.getElementById('generateAnotherWay');
const copyBtn = document.getElementById('copy');
let generatedPassword;
function generateRondomPassword() {
    let password = '';
    let length = Number(lengthEl.value);
    let chars = '';
    chars += uppercaseEl.checked ? uppercaseChars : '';
    chars += lowercaseEl.checked ? lowercaseChars : '';
    chars += numbersEl.checked ? numbersChars : '';
    chars += symbolsEl.checked ? symbolsChars : '';
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random, random + 1);
    }
    return password;
}
function copyPassword() {
    return __awaiter(this, void 0, void 0, function* () {
        if (navigator.clipboard) {
            if (passwordEl.value.length > 0) {
                try {
                    yield navigator.clipboard.writeText(passwordEl.value);
                    alert('Password copied😁');
                }
                catch (err) {
                    alert('Failed to copy password: ' + err);
                }
            }
            else {
                alert('Password field is empty. Please generate a password first.');
            }
        }
        else {
            alert('Clipboard API not supported');
        }
    });
}
function updateUiPassword(data) {
    passwordEl.value = data;
}
// Alternative way
let allChars;
allChars = [
    ...uppercaseChars,
    ...lowercaseChars,
    ...numbersChars,
    ...symbolsChars,
];
function getRandomIndex(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function generatePassword(array, lengthValue) {
    const randomItems = [];
    for (let i = 0; i < lengthValue; i++) {
        const randomIndex = getRandomIndex(array);
        randomItems.push(randomIndex);
    }
    return randomItems;
}
function displayPasswortUi() {
    const konacno = generatePassword(allChars, Number(lengthEl.value));
    const packed = konacno.join('');
    passwordEl.value = packed;
}
// execution
getPasswordBtn === null || getPasswordBtn === void 0 ? void 0 : getPasswordBtn.addEventListener('click', () => {
    generatedPassword = generateRondomPassword();
    updateUiPassword(generatedPassword);
});
generateAnotherWay === null || generateAnotherWay === void 0 ? void 0 : generateAnotherWay.addEventListener('click', displayPasswortUi);
copyBtn.addEventListener('click', copyPassword);
