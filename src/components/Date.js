const Date = ({date}) => {
  return (
    <div>
      <div className="row py-2">
        <div className="col">
          <p className="font-bold fs-7 my-0">{date.day}</p>
          <small className="text-muted  my-0">{date.from} - {date.to} (CAT) <br /> Join 2 other guests </small>
        </div>
        <div className="col-md-3">
          <p className="font-bold fs-7 my-0">${date.price}/ person</p>
          <button className="bg-danger form-control text-white border-0 rounded-4">Choose</button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Date
