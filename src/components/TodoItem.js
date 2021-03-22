import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete} from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const CheckCricle = styled.div `
    width:1.5em;
    height:1.5em;
    border-radius:1em;
    border:1px solid #ced4da;
    font-size:1.5em;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor:pointer;
    ${props => props.done && css`
        border:1px solid #4263eb;
        background-color:#4263eb;
        color:#fff;
    `}
`;
const Text = styled.div `
    flex:1;
    font-size: 1.3em;
    color: #495057;
    ${props => props.done && css `
        color:#ced4da;
    `}
`;

const Remove = styled.div `
    opacity:0;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#dee2e6;
    font-size:1.5em;
    cursor:pointer;
    &:hover {
        color:#d6336c;
    }
`;

const TodoItemBlock = styled.div `
    display:flex;
    align-items:center;
    padding-top:12px;
    padding-bottom:12px;
    &:hover {
        ${Remove} {
            opacity:1;
        }
    }
`;

function TodoItem ({ id, done, text}) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({
        type:'TOGGLE',
        id
    });
    const onRemove = () => dispatch({
        type:'REMOVE',
        id
    }); 
    return (
        <TodoItemBlock>
            <CheckCricle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCricle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default React.memo(TodoItem);