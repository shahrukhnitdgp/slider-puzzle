import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import move_tile from './actions'
import 'react-bulma-components/dist/react-bulma-components.min.css';

import {Button} from 'react-bulma-components'
import imager from "./imager"
import "./animate.css"
import { useState } from 'react';
import "./Tile.css"

function Tiles (props){
    // const [clicked,setClick]=useState(false)

    // setClick(false)
    var row,col;
    row=props.row
    col=props.col
    console.log(row+","+col+" rendered")
    const dispatch=useDispatch()
    const matrix=useSelector(state=>state.matrix)
    const blank_tile_index=useSelector(state=>state.blank_tile)
    // console.log(blank_tile_index)
    const style_desc={
        
        backgroundColor:"red",
        borderRadius:20,
        color:"white",
        fontSize:30,
        margin:5,
        cursor:"pointer",
        }
    
    var imgsource=imager[matrix[row][col]-1]

    var pre_blank_index=blank_tile_index
    var new_blank_index=[row,col]
    var animation_class=" "
    var flag=0
    if (Math.abs(pre_blank_index[0]-new_blank_index[0])==1&&(pre_blank_index[1]-new_blank_index[1]==0)||(Math.abs(pre_blank_index[1]-new_blank_index[1])==1)&&pre_blank_index[0]-new_blank_index[0]==0){
                
         flag=1
    }
    var flag2=0
    const last_clicked_tile=useSelector(state=>state.clicked_tile)
    if(last_clicked_tile[0]===row && last_clicked_tile[1]===col)
       {    console.log("rerendered")
            flag2=1
            animation_class="animated tada"
       }
    if(row===blank_tile_index[0] && col===blank_tile_index[1]){
        style_desc.backgroundColor="orange"
        return (
            <div className="tile-size" style={style_desc}>
                
            </div>
            // <img src={imgsource} />
        )
        }
        
    return(
        <div>
            <div  style={style_desc} className={flag2?animation_class+" tile-size":"tile-size"} onClick={()=>{
                
                if(flag===1){
                dispatch(move_tile(1,row,col))
                console.log("valid move" +row+","+col)
            }
            dispatch(move_tile(2,row,col))
            }}  >
            {/* {matrix[row][col]} */}
            <img  src={imgsource} />
            </div>
        </div>
    )
}

export default Tiles