const all_actions=(choice,r=0,c=0)=>{
    
    switch(choice){
        case 1:
            console.log(choice+"is the choice")
            return{
                type:"MOVE",
                payload: [r,c]
                };break
        case 0:
            const blank_tile=[r-1,c-1]
            const matrix=[]
            for(let i=0;i<r;i++)
            {
                matrix.push([])
                for(let j=0;j<c;j++)
                {
                    matrix[i].push(i*c+(j+1))
                }
            }
            return{
                type:"INITIALISE",
                payload:{
                    blank_tile:blank_tile,
                    matrix:matrix
                }
            };break
        case 2:
            return {
                type:"TILE_CLICKED",
                payload:[r,c]
            };break
        default:
            return{
                type:"MOVE",
                payload: [r,c]
                }
    }
}


export default all_actions