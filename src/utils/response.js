function respondSuccess(logger, res, responseData) {
  logger.info('Sending success response');
  const { status = 200, message = '', data = {} } = responseData;
  return res.status(status).send({ message, data });
}

function respondError(logger, res, responseData) {
  logger.info('Sending error response');

  const { status = 500, message = 'Server error', data = {} } = responseData;
  const errorToSend = status !== 500 ? message : 'Server error';

  logger.error(message);
  return res.status(status).send({ message: errorToSend, data });
}

module.exports = {
  respondError,
  respondSuccess,
};
