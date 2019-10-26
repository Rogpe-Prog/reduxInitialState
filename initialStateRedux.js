const { createStore } = require('redux')

const initialState = {
    name: 'James Dean',
    account: 2345671,
    balance: 100
}

const reducer = (state = initialState, action)=> {
    const newState = { ...state }

    switch(action.type){
        case 'WITHDRAW':
           newState.balance += 10
           return newState
        case 'DEPOSIT':
           newState.balance -= 10
        default:
            return newState
    }
}

const store = createStore(reducer)

store.subscribe(()=> console.log(JSON.stringify(store.getState())))

store.dispatch({ type: 'WITHDRAW'})