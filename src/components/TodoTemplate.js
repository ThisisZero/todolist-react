import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width:95vw;
    max-width:512px;
    height:143vw;
    max-height: 768px;

    position:relative;
    background:white;
    border-radius:16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

    margin:0 auto;
    top:50%;
    transform:rotateY(-50%);

    display:flex;
    flex-direction:column;
`;

function TodoTemplate ({ children }) {
    return (
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
    );
}

export default TodoTemplate;