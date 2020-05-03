const logger = require('../config/Logger');
const {errorResponse,successResponse} = require('../utils/ResponseUtility');

const getUserDetails = async (req,res) => {
    logger.info("Stared fetching user details")
    logger.info("Completed fetching user details")
    res.status(200).jsonp(successResponse("Successfully fetched"));
}

const signIn = async (req,res) => {
    logger.info("Stared loggin for the user")
    logger.info("Completed loggin for the user")
    res.status(200).jsonp(successResponse("Successfully loggedin"));
}

const signUp = async (req,res) => {
    logger.info("Stared registration for the user")
    logger.info("Completed registration for the user")
    res.status(200).jsonp(successResponse("Successfully registered"));
}

const updateUserDetails = async (req,res) => {
    logger.info("Stared updating user details")
    logger.info("Completed updating user details")
    res.status(200).jsonp(successResponse("Successfully updated"));
}

const removeUser = async (req,res) => {
    logger.info("Stared removing user details")
    logger.info("Completed removing user details")
    res.status(200).jsonp(successResponse("Successfully removed user"));
}

module.exports = {
    signIn:signIn,
    signUp:signUp,
    updateUserDetails:updateUserDetails,
    removeUser:removeUser,
    userDetails:getUserDetails
}