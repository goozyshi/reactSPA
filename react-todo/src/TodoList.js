import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/store';
import { connect } from 'react-redux';

 class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();
  }
  render(){
    return(
      <div style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
        <div>
          <Input 
            value = {this.props.inputvalue}
            style={{width:300,}}
            placeholder="Basic usage"
            onChange={ this.props.handleChange }  
          />
          <Button 
            type="primary"
            onClick={ this.props.handleClick }>添加</Button>
        </div>
        <List
          style={{width:364,marginTop:15,}}
          bordered
          dataSource={this.props.data}
          renderItem={(item,index)=> (<List.Item onClick={()=>this.props.deleteItem(index) }>{item}</List.Item>)}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inputvalue: state.inputvalue,
    data:state.data,
  }
}
// 将store.dispatch挂载到props
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e){
      const action = {
        type:'change-value',
        value:e.target.value
      }
      dispatch(action)
    },

    handleClick(){
      const action ={
        type:'click',
      }
      dispatch(action)
    },
    deleteItem(index){
      const action ={
        type:'delete',
        index
      }
      dispatch(action)
    }
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(TodoList);