import users from "./users.js";

const getUsersWithGender = (users, gender) => users.filter(el => el.gender === gender).map(el => el.name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]