import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />
    </Wrapper>
  );
}

// boolean 의 경우 값은 넣지 않고 이름만 셋팅 할 경우 true 로 인정 된다
// isSpecial={true} => true
// isSpecial => true

export default App;
