import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding-top:48px;
    padding-left:32px;
    padding-right:32px;
    padding-bottom:24px;
    border-bottom:1px solid #e9ecef;
    h1 {
        margin:0;
        font-size:2.2em;
        color:#343a40;
    }

    .day {
        margin-top: 4px;
        color:#868e96;
        font-size:1.3em;
    }

    .tasks-left {
        color:#4263eb;
        font-size:1.125em;
        margin-top:40px;
        font-weight:bold;
    }
`;

function TodoHead ({ children }) {
    return (
        <TodoHeadBlock>
            <h1>2021년 3월 19일</h1>
            <div className="day">일요일</div>
            <div className="tasks-left">앞으로 남은 할 일 2개</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;