import React from 'react';
import { getMovies } from '../services/fakeMovieService';

export default class Movies extends React.Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (id) => {
    const movies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies });
  }

  render() {
    const count = this.state.movies.length;
    return (
      <section className="Movies">
        {count < 1
          ? <p>There are no movies in the database</p>
          : (
            <React.Fragment>
              <p>Showing {count} movies in the database.</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.movies.map((movie) => (
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <button className="btn btn-danger btn-sm"
                          onClick={() => this.handleDelete(movie._id)}
                        >Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </React.Fragment>
          )
        }
      </section>
    );
  };
}
