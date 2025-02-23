import React, {useState} from "react";
import { use } from "react";

const App = () =>  {
    const array =useState(0);
    const counter = array[0];
    comsole.log(array);
    return(
        <div>
        <h1>counter: {counter}</h1>
        <button><Increase></Increase></button>
        </div>
    );
};
export default App;
