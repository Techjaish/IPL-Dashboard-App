// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`} className="team-item-link">
      <li className="item-container">
        <img src={teamImageUrl} className="team-img" alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
