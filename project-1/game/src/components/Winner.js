const Winner=(props)=>{

    const winner =(props.winner === 'player') ?'player' :'computer';
    
    return <h4>Winner is {winner}</h4>
    
}
export default Winner;