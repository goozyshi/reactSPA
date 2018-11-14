import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackToTop,
} from './style';

import ReactSlider from './component/ReactSlider';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';

class Home extends PureComponent{
  handleBackTop = () =>{
    window.scrollTo(0, 0)  
  }
  componentDidMount() {
    this.bindEvents();
  }
  bindEvents(){
    window.addEventListener('scroll', this.props.changeScroll)
  }
  
  render(){
    return(
      <HomeWrapper>
        <HomeLeft>
          <ReactSlider/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        { this.props.showScroll && (
          <BackToTop onClick={()=>{this.handleBackTop()}}><i className = 'iconfont'>&#xe62e;</i></BackToTop>)}
      </HomeWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeScroll(e){
      (document.documentElement.scrollTop > 100)?
      dispatch( actionCreators.toggleTopShow(true) )
      :
      dispatch( actionCreators.toggleTopShow(false) )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)