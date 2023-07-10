// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {listTeams: [], isLoader: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    console.log(response)
    const teamData = await response.json()
    console.log(teamData)
    const {teams} = teamData
    const formatedTeam = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({listTeams: formatedTeam, isLoader: false})
  }

  render() {
    const {listTeams, isLoader} = this.state
    console.log(listTeams)
    const Element = isLoader ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#000000" height={50} width={50} />
      </div>
    ) : (
      <>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo"
            alt="ipl logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="list-container">
          {listTeams.map(eachTeam => (
            <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </>
    )
    return <div className="main-container">{Element}</div>
  }
}
export default Home
