import React from 'react'
import {connect} from 'react-redux'
import {selectSong} from "../actions"

function SongList(props) {
    
    const renderedList = props.songs.map((song,index)=>{
        return (
            <div className='item' key={index}>
            <div className="right floated content">
            <button className='ui button primary' onClick={()=>props.selectSong(song)}>
                Select
            </button>

            </div>
            <div className="content">{song.title}</div>

            </div>
        );
    })
  return (
    <div className='ui divided list'>{renderedList}</div>
   
  )
}

const mapStateToProps = (state)=>{
    return { songs:state.songs}; 

}

export default connect(mapStateToProps,{selectSong: selectSong})(SongList)