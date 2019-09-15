import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index'
import { getInputChange,getAddItem, getDeleteItem } from './store/actionCreators'

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        //注册监听器,当store改变时执行方法
        store.subscribe(this.handleStoreChange);
    }

  render(){
    return (
        <div style={{margin: "30px"}}>
          <Input
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              placeholder={'input content'}
              style={{width: '300px',}}
          />
          <Button
              type='primary'
              style={{marginLeft: '15px'}}
              onClick={this.handleAddClick}
          >添加</Button>
          <List
              style={{width: '300px',marginTop: '20px'}}
              size="large"
              bordered
              dataSource={this.state.list}
              renderItem={(item,index) => <List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>}
          />
        </div>
    );
  }

  handleInputChange(e){
        const action = getInputChange(e.target.value);
        store.dispatch(action);
  }

  handleStoreChange(){
        this.setState(store.getState());
  }

  //添加
  handleAddClick(){
        const action = getAddItem();
        store.dispatch(action);
  }

  //删除
  handleItemDelete(index){
        const action = getDeleteItem(index);
        store.dispatch(action);
  }

}

export default TodoList;
