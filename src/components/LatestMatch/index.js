// Write your code here
import './index.css'

const LatestMatch = props => {
  const {teamDetails} = props
  const formatDetails = {
    id: teamDetails.id,
    competingTeam: teamDetails.competing_team,
    competingTeamLogo: teamDetails.competing_team_logo,
    date: teamDetails.date,
    firstInnings: teamDetails.first_innings,
    manOfTheMatch: teamDetails.man_of_the_match,
    matchStatus: teamDetails.match_status,
    result: teamDetails.result,
    secondInnings: teamDetails.second_innings,
    umpires: teamDetails.umpires,
    venue: teamDetails.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    secondInnings,
    umpires,
    venue,
  } = formatDetails
  return (
    <div className="team-detail-container">
      <div className="container">
        <h1 className="team">{competingTeam}</h1>
        <p className="team-data">{date}</p>
        <p className="team-data">{venue}</p>
        <p className="team-data">{umpires}</p>
      </div>
      <img src={competingTeamLogo} className="competing-team" alt="team logo" />
      <div className="container">
        <p className="team-data">{firstInnings}</p>
        <p className="team-data">{secondInnings}</p>
        <p className="team-data">{matchStatus}</p>
        <p className="team-data">{manOfTheMatch}</p>
      </div>
    </div>
  )
}
export default LatestMatch
