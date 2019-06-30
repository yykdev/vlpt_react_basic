import React from 'react'; // react를 사용 하겠다!!

// 컴포넌트 명은 카멜 케이스로 
function Hello({name, color, isSpecial}) {
    return (
        <div style={{
            color
        }}>
            {isSpecial && <b>*</b>}
            {isSpecial? '스페셜!!! ':'낫스페셜... '}
            안녕하세요. {name}
        </div>
    )
}

// 특정 조건에서만 출력하고자 하는 경우 and 연산자 ( && ) 사용하는 것이 좋다.
// {isSpecial && <b>*</b>}

// 조건의 결과 값에 따라 출력 결과가 다를 경우 삼항연산자를 사용하는게 낫다.
// {isSpecial? '스페셜!!! ':'낫스페셜... '}

// 컴포넌트명.defaultProps : 특정 키의 값이 없을 경우 사용할 기본 값 설정
Hello.defaultProps = {
    name: '이름없음'
}
// Hello 컴포넌트를 사용 할 수 있도록 내보내 주겠다.
export default Hello;