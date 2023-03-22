import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'Film 1',
        description: 'Film 1 Description',
        imageUrl: '1.jpeg',
        datePublished: new Date(2023, 10, 10),
      },
      {
        id: 2,
        title: 'Film 2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima provident minus expedita id? Cum obcaecati tempore cumque eligendi accusantium? Laboriosam aut quod, eum sapiente saepe illo laudantium reiciendis voluptate molestias ipsam aperiam consequatur porro consectetur nisi dignissimos voluptatum dolorum recusandae quasi ratione! Tempora fuga nam id assumenda laborum earum commodi!',
        imageUrl: '2.jpeg',
        datePublished: new Date(2023, 10, 10),
      },
      {
        id: 3,
        title: 'Film 3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima provident minus expedita id? Cum obcaecati tempore cumque eligendi accusantium? Laboriosam aut quod, eum sapiente saepe illo laudantium reiciendis voluptate molestias ipsam aperiam consequatur porro consectetur nisi dignissimos voluptatum dolorum recusandae quasi ratione! Tempora fuga nam id assumenda laborum earum commodi!',
        imageUrl: '3.jpeg',
        datePublished: new Date(2023, 10, 10),
      },
      {
        id: 4,
        title: 'Film 4',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima provident minus expedita id? Cum obcaecati tempore cumque eligendi accusantium? Laboriosam aut quod, eum sapiente saepe illo laudantium reiciendis voluptate molestias ipsam aperiam consequatur porro consectetur nisi dignissimos voluptatum dolorum recusandae quasi ratione! Tempora fuga nam id assumenda laborum earum commodi!',
        imageUrl: '4.jpeg',
        datePublished: new Date(2023, 10, 10),
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
