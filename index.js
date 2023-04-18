import { createStore } from 'redux'

//Store
const store = createStore(reducer);

const history = []

function reducer(state={amount:1}, action){
    if(action.type=="increment"){

    //    Wrong method // immutiable // state.amount = state.amount+1 
         return  {amount: state.amount+1}
    }
    return state;
}

// Global State
// console.log(store.getState());

store.subscribe(()=>{
    history.push(store.getState())
    console.log(history);
})


// This is for taking the action in last link we want to dispach when button click
setInterval(()=>{
    store.dispatch({type:"increment"})
}, 1000)


