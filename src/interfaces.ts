export interface RootState {
  app: AppState;
  search: SearchState;
}

export interface AppState {
  loading: boolean;
  selectedCity: string | null;
  allCities: ReadonlyArray<string> | [];
}

export interface SearchState {
  resultCount: number;
  searchFilter: string;
  searchFilterType: string | null;
  allCityRestaurants: any[] | [];
  currentQueryResults: any[] | [];
  currentQueryPages: Map<number, ReadonlyArray<any>>;
}

export interface Action {
  type: string;
  value: any;
}

export interface Restaurant {
  id: number;
  name: string;
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
