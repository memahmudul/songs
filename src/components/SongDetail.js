import React from 'react'
import {connect} from 'react-redux'

function SongDetail({song}) {
    if(!song){
        return <div>Select a song</div>
    }
  return (
    <div>
    <h3>Details for:</h3>
    <p>Title:{song.title}</p>
    Duration: {song.duration}
    
    </div>
  )
}

const mapStateToProps = (state)=>{
    return { song:state.selectedSong}; 

}

export default connect(mapStateToProps)(SongDetail)