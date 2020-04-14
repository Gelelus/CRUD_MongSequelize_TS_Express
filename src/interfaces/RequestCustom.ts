import { UserModel } from '../interfaces/UserModel';
declare global {
    namespace Express {
      interface Request {
        user: UserModel
      }
    }
  }
