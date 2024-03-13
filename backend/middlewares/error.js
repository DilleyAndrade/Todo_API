import ErrorHandler from "../util/errorHandler.js";

export default (err, req, res, next) => {
  const error = {
    statusCode: err.statusCode || 500,
    message: err.message || "Internal server error"
  }

  if(process.env.NODE_ENV === "DEVELOPMENT"){
    res.status(error.statusCode).json({
      message: error.message,
      error: err,
      stack: err.stack
    })
  }

  if(process.env.NODE_ENV === "PRODUCTION"){
    res.status(error.statusCode).json({
      message: error.message,
    })
  }
}