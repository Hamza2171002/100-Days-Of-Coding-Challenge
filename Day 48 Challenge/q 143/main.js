"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditionalPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
