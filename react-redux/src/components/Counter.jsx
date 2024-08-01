import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount} from "../state/counter/counterSlice.js";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(10))}>Increment By Amount</button>
                <button onClick={() => dispatch(increment())}>Increment</button>
            </div>

        </div>
    )
}

export default Counter;



// useSelector() - we can access Redux data in React app -> You can access by store given reducer name
// useDispatch() - we can access Featured Customer Slice functions
