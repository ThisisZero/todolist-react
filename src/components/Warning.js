import React from 'react';
import styled from 'styled-components';

const WarningTxt = styled.p `
    margin:10px auto 10px;
    text-align:center;
    font-size:1.2em;
    font-weight:bold;
    color:crimson;
`;

function Warning () {
    return (
        <WarningTxt>
            새로고침하면 내용이 사라집니다. 주의하세요
        </WarningTxt>
    );
}

export default Warning;