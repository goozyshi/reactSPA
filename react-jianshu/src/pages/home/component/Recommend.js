import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { actionCreators } from '../store';
import {
  RecommendWrapper,
  RecommendItem,
  JianApp,
  AppInfo,
} from '../style';

class Recommend extends Component{
  render(){
    return(
      <RecommendWrapper>
        { this.props.recommendList.map((item)=>{
          return(<RecommendItem img_url={item.get('recommend_pic')} key={item.get('id')} />)
          })
        }
        <JianApp 
          onMouseEnter = { () => this.props.showApp()}
          onMouseLeave = { () => this.props.hideApp()}>
          <img className='qrcode' 
            src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="qrcode"/>
          <p className = 'title' >下载简书手机App></p>
          <p className = 'desc' >随时随地发现和创作内容</p>
        </JianApp>
            <CSSTransition
              in={this.props.showappinfo}
              timeout={500}
              classNames="fade"
              unmountOnExit >
            <AppInfo>
              <img
                className = 'qrcode_big' 
                src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="big_qrcode"/>
            </AppInfo>
            </CSSTransition>
      </RecommendWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  recommendList: state.get('home').get('recommendList'),
  showappinfo: state.get('home').get('showappinfo') 
})
const mapDispatchToProps = (dispatch) => ({
    showApp(){
      dispatch(actionCreators.showQRcode(true))
    },
    hideApp(){
      dispatch(actionCreators.hideQRcode(false))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)