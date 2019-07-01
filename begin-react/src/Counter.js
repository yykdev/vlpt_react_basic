import React, { useState } from 'react';

function Counter() {

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

// useState(기본값) 를 사용하여 바뀌는 값을 관리 할 수 있다.
// useState 에 전달 되는 인자 값은 기본 값으로 설정 된다.

export default Counter;