class HttpError extends Error {
  constructor(message, code) {
    super(message);
    this.status = code;
    // return this;
  }
}

module.exports = HttpError;
