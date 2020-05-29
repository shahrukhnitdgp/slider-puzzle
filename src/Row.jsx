import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import increment from './actions'
import Tiles from './Tiles'

function Row(props){
    const clickcount=useSelector(state=> state.count)
    const matrix=useSelector(state=> state.matrix)
    const dispatch=useDispatch()
    const i=props.id;
    const no_of_tiles=props.cols
    const no_of_cols=3
    var row=[];
    // for(let i=0;i<3;i++){
        
        var eachrow=[]
        for (let j = 0; j < no_of_tiles; j++) {
            eachrow.push(<td><Tiles col={j} row={i}/></td>)
        }
    
    return (

        <tr>
        {eachrow}
        </tr>
            )
}

export default Row