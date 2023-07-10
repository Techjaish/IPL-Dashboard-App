// Write your code here
import './index.css'

const TeamDetail = props => {
  const {eachItemArray} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = eachItemArray
  const style = matchStatus === 'lose' ? 'lose' : 'won'

  return (
    <li className="item-container">
      <img src={competingTeamLogo} className="team-logo" alt="team" />
      <h1 className="team">{competingTeam}</h1>
      <p className="team-data">{result}</p>
      <div>
        <button className={`${style} status-button`} type="button">
          {matchStatus}
        </button>
      </div>
    </li>
  )
}

const MatchCard = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  const NewFormatedArray = latestMatchDetails.map(eachItem => ({
    id: eachItem.id,
    competingTeam: eachItem.competing_team,
    competingTeamLogo: eachItem.competing_team_logo,
    date: eachItem.date,
    firstInnings: eachItem.first_innings,
    manOfTheMatch: eachItem.man_of_the_match,
    matchStatus: eachItem.match_status,
    result: eachItem.result,
    secondInnings: eachItem.second_innings,
    umpires: eachItem.umpires,
    venue: eachItem.venue,
  }))

  return (
    <ul className="list-container">
      {NewFormatedArray.map(eachItemArray => (
        <TeamDetail eachItemArray={eachItemArray} key={NewFormatedArray.id} />
      ))}
    </ul>
  )
}
export default MatchCard
