import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 

import {
  LoginWrapper,
  LoginBox,
  Input,
  Button,
} from './style';
import { actionCreators } from '../../common/header/store';
class Login extends PureComponent{
  render(){
    const { loginStatus } = this.props;
    if( loginStatus ){
      return <Redirect to='/' />
    }else{
      return <LoginWrapper>
      <LoginBox>
        <Input className = 'user' placeholder='手机号或邮箱' ref={(input)=> {this.account = input }}/>
        <Input className = 'password' placeholder='密码' type = 'password' ref={(input)=> {this.password = input}}/>
        <Button onClick = {()=>this.props.loginJS( this.account, this.password) }>登录</Button>
      </LoginBox>
    </LoginWrapper>
    }
  }
}

const mapStateToProps = (state) =>({
  loginStatus: state.getIn([ 'header', 'logined'])
})
const mapDispatchToProps = (dispatch) =>({
  loginJS( accountElem, passwordElem){
    console.log(accountElem.value, passwordElem.value)
    dispatch(actionCreators.Login())
  }
})
export default connect( mapStateToProps, mapDispatchToProps)(Login)