export default function getError(error) {
  const statusCode = error.response.status;
  const errorData = error.response.data;
  if (statusCode >= 500) {
    return 'Server not responding';
  } else if (statusCode >= 400 && errorData) {
    const errorMessage = getErrorMessage(
      errorData.errorCode,
      errorData.message
    );
    return errorMessage;
  } else {
    return 'An unexpected error occurred, please contact our support team.';
  }
}

export function getErrorMessage(errorCode, errorMessage) {
  if (errorCode === '0002-AnyErrorFromServer') {
    return 'The error is any Error';
  } else if (errorCode === '0003-AnyOtherErrorFromServer') {
    return 'The error is any Other Error';
  } else {
    return errorMessage;
  }
}
