
import { useState } from 'react';
import './Counter.css';

export default function Counter(){
    var [Value,setCounterValue]=useState(0);
    //
    function plus(){
        setCounterValue(++Value);

    }
    function minus(){
      setCounterValue(--Value);

    }
    return (
        <div id="body">
           <div className="Counter_container">Counter</div>
           <div id="jhansi">
           <div className="minus" onClick={()=>minus()}>-</div>   
           <div id="number">{Value}</div>
           <div className="plus" onClick={()=>plus()}>+</div>
           </div>
        </div>
       
    );
}