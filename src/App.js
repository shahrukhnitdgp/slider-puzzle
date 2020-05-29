import React from 'react';
import './App.css';
import Row from './Row';
import { connect, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import action from "./actions"
import 'react-bulma-components/dist/react-bulma-components.min.css';

import {Tag} from 'react-bulma-components'

function App() {
  const clickcount=useSelector(state=> state.count)
  const status=useSelector(state=>state.completed)
  var rows=[]
  const size=4
  const dispatch=useDispatch()
  // dispatch(action(0,4,5))
  for(let i=0;i<size;i++)
  {
    rows.push(<Row id={i} cols={4}/>)
    console.log(i+"is the i")
  }
  
  const incomplete_comp=(
    <div className="align-contents">
      
    <img style={{border:"solid 10px orange"}} src="molang_target.jpg" />
    <div>
    <Tag color="dark" rounded size="large">
      CLICK COUNTS
    </Tag>
    <Tag size="large" color="dark" rounded >
      {clickcount}
    </Tag>
    </div>
    <table style={{backgroundColor:"orange"}}>
      {rows}
    </table>
    
    </div>
  )  

  const completed_comp=(
    <div className="completed_comp">
      <div className="animated zoomInDown font-adjuster">
      CONGRATULATIONS!<br/>
      </div>
      <div>
      NO OF MOVES:
      </div>
      <Tag size="large">
      {clickcount}
      </Tag>
    </div>
  )

  console.log("hi")
  return (
    <body style={{display:"block",overflow:"auto",width:"100vw",backgroundColor:"Dodgerblue"}}>
     {(status===false)?incomplete_comp:completed_comp}
    

    </body>
  );
}

export default connect()(App);
