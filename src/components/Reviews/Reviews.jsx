import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/api/MoviesAPI';
import './Reviews.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        const data = await response.json();
        setMovieReviews(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  const reviewsMarkup = movieReviews.length > 0 ? (
    movieReviews.map(review => (
      <div key={review.id} className="review-item">
        <span>Author: {review.author}</span>
        <p>Review: {review.content}</p>
        <p>{review.created_at}</p>
      </div>
    ))
  ) : (
    <p>Sorry, no reviews for this movie</p>
  );

  return (
    <div className="reviews-container">
      <h3>Reviews:</h3>
      {reviewsMarkup}
    </div>
  );
};

export default Reviews;
