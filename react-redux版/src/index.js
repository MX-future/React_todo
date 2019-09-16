import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider }  from 'react-redux';
import store from './store/index';

//Provider将store提供给了它内部的所有组件
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

