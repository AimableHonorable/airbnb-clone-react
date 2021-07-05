import Review from './Review';

const Reviews = ({reviews}) => {
  return (
    <div className="border-bottom">
      <h3>4.93 (6 Reviews)</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {reviews.map((review) => (
          <Review key="id" review={review} />
        ))}
      </div>
    </div>
  )
}

export default Reviews
