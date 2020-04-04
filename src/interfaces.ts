export interface RootState {
  app: AppState;
  search: SearchState;
}

export interface AppState {
  loading: boolean;
  selectedCity: string | null;
  allCities: ReadonlyArray<string> | null;
}

export interface SearchState {
  resultCount: number;
  searchFilter: string;
  searchFilterType: string | null;
  allCityRestaurants: ReadonlyArray<Restaurant> | null;
  currentQueryResults: ReadonlyArray<Restaurant> | null;
  currentQueryPages: Map<number, ReadonlyArray<Restaurant>>;
}

export interface Action {
  type: string;
  value: any;
}

export interface Restaurant {
  id: number;
  [name: string]: string | number;
  address: string;
  city: string;
  state: string;
  area: string;
  postal_code: string;
  country: string;
  phone: string;
  lat: number;
  lng: number;
  price: number;
  reserve_url: string;
  mobile_reserve_url: string;
  image_url: string;
}
