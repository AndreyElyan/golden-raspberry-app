export interface MoviesResponse {
  id: number;
  year: string;
  title: string;
  studios: string;
  producers: string;
  winner: string;
  urlImage?: string;
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
  urlImage?: string;
}

export interface MostSuccessfulStudios {
  studio: string;
  numberOfVictories: number;
  winners?: StudiosWinnersEntity[];
}
export interface StudiosWinnersEntity {
  title: string;
  year: string;
  producers?: string[];
}
