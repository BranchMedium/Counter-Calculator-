//****************************** Alt-School Africa Exam******************************************************************
//                       NAME: OLUTOBI OLUSESI
//                               ID: ALT/SOE/022/5749
//                       SCHOOL: ENGINEERING
//                               TRACK: FRONT-END ENGINEERING
/** PROJECT 2
Setup a custom counter hook with increment, decrement, reset, setValue functions
with a valid UI and implement a combination of states with a useReducer that 
implements a counter with the four evident features in the custom hooks - 
increment, decrement, reset, setValue. Implement a page for the custom hook, useReducer, 404, 
and a page to test error boundary 
 */
//****************************************************************************************************************

import React, {useReducer, useRef} from 'react';
import ReactDOM  from 'react-dom';
import theStyles from './index.module.css';
import CounterHook from './counterhook';
//**************************************************************************************************************

// the counter component 
const Counter = () => {
    let theInput1 = useRef();
    let theInput2 = useRef();   
    let p = Number(0);
    let o = Number(0);
 //***********************************************************************************************************/
    
    const getPositiveValues = (event) => {
        event.preventDefault();
        return theInput1.current = Number(event.target.value);
    }
    const getNegativeValues = (event) => {
        event.preventDefault();
        return theInput2.current = Number(event.target.value);
    }
   
    const positiveCalculator = () => {
        return p += Number(theInput1.current);
    }
    const negativeCalculator = () => {
        return o -= Number(theInput2.current);
    }
    positiveCalculator();
    negativeCalculator();
    //*************************************************************************************************************
    let initialState = {
        count: "",
        set theCount1(p) {
            this.count = p;
        },
        set theCount2(o) {
            this.count = o;
        }
    };
    //***************************************************************************************************************
    const {Reducer} = CounterHook();
    const [changedCount, dispatch] = useReducer(Reducer, initialState);
    //***************************************************************************************************************
    const setTheValue = () => {
        dispatch({type: 'setValue'});
    }
    const resetTheValue = () => {
        return dispatch({type: 'reset'});
    }
    const incrementCount = () => {
        (isNaN(theInput1.current)? alert("Set the increment value"):
         dispatch({type: 'increment', theCurrentPos: initialState.theCount1 = p, thePrevPos: Number(changedCount.count)}));
    }
    const decrementCount = () => {
        (isNaN(theInput2.current)? alert('set the decrement value'):
         dispatch({type: 'decrement', theCurrentNeg: initialState.theCount2 = o, thePrevNeg: Number(changedCount.count)}));
    }
    //********************************************************************************************************************
    return (
        <div>
            <h3>After input, click the set-value to refresh your points</h3>
            <h3>Caution on the negative value of the decrement input</h3>
            <div className= {theStyles.mark}>
                <div id={theStyles.ceil} className={theStyles.row}>
                    <input id={theStyles.check} className={`${theStyles.left} ${theStyles.all}`} onClick={setTheValue} type="submit" value="set-value"/> 
                    <input className={theStyles.center} placeholder='increment' ref= {theInput1} onChange={getPositiveValues} type='number'/>
                    <input className={`${theStyles.right} ${theStyles.all}`} onClick={resetTheValue} type="submit" value="Reset"/>
                </div>
                    
                <div id={theStyles.output}>
                    <span>{changedCount.count}</span>
                </div>  
                    
                <div id={theStyles.floor} className= {theStyles.row}>
                    <input  className={`${theStyles.left} ${theStyles.all}`} onClick={incrementCount} type="submit" value="Increment"/>
                    <input className={`${theStyles.right} ${theStyles.all}`} onClick={decrementCount} type="submit" value="Decrement"/>
    
                    <input className={theStyles.center} ref= {theInput2} placeholder= 'decrement' onChange={getNegativeValues} type= 'number'/>
                </div>
            </div>
        </div>
    );
}
//**************************************************************
ReactDOM.render(<Counter/>, document.getElementById("root"))


