const APPLICATION_CONSTANTS = require('../constants/ApplicationConstants');

const getSuccessResponse = (data = null) => {
    let response={}
    if(data !== null){
        response[APPLICATION_CONSTANTS.STATUS] = APPLICATION_CONSTANTS.SUCCESS;
        response[APPLICATION_CONSTANTS.DATA] = data;
        response[APPLICATION_CONSTANTS.ERRORS] = {};
        return response;
    } else {
        response[APPLICATION_CONSTANTS.STATUS] = APPLICATION_CONSTANTS.SUCCESS;
        response[APPLICATION_CONSTANTS.ERRORS] = {}
        return response;
    }
}

const getErrorResponse = (error) => {
    let response = {};
    let errorObj = {};
    errorObj[APPLICATION_CONSTANTS.MESSAGE] = error;
    response[APPLICATION_CONSTANTS.STATUS] = APPLICATION_CONSTANTS.FAIL;
    response[APPLICATION_CONSTANTS.DATA] = {};
    response[APPLICATION_CONSTANTS.ERRORS] = errorObj;
    return response;
}

module.exports = {
    successResponse:getSuccessResponse,
    errorResponse:getErrorResponse
}