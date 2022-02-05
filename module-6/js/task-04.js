import users from "./users.js";


const getInactiveUsers = users => users.filter(el => !el.isActive);

console.log(getInactiveUsers(users));