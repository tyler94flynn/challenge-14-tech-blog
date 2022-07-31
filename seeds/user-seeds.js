const { User } = require('../models');

const userData = [
    {
        username: "tyler_f",
        twitter: "tylerf",
        github: "tylerf",
        email: "tylerf@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt_b",
        twitter: "mathewb",
        github: "mathewb",
        email: "mathew_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "shawn_c",
        twitter: "shawn",
        github: "shawn",
        email: "shawn_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "leigh_n",
        twitter: "leighnorris",
        github: "leighnorris",
        email: "leigh_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "kat_d",
        twitter: "katd",
        github: "katd",
        email: "kat_d@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "pouya",
        twitter: "pouya_w",
        github: "pouya",
        email: "pouya@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;