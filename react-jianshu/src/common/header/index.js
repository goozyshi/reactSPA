import React,{ Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import { 
  HeaderWrapper,
  Wrapper, Logo, 
  NavWrapper, 
  Nav, 
  NavItem, 
  SearchWrapper, 
  NavSearch, 
  IconWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem, 
  Addition, 
  Button  
} from './style';

class Header extends Component{
  getSearchInfo=()=>{
    const { list, focused, mouseIn, page, totalpage, handleMouseEnter, handleMouseLeave, switchPage } = this.props;
    const newList = list.toJS();
    const pageList = [];

    for( let i = (page - 1)*10; i < page * 10; i++){
      pageList.push(
        <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
      )
    }
    if( focused || mouseIn ){
      return(
        <SearchInfo 
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <SearchInfoSwitch onClick={()=>{switchPage(page,totalpage)}}>
            <i className ="iconfont">&#xe851;</i>
            换一批
          </SearchInfoSwitch>
          <SearchInfoTitle>热门搜索</SearchInfoTitle>
          <SearchInfoList>
          { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }
  render(){
    const { focused, list, handleFocus, handleBlur, logined } = this.props;
    return(
      <div>
        <HeaderWrapper>
          <Wrapper>
            <Link to='/'>
              <Logo />
            </Link>
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
                { logined ?
                  <Link to = '/'>
                    <NavItem className="right login">退出</NavItem>
                  </Link>
                  :
                  <Link to = '/login'>
                    <NavItem className="right login">登录</NavItem>
                  </Link>
                }
                <NavItem className="right">
                  <i className = "iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                <div>
                    <CSSTransition
                      in={focused}
                      timeout={200}
                      classNames="slide">
                      <NavSearch 
                        className = { focused ? 'focused':'' }
                        onFocus = {()=>handleFocus(list)}
                        onBlur = {handleBlur}
                      />
                    </CSSTransition>
                    <IconWrapper className={ focused ? 'focused':'' } >
                      <i className ="iconfont">&#xe602;</i>
                    </IconWrapper>
                  </div>
                  { this.getSearchInfo() }
                </SearchWrapper>
              </Nav>
              <Addition>
                { logined && <Button className="reg">注册</Button> }
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
    focused: state.getIn(['header','focused']),//获取header下的focused
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    totalpage: state.getIn(['header','totalpage']),
    logined: state.getIn([ 'header', 'logined'])
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    handleFocus(list){
      (!list.size) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    switchPage(page, totalpage){
      if(page<totalpage){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);