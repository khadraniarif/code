export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const REQUEST_DEVICES = 'REQUEST_DEVICES';
export const RECEIVE_DEVICES = 'RECEIVE_DEVICES';
export const FILTER_DEVICES = 'FILTER_DEVICES';

export const getCountry = country => ({
  type: SELECT_COUNTRY,
  country,
});

export const requestPosts = () => ({
  type: REQUEST_DEVICES,
});

export const receivedPosts = json => ({
  type: RECEIVE_DEVICES,
  json: json.devices,
});

export const filterDevices = country => ({
	type: FILTER_DEVICES,
	country
})

export function fetchDevices(country) {
  return function (dispatch) {
    dispatch(requestPosts());
    return fetch(`http://localhost:3004/${country}-devices`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedPosts(json));
      },
    );
  };
}

export function filterDevicesCountryWise(country, os) {
  return function (dispatch) {
    dispatch(requestPosts());
    return fetch(`http://localhost:3004/${country}-devices`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedPosts(json));
      },
    );
  };
}