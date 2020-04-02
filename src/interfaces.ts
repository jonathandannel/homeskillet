export interface Action {
  type: string;
  value: any;
}

export interface AppState {
  dummy: boolean | null;
  loading: boolean;
  selectedCity: string | null;
  allCities: ReadonlyArray<string> | null;
}

export interface ResultState {
  dummy: boolean | null;
  resultCount: number;
  allRestaurants: ReadonlyArray<Restaurant> | null;
}

export interface RootState {
  app: AppState;
  results: ResultState;
}

export interface Restaurant {
  city: string;
  address: string;
}
