exports.default = (err) => {
  const { message, extensions } = err;

  if (
    /^P\d{4}/.test(err.extensions.exception.code)
    || /photon/gim.test(err.message)
    || /P\d{4}/gim.test(err.message)
  ) {
    const updatedError = { ...err };

    if (/^P\d{4}/.test(err.extensions.exception.code) && /P\d{4}/gim.test(err.message)) {
      const code = message.match(/P\d{4}/)[0];
      const fromIndex = message.indexOf(code || extensions.exception.code) + 7;
      const toIndex = message.indexOf('    at');
      updatedError.message = message.slice(fromIndex);
    }

    if (err.message.split('\n').length === 5) {
      updatedError.message = err.message.split('\n')[4];
    }

    updatedError.message = updatedError.message
      .replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')
      .replace(/\n/g, '');

    if (updatedError.extensions && updatedError.extensions.exception) {
      updatedError.extensions.exception.stacktrace = [];
    }

    return updatedError;
  }

  err.extensions.exception.stacktrace = [];

  return err;
};
