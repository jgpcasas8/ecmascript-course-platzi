const user = {username: 'Jose', edad: 33, country: 'PE'};
const {username, ...values} = user;

console.log(username);
console.log(values);