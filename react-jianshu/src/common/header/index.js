import React,{ Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import { 
  HeaderWrapper,
  Wrapper, Logo, 
  NavWrapper, 
  Nav, 
  NavItem, 
  SearchWrapper, 
  IconWrapper, 
  NavSearch, 
  Addition, 
  Button  
} from './style';

class Header extends Component{
  render(){
    return(
      <div>
        <HeaderWrapper>
          <Wrapper>
            <Logo />
            <NavWrapper>
              <Nav>
                <NavItem className="left active">
                  <i className = "iconfont">&#xe603;</i>
                  首页
                </NavItem>
                <NavItem className="left">
                  <i className = "iconfont">&#xe601;</i>
                  下载App
                </NavItem>
                <NavItem className="right login">登录</NavItem>
                <NavItem className="right">
                  <i className = "iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                  <CSSTransition
                    in={ this.props.focused }
                    timeout={200}
                    classNames="slide">
                    <NavSearch 
                      className = { this.props.focused ? 'focused':'' }
                      onFocus = {this.props.handleFocus}
                      onBlur = {this.props.handleBlur}
                    />
                  </CSSTransition>
                  <IconWrapper className={ this.props.focused ? 'focused':'' } >
                    <i className ="iconfont">&#xe602;</i>
                  </IconWrapper>
                </SearchWrapper>
              </Nav>
              <Addition>
                <Button className="reg">注册</Button>
                <Button>
                  <i className = "iconfont">&#xe600;</i>
                  写文章
                </Button>
              </Addition>
            </NavWrapper>
          </Wrapper>
        </HeaderWrapper>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return{
    focused: state.header.focused,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    handleFocus(){
      dispatch(actionCreators.searchFocus())
    },
    handleBlur(){
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);