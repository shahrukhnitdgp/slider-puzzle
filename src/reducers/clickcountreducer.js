const initstate={
    count:0,
    matrix:[[1,2,3,4],
            [5,6,0,7],
            [9,10,11,8],
            [13,14,15,12]
            ],
    blank_tile:[1,2],
    clicked_tile:[0,0],
    completed:false
}
const target=[[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,0]
            ]

const clickcountreducer=(state=initstate,action)=>{
    var newstate,newcount
    var newmatrix=state.matrix
    var flag=0
    var index=state.blank_tile
    var clicked_t=state.clicked_tile
    if("payload" in action)
        index=action.payload
    
    var newstatus=state.completed
    switch(action.type){
        case "MOVE":
            newcount=state.count+1;
            var pre_blank_index=state.blank_tile
            var new_blank_index=action.payload
            var flag=0

            if (Math.abs(pre_blank_index[0]-new_blank_index[0])==1&&(pre_blank_index[1]-new_blank_index[1]==0)||(Math.abs(pre_blank_index[1]-new_blank_index[1])==1)&&pre_blank_index[0]-new_blank_index[0]==0){
                
                newmatrix[pre_blank_index[0]][pre_blank_index[1]]=state.matrix[new_blank_index[0]][new_blank_index[1]]
                newmatrix[new_blank_index[0]][new_blank_index[1]]=0
               for(let i=0;i<4;i++)
               {
                   for(let j=0;j<4;j++)
                    if(newmatrix[i][j]!=target[i][j])
                        flag=1
               }
               if(flag==0)
                newstatus=true
            }
            else{
                newmatrix=state.matrix
                index=state.blank_tile
                if(newmatrix===state.matrix)
                console.log("ifcondition")
                flag=1
            }
            break
        case "RESET":
            newcount=0;break
        case "INITIALISE":
            newcount=0
            index=action.payload.blank_tile
            newmatrix=action.payload.matrix;break
        case "TILE_CLICKED":
            clicked_t=action.payload
            index=state.blank_tile
        default:
            newcount=state.count
    }
    
    newstate={
        matrix:newmatrix,
        blank_tile:index,
        count:newcount,
        clicked_tile:clicked_t,
        completed:newstatus
    }
    console.log(newstate)
    
    return newstate
}

export default clickcountreducer