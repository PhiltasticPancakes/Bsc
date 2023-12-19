import React from "react";
import { playerID } from "../PlayingBoard/BoardMovement"
import { GridPosition } from "../Board";
import { OmatiToken } from "./OmatiToken";
import { Template, TokenTemplate } from "../Editor/Editor";

export type TokenProps = {
    playerID: playerID;
}

export type TemplateTokenProps = {
    clickHandler: (template: Template) => void;
    playerID: playerID;
}

export const TemplateTokenComponent = (props: TemplateTokenProps) => {
    return (
        <div onClick={() => props.clickHandler({ type: "token", token: props.playerID })}>
            <OmatiToken playerID={props.playerID} />
        </div>
    )
}

export const TokenComponent = (props: TokenProps) => {
    return (
        <OmatiToken playerID={props.playerID} />
    )
}

/*
{ 
 game_qwdfw: '{"gameName":"qwdfw","initialBoard":{"tokens":[["0",null,null,null],[null,"1",null,null],[null,null,"0",null],[null,null,null,"1"]],"tiles":[[{"movementDescription":"rook"},{"movementDescription":"knight"},{"movementDescription":"knight"},{"movementDescription":"bishop"}],[{"movementDescription":"knight"},{"movementDescription":"rook"},{"movementDescription":"bishop"},{"movementDescription":"knight"}],[{"movementDescription":"knight"},{"movementDescription":"bishop"},{"movementDescription":"rook"},{"movementDescription":"knight"}],[{"movementDescription":"bishop"},{"movementDescription":"knight"},{"movementDescription":"knight"},{"movementDescription":"rook"}]]},"playerCount":2,"moveCount":1}',
 game_ewfwef: '{"gameName":"ewfwef","initialBoard":{"tokens":[[null,null,"1",null],["1",null,null,null],[null,null,"0",null],[null,null,"0",null]],"tiles":[["none","none","queen","none"],["rook","none","none","none"],["none","none","queen","none"],["bishop","none","bishop","none"]]},"playerCount":2,"moveCount":1}', 
 game_wefewf: '{"initialBoard":{"tokens":[["0",null,null,null,"1"],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],["1",null,null,null,"0"]],"tiles":[["rook","none","none","rook","rook"],["none","none","none","none","none"],["none","none","none","none","none"],["none","none","none","none","none"],["rook","none","none","none","rook"]]},"playerCount":2}', 
 game_wefew: '{"gameName":"wefew","initialBoard":{"tokens":[["0",null,null,"1"],[null,null,null,null],[null,null,null,null],["1",null,null,"0"]],"tiles":[[{"movementDescription":"knight"},{"movementDescription":"rook"},{"movementDescription":"rook"},{"movementDescription":"knight"}],[{"movementDescription":"rook"},{"movementDescription":"knight"},{"movementDescription":"knight"},{"movementDescription":"rook"}],[{"movementDescription":"rook"},{"movementDescription":"knight"},{"movementDescription":"knight"},{"movementDescription":"rook"}],[{"movementDescription":"knight"},{"movementDescription":"rook"},{"movementDescription":"rook"},{"movementDescription":"knight"}]]},"playerCount":2,"moveCount":1}', length: 4 }
*/
