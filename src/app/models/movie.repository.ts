import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'Film 1',
        description: 'Film 1 Description',
        imageUrl: '1.jpg',
      },
      {
        id: 2,
        title: 'Film 2',
        description: 'Film 2 Description',
        imageUrl: '2.jpg',
      },
      {
        id: 3,
        title: 'Film 3',
        description: 'Film 3 Description',
        imageUrl: '3.jpg',
      },
      {
        id: 4,
        title: 'Film 4',
        description: 'Film 4 Description',
        imageUrl: '4.jpg',
      },
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }
  // Return a Movie or Undefined
  getMovieById(id: number): Movie | undefined {
    return this.movies.find((m) => m.id == id);
  }
}
