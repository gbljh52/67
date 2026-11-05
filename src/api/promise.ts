import { BASE_URL } from "./config";
const promise = fetch(
BASE_URL + "/public/books?limit=3"
);
console.log(promise); // Promise, не книги
promise.catch(error => {
console.error(error.message);
});