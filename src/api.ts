import { Restaurant } from "./interfaces";

export const queryAllCities = (): Promise<ReadonlyArray<string>> => {
  return fetch("https://opentable.herokuapp.com/api/cities").then(r => {
    if (r.status === 200) {
      return r.json().then(({ cities }) => cities);
    } else {
      return false;
    }
  });
};

export const queryRestaurantsByCity = (
  city: string,
  page: number
): Promise<any> => {
  return fetch(
    `https://opentable.herokuapp.com/api/restaurants?city=${city}&page=${page}&per_page=100`
  ).then(r => {
    if (r.status === 200) {
      return r.json().then(results => results);
    } else {
      return false;
    }
  });
};

export const getAllRestaurants = async (
  c: string
): Promise<ReadonlyArray<Restaurant>> => {
  const allRestaurants: Array<Restaurant> = [];
  let page = 1;
  let totalRestaurants = 0;

  await queryRestaurantsByCity(c, page).then(r => {
    totalRestaurants = r.total_entries;
    allRestaurants.push(...r.restaurants);
    page += 1;
  });

  while (allRestaurants.length < totalRestaurants) {
    await queryRestaurantsByCity(c, page).then(r => {
      allRestaurants.push(...r.restaurants);
      page += 1;
    });
  }

  return allRestaurants;
};
