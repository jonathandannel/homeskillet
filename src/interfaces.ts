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
  allCityRestaurants: ReadonlyArray<Restaurant> | [];
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
  city: string;
  address: string;
}
