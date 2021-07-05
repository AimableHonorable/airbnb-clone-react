const Review = ({review}) => {
  return (
    <div className="col">
      <div className="d-flex mb-2">
        <div className="rounded-circle profile-size overflow-hidden">
          <img src={review.image_url} className="fit" alt="profile" />
        </div>
        <div className="d-block p-2">
          <h6 className="fw-bold mb-0 pb-0">{review.name}</h6>
          <small className="mt-0 pt-0 text-muted">{review.date}</small>
        </div>
        
      </div>
      <div>
          <p>{review.content}</p>
        </div>
    </div>
  )
}

export default Review
