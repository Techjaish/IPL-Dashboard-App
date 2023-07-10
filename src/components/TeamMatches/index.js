// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: {}, isLoader: true}

  componentDidMount() {
    this.getTeams()
    console.log('componentDidMount')
  }

  getTeams = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const formatTeam = {
      id,
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamDetails: formatTeam, isLoader: false})
  }

  render() {
    const {teamDetails, isLoader} = this.state
    const {latestMatchDetails, recentMatches, id} = teamDetails
    console.log(this.state)
    console.log(teamDetails)
    const Element = isLoader ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#000000" height={50} width={50} />
      </div>
    ) : (
      <div className="team-match">
        <img
          src={teamDetails.teamBannerUrl}
          className="banner-style"
          alt="banner"
        />
        <LatestMatch teamDetails={latestMatchDetails} />
        <ul>
          <MatchCard latestMatchDetails={recentMatches} key={id} />
        </ul>
      </div>
    )

    return <>{Element}</>
  }
}

export default TeamMatches
