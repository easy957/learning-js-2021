import users from "./users.js";

const getUsersWithFriend = (users, friendName) =>
  users.filter(el => el.friends.some(el => el === friendName)).map(el => el.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]