import NetInfo from '@react-native-community/netinfo';
const axios = require('axios');
import getErrorMessage from './ServerErrorHandler';

const BaseUrl = 'https://api.openweathermap.org/data/2.5/onecall';
const logoutUser = async () => {};

const config = async () => {
  let Token = '';
  return {
    headers: {
      Authorization: 'Bearer ' + Token,
      'Content-type': 'application/json',
    },
  };
};

const getNetwork = async () => {
  let isConnected = false;
  await NetInfo.fetch().then((state) => {
    isConnected = state.isConnected;
  });
  return isConnected;
};

export async function getAPICall(apiSubUrl) {
  const isNetworkConnected = await getNetwork();
  return new Promise(async (success, failure) => {
    if (isNetworkConnected) {
      axios
        .get(BaseUrl + apiSubUrl, await config())
        .then(function (response) {
          success(response);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            logoutUser();
          } else {
            failure({
              status: error.response.status,
              message: getErrorMessage(error),
            });
          }
        });
    } else {
      failure({
        status: errorCodes.noConnection,
        message: 'No Network Connected',
      });
    }
  });
}

export async function postAPICall(apiSubUrl, paramsJson) {
  const isNetworkConnected = await getNetwork();
  return new Promise(async (success, failure) => {
    if (isNetworkConnected) {
      axios
        .post(BaseUrl + apiSubUrl, paramsJson, await config())
        .then(function (response) {
          success(response);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            logoutUser();
          } else {
            failure({
              status: error.response.status,
              message: getErrorMessage(error),
            });
          }
        });
    } else {
      failure({
        status: errorCodes.noConnection,
        message: 'No Network Connected',
      });
    }
  });
}

export async function putAPICall(apiSubUrl, paramsJson) {
  const isNetworkConnected = await getNetwork();
  return new Promise(async (success, failure) => {
    if (isNetworkConnected) {
      axios
        .put(BaseUrl + apiSubUrl, paramsJson, await config())
        .then(function (response) {
          success(response);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            logoutUser();
          } else {
            failure({
              status: error.response.status,
              message: getErrorMessage(error),
            });
          }
        });
    } else {
      failure({
        status: errorCodes.noConnection,
        message: 'No Network Connected',
      });
    }
  });
}

export async function patchAPICall(apiSubUrl, paramsJson) {
  const isNetworkConnected = await getNetwork();
  return new Promise(async (success, failure) => {
    if (isNetworkConnected) {
      axios
        .patch(BaseUrl + apiSubUrl, paramsJson, await config())
        .then(function (response) {
          success(response);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            logoutUser();
          } else {
            failure({
              status: error.response.status,
              message: getErrorMessage(error),
            });
          }
        });
    } else {
      failure({
        status: errorCodes.noConnection,
        message: 'No Network Connected',
      });
    }
  });
}

export async function deleteAPICall(apiSubUrl) {
  const isNetworkConnected = await getNetwork();
  return new Promise(async (success, failure) => {
    if (isNetworkConnected) {
      axios
        .delete(BaseUrl + apiSubUrl, await config())
        .then(function (response) {
          success(response);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            logoutUser();
          } else {
            failure({
              status: error.response.status,
              message: getErrorMessage(error),
            });
          }
        });
    } else {
      failure({
        status: errorCodes.noConnection,
        message: 'No Network Connected',
      });
    }
  });
}
