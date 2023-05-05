import { createStore } from 'redux'

// action name constant
const inc = "increment";
const dec = "decrement";
const incrementbyAmt = "increamentByPayload";


//Store
const store = createStore(reducer);

const history = []



function reducer(state={amount:1}, action){
    if(action.type===inc){

    //    Wrong method // immutiable // state.amount = state.amount+1 
         return  {amount: state.amount+1}
    }

    if(action.type===dec){

        //    Wrong method // immutiable // state.amount = state.amount+1 
             return  {amount: state.amount-1}
        }

    if (action.type===incrementbyAmt){
        return {amount:state.amount + action.payload}
    }
    return state;
}

// Global State
// console.log(store.getState());

// Please use useSelector in place of this for access the state( Modern Approach)
store.subscribe(()=>{
    // history.push(store.getState())
    console.log(store.getState());
})

// Action Creators
const increamentByPayload = () =>{
    return {type:incrementbyAmt, payload:4}
}

const decrement = () => {
    return {type: dec}
}

const increment = () => {
    return {type: inc}
}

// This is for taking the action in last link we want to dispach when button click
setInterval(()=>{
    store.dispatch(increment())
}, 1000)


