import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import {Route} from 'react-router-dom';

class Movies extends Component {
    state = {
        movies : getMovies()
      };

    handleClick = (movie) => {
        console.log(movie);
    };

    render() { 
        const {length : movieCount} = this.state.movies;

        if(movieCount === 0 )
            return <p>No Movies</p>;

        
        return (
            <React.Fragment>
                <p>Number of movies are {movieCount}</p>
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
                        {this.state.movies.map (movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <button onClick={() => this.handleClick(movie)} className="btn btn-danger btn-sm">Show Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
 
export default Movies;