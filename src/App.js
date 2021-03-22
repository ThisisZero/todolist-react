import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Warning from './components/Warning';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext'

const GlobalStyle = createGlobalStyle`
  body {
    background:#e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <Header />
      <GlobalStyle />
      <Warning />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
