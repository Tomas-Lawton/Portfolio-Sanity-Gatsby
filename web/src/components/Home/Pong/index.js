import React, { useState } from "react";
import { SectionRight, RightContent } from "../Styles";
import Canvas from "./Canvas"
import { MinimalText } from "../../../styles/GlobalStyles"

function Pong() {
    const [ player1, setPlayer1 ] = useState(0);
    const [ player2, setPlayer2 ] = useState(0);

    const updateScore = (players) => {
        setPlayer1(players[0].score)
        setPlayer2(players[1].score)
    }

    return (
    <SectionRight> 
         <RightContent>
             <Canvas updateScore={updateScore} />
         </RightContent>
         <div style={{display: "flex", justifyContent:"space-between"}}>    
       
        <MinimalText setMargin="0" width="30px">{player1}</MinimalText>
         <MinimalText setMargin="0"  width="30px">{player2}</MinimalText>
      
         </div> 
      </SectionRight>
    );
}

export default Pong;