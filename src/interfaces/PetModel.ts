import { Model,  BuildOptions } from 'sequelize';

export interface PetModel extends Model {
    id : number;
    name: string; 
}

export type PetModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): PetModel;
  }
