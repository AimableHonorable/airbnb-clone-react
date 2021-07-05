
const Collection = ({collection}) => {
  return (
    <div className="card text-white position-relative mx-2 rounded-5 overflow-hidden">
      <img src={collection.url} className="card-img" alt="...collection" />
      <div className="card-img-overlay">
        <small>Collection</small>
        <h5 className="card-title">{collection.caption}</h5>
        <div className="position-absolute bottom-0 start-0 p-3">
          <button className="btn-outline border-0 py-2 px-3">Show all</button>
        </div>
      </div>
    </div>
  )
}

export default Collection
