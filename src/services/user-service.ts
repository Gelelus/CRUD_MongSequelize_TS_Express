import User from "../models/user";
import bcrypt from 'bcryptjs';

import { File } from "../interfaces/MulterFileFilter";
import { UserModel } from '../interfaces/UserModel';

const add = async function (data: {
    password: string;
    age: number;
    name: string;
  }) { 
    
    data.password = await bcrypt.hash(data.password, 8)
    return  await User.create(data)

}

const get = async function (id: string) {

    return await User.findByPk(id)

}

const getAll = async function () {

    return await User.findAll({raw:true})

}

const update = async function (data: {
    id: string;
    age: number;
    name: string;
  }) {
   
   return await User.update(data, {where: {id: data.id}})//возвращает  [id]

}


const del = async function (id : string) {

    return await User.destroy({where: {id: id}})//возвращает  id

}

const login = async function (data: {
    password: string;
    name: string;
  }) { 
    
    
    const user = await User.findByCredentials(data.name, data.password); //статик метод из model проверка хэша и логина
   
    const token = await user.generateAuthToken();  // сздание токена 
    
    return {user, token}
  
}

const getPets = async function (id : string) {

    const user = await User.findByPk(id);
    if(!user){throw new Error("User doesn't exist")}
    const pets = await user.getPets();
    
    return {user, pets}
}

const addPet = async function (data : {
    id: string;
    name: string;
}) {

    const user = await User.findByPk(data.id);
    if(!user){throw new Error("User doesn't exist")}
    const pet = await user.createPet({name:data.name})
    
    return {user,pet}
}

const addAvatar = async function (file: File, user: UserModel) {
    user.avatarImg = "/public/img/avatars/" + file.filename;
    user.save();
    return user
};




export default {
    add,
    get,
    update,
    del,
    getAll,
    login,
    getPets,
    addPet,
    addAvatar
}