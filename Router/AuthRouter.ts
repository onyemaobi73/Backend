import express, { Router} from "express"
import { SignUser, 
    createUser,
     deleteOneUser, 
     readOneUser, 
     readUsers, 
     updateOneUser 
    } from "../controller/AuthController"

const router:Router = express.Router();

router.route("/all-users").get(readUsers);
router.route("/:id/get-one-user").get(readOneUser);
router.route("/:id/update-user").patch(updateOneUser);
router.route("/:id/delete-user").delete(deleteOneUser);
router.route("/register").post(createUser);
router.route("/sign-in").post(SignUser);

export default router