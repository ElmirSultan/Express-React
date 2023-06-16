import {v4 as uuid} from "uuid"
let users = [
    {
        id:uuid(),
        name: "Elmir",
        email:"elmirsultann@gmail.com",
        country:"Azerbaijan",
        contact:"11000110"
    },
    {
        id:uuid(),
        name:"Sultan",
        email:"elmir@gmail.com",
        country:"Azerbaijan",
        contact:"11000110"
    }
]


export const getUsers = (req,res) => {
    res.send(users);
}

export const getSingleUser = (req,res) => {
    const id = req.params.id
    const user = users.find((u) => u.id === id);
    if(!user){
        res.status(400).send("User Not found")
    }
    res.send(user)
}


export const crateUser = (req,res) => {
    const {name,email,country,contact} = req.body;
    const user = {
        id:uuid(),
        name:name,
        email: email,
        country: country,
        contact:contact
    };

    users.push(user)
    res.send("NEw user created")
}

export const deleteUser = (req,res) => {
    const id = req.params.id
    const user = users.find((u) => u.id === id);
    users = users.filter((u) => u.id !== id);
    if(!user){
        res.status(400).send("User Not found")
    }
    res.send(users)
}

export const editUser = (req,res) => {
    const id = req.params.id
    const user = users.find((u) => u.id === id);
    const {name,email,country,contact} = req.body;
    if(!user){
        res.status(400).send("User Not found")
    }
    user.name = name;
    user.email = email;
    user.country = country;
    user.contact = contact;
    res.send(user);
}
