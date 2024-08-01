import './App.css'
import Counter from "./components/Counter.jsx";

function App() {

    return (
        <>
            <h2>Learn Redux & Redux Toolkit</h2>
            <Counter/>
        </>
    )
}

export default App

// Store > Actions > Reducers

// Store - storage of counterSlices
// Actions - Tells Redux what should do to the State
// Reducers - Reducers never make direct mutation to the state in that store.
//          first take a copy of that state & change the new data & replace the new copied state with old state