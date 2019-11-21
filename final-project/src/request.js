const url = './products.json';

export default () => new Promise((resolve, reject) => {
  fetch(url)
    .then(res => res.json())

      .then(resolve)
      .catch(reject)
});