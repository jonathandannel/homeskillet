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
  allCityRestaurants: ReadonlyArray<any> | [];
  searchFilter: string;
  searchFilterType: FilterType | null;
}

export interface Action {
  type: string;
  value: any;
}

export enum FilterType {
  Name,
  Address,
  Area
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
