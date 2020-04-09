import { Router } from "express"

import valid from "../middleware/validation";
import validCreateUser from "../dtos/create-user.dto"; 
import validLoginUser from "../dtos/login-user.dto";   

import auth from "../middleware/auth";
import UserController from "../controllers/user-controller";
const user_controller = new UserController();

const router = Router();

router.delete("/:id", auth, user_controller.deleteUser);

router.post("/pet", auth, user_controller.addPetToUser); // добавить питомца
router.get("/pet/:id", auth, user_controller.getUserWithPets); // получение всех питомцов пользователя

router.post("/", valid(validCreateUser), user_controller.addUser); //регистрация ++
router.post("/login", valid(validLoginUser), user_controller.login); //авторизация password/login

router.post("/logout", auth, user_controller.logout); //выход

router.put("/", auth, user_controller.updateUser);
router.get("/:id", auth, user_controller.getUser);
router.get("/", auth, user_controller.getAllUser);

export default router;
