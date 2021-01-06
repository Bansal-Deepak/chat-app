class NotFoundError extends Error {
  constructor() {
    this.message = "Not Found Error";
    this.status = 404;
  }
}
module.exports = {
  NotFoundError,
};
