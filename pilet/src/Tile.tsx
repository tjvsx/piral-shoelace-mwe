import * as React from "react";
import { SlButton, SlInput } from "@shoelace-style/shoelace/dist/react";
import type SlInputElement from '@shoelace-style/shoelace/dist/components/input/input';

interface TileProps {
  updateGreeting: (greeting: string) => void;
}

function Tile({updateGreeting}: TileProps) {

  return ( 
    <div className="flex justify-center items-center">
      {/* <input type="text" placeholder="Enter a greeting" />
      <button onClick={
        () => {
          updateGreeting((document.querySelector('input')).value);
        }
      }>Update Greeting</button> */}
      <SlInput 
      size='large' 
      placeholder="Set greeting…"
      type="text"
      onKeyUp={(e)=>{
        if ((e.target as SlInputElement).value.length > 0 && e.key === "Enter") {
          updateGreeting((e.target as SlInputElement).value)}
        }
      } />
      <SlButton
        size="large"
        onClick={() => {
          updateGreeting((document.querySelector('sl-input') as SlInputElement).value);
        }}
      >Update Greeting</SlButton>
    </div>
  );
}

export default Tile;