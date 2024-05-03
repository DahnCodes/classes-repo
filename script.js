class Guest {
  constructor(email, userName) {
    this.email = email;
    this.userName = userName;
    this.online = false;
    this.score = 0;
  }
}

class User extends Guest {
  //   constructor(email, userName) {
  //     this.email = email;
  //     this.userName = userName;
  //     this.online = false;
  //     this.score = 0;
  //   }

  login() {
    this.online = true;
    console.log(this.email, "just logged in");
  }
  logout() {
    this.online = false;
    console.log(this.email, "just logged out");
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}
User.prototype.aggregate = 0;

let userOne = new User("daniel@gmail.com", "Daniel123");
let userTwo = new User("praise@gmail.com", "Praise123");
let admin = new Admin("chisom@gmail.com", "Admin123");
let guestOne = new Guest("possible@example.com", "Possible123");

userTwo.score = 5;

let users = [userOne, userTwo, admin];

console.log(guestOne);
console.log(userOne);
console.log(userTwo);
console.log(admin);
console.log(userTwo.aggregate++);
console.log(users);
// admin.deleteUser(userOne);

// console.log(users);

const user1 = {
  email: "hhh@gmail.com",
  online: false,
  score: 0,
  userName: "Charlestone1",
  login: function () {
    console.log(this.email, "just logged in");
  },
};
const user2 = {
  email: "www@gmail.com",
  online: false,
  score: 0,
  userName: "Joyce",
};
const user3 = {
  email: "www@gmail.com",
  online: false,
  score: 0,
  userName: "Joyce",
};
