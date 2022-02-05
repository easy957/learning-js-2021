import users from "./users.js";

const getUsersWithEyeColor = (users, color) => users.filter(el => el.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));