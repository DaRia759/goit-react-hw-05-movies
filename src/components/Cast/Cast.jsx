import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'components/api/MoviesAPI';
import './Cast.css'; 

const Cast = () => {
  const { movieId } = useParams();
  const [imageCredits, setImageCredits] = useState({});

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        await getMovieCast(movieId)
          .then(response => response.json())
          .then(response => setImageCredits(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  const creditsMarkup =
    imageCredits.cast &&
    imageCredits.cast.map(person => (
      <div key={person.id} className="cast-card">
        <img
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVm-NOFWAwzSDCG2503S24gnb6ij0l6Qz1URGonjsEqkf6fmGza-C7SW9iuHQaJj_7sA&usqp=CAU'
          }
          alt={person.name + 'photo'}
        />
        <p>{person.name}</p>
        <p>Character: {person.character}</p>
      </div>
    ));

  return (
    <div className="cast-container">
      <h2>Credits:</h2>
      {creditsMarkup}
    </div>
  );
};

export default Cast;
