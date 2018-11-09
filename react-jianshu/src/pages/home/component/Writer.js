import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterHeader,
  WriterItem,
  WriterFooter,
} from '../style';
class Writer extends Component{
  render(){
    return(
      <WriterWrapper>
        <WriterHeader>
          <span>推荐作者</span>
          <span><i className ="iconfont">&#xe851;</i>换一批</span>
        </WriterHeader>
        { this.props.writerList.map((item)=>{
          return(
            <WriterItem key={item.get('id')}>
              <img 
                className = 'writer-icon'
                src={item.get('avatar')} 
                alt="icon"/>
                <div>
                  <p className = 'writer-name'>{item.get('name')}</p>
                  <p className = 'desc'>{item.get('desc')}</p>
                </div>
                <p className = 'follow'>+关注</p>
            </WriterItem>
          )
        })}
        <WriterFooter>
          查看全部 >
        </WriterFooter>
      </WriterWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  writerList: state.get('home').get('writerList')
})
export default connect(mapStateToProps, null)(Writer)