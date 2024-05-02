import type { Movie } from "./Movie";

export interface DetailMovie extends Movie {
  rating: string;
  runtime: string;
  genres: Array<String>;
  description: string;
  directedBy: string;
  writtenBy: Array<String>;
  era: string;
  trailer: string;
}
