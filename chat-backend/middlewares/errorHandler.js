const { NotFoundError } = require("../errors/NotFoundError");
function errorHandler(err, req, res, next) {
  if (err instanceof NotFoundError) {
    return res.status(err.status).send({
      errors: [
        {
          message: err.message,
        },
      ],
    });
  }
  return res.status(500).send({
    errors: [{ message: "Something went wrong" }],
  });
}
module.exports = {
  errorHandler,
};
