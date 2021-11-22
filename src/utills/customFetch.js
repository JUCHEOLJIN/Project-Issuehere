const customFetch = (url, callback) => {
  fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3_json',
    },
  })
    .then(res => res.json())
    .then(res => callback(res));
};

export default customFetch;
