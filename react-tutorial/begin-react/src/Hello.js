import React from 'react'; // react를 사용 하겠다!!

// 컴포넌트 명은 카멜 케이스로 
function Hello({name, color}) {
    return <div style={{
        color
    }}>안녕하세요. {name}</div>
}

// 컴포넌트명.defaultProps : 특정 키의 값이 없을 경우 사용할 기본 값 설정
Hello.defaultProps = {
    name: '이름없음'
}
// Hello 컴포넌트를 사용 할 수 있도록 내보내 주겠다.
export default Hello;