export class User {
  constructor(
    id: number = 0,
    login: string = '',
    avatar_url: string = '',
  ) {}
}

export class SearchResults<T> {
  items: T[];
  total_count: number;
  incomplete_results: boolean;
}
