import Computer from "./Computer"
import Group from "./Group"
import Person from "./Person"


const OnlineExp = () => {
  return (
    <div className="mt-5 border-bottom">
      <h2 className="fw-bold">Airbnb Online Experiences</h2>
      <div className="row">
        <Person />
        <Group />
        <Computer />
      </div>
    </div>
  )
}

export default OnlineExp 
