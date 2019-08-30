// Affiche la liste des matchs si aucun match n'est selectionné 

import React, { useState } from 'react'
import AddMatch from './AddMatch'
import MatchListItem from './MatchListItem'

const renderMatchsList = (matchs, bot, theme, setSelected, connected) => {
  // matchs = new Array(20).fill({matchName: 'test', players: new Array(16).fill('PEPPY')})
  if (matchs.length > 0) return (
    <React.Fragment>
      <AddMatch bot={bot} theme={theme} connected={connected} />
      {matchs.map(match => <MatchListItem match={match} theme={theme} setSelected={setSelected} />)}
    </React.Fragment> 
  )
  return (
    <React.Fragment>
      <AddMatch bot={bot} theme={theme} connected={connected}/>
      {connected && connected !== 'connecting' ? <p>Not connected to any match</p> : <p>Please start the bot before connecting to a match</p>}
    </React.Fragment>
  )
}

const Matchs = ({ matchs, theme, bot, connected }) => {
  const [selectedMatch, setSelectedMatch] = useState(null)

  // useEffect(() => {
  //   if (selectedMatch){
  //     if (matchs.filter(match => selectedMatch.id === match.id).length === 0) setSelectedMatch(null)
  //   }
  // }, [matchs])

  return (
    <div className={'Matchs'} style={{ transition: 'background 0ms' }}>
      {selectedMatch || renderMatchsList(matchs, bot, theme, setSelectedMatch, connected)}
    </div>
  )
};

export default Matchs;