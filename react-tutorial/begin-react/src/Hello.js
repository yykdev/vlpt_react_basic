import React from 'react'; // react를 사용 하겠다!!

// 컴포넌트 명은 카멜 케이스로 
function Hello(props) {
    return <div style={{
        color: props.color
    }}>안녕하세요. {props.name}</div>
}

// Hello 컴포넌트를 사용 할 수 있도록 내보내 주겠다.
export default Hello;