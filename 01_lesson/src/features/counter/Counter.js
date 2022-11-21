import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice';
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    // amount는 간단히 useState를 사용하여 구현
    const [incrementAmount, setIncrementAmount] = useState(0);
    // input control에서 받아온 문자열을 숫자로 바꿔줌
    // 숫자가 아니면 0을 설정
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}
export default Counter