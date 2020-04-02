export const queryAllCities = (): Promise<ReadonlyArray<string>> => {
  return fetch("https://opentable.herokuapp.com/api/cities").then(r => {
    if (r.status === 200) {
      return r.json().then(({ cities }) => cities);
    } else {
      return false;
    }
  });
};

export const queryRestaurantsByCity = (city: string): Promise<any> => {
  return fetch(
    `https://opentable.herokuapp.com/api/restaurants?city=${city}`
  ).then(r => {
    if (r.status === 200) {
      return r.json().then(results => results);
    } else {
      return false;
    }
  });
};
