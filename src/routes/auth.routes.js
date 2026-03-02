const { Router } = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const authRouter = Router()


/**
 * @route POST /api/aut/register
 * @description Register a new user.
 * @access Public. 
 */
authRouter.post("/register", authController.registerUserController)

/**
 * @route POST /api/auth/login
 * @description Login user with email and password.
 * @access Public. 
 */

authRouter.post("/login", authController.loginUserController)


/**
 * @routh GET/api/auth/logout
 * @description Clear token from the cookie and add the token in the blacklist.
 * @access Public 
 */
authRouter.get("/logout", authController.logoutUserController)

/**
 * @routh GET/api/auth/get-me
 * @description Get the current logged in user details. 
 * @access Private
 */
authRouter.get("/get-me",authMiddleware.authUser ,authController.getMeController)

module.exports = authRouter