export interface MoviesResponse {
  id: number;
  year: string;
  title: string;
  studios: string;
  producers: string;
  winner: string;
}

export interface WinnersInSameYearResponse {
  year: string;
  winners: WinnersEntity[];
}
export interface WinnersEntity {
  id: number;
  year: string;
  title: string;
  studios: string;
  producers: string;
  winner: string;
}
