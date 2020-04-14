import { Model,  BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';
import {PetModel} from './PetModel' 

export interface UserModel extends Model {
    id : number;
    age: string;
    name: string;
    password: string;
    avatarImg: string;
    generateAuthToken(): Promise<string>;
    getPets: HasManyGetAssociationsMixin<PetModel>; 
    addPet: HasManyAddAssociationMixin<PetModel, number>;
    hasPet: HasManyHasAssociationMixin<PetModel, number>;
    countPets: HasManyCountAssociationsMixin;
    createPet: HasManyCreateAssociationMixin<PetModel>;
}

export type UserModelStatic = typeof Model & {
    findByCredentials(login : string, password : string) : Promise<UserModel>;
    new (values?: object, options?: BuildOptions): UserModel;
  }
