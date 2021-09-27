function delayedFetch(url, sec = 0, attr = undefined) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      fetch(url, attr).then(resolve, reject);
    }, sec * 1000);
  });
}

const putId = async (id = 1) => {
  console.log(`id`, id);
  const results = await delayedFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    1,
    {
      method: "PUT",
      body: { id: id },
    }
  );
  return results.json();
};

const getFake = async () => {
  const results = await delayedFetch("http://guuuuugle.com", 0);

  return results.json();
};

const getPeople = async ({ queryKey }) => {
  // console.log(`greeting`, queryKey[1]);
  // console.log(`page`, queryKey[2]);
  const page = queryKey[2];
  const results = await delayedFetch(
    `https://swapi.dev/api/people/${page ? `?page=${queryKey[2]}` : ""}`,

    1
  );

  return results.json();
};
const getAllPlanets = async () => {
  const results = await delayedFetch("https://swapi.dev/api/planets/", 1);

  return results.json();
};

const api = {
  getPlanets: getAllPlanets,
  getFake,
  getPeople,
  putId,
};
export default api;
