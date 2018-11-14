import React, {  PureComponent } from 'react';
import { connect } from 'react-redux';

import { 
  TopicWrapper,
  TopicItem,
  TopicText
} from '../style';
class Topic extends  PureComponent{
  render(){
    return(
      <TopicWrapper>
        { this.props.list.map((item) => {
            return(
              <TopicItem key={item.get('id')}>
                <img className = 'topic-pic'
                  src={item.get('img_url')} 
                  alt='topic-pic'
                  />
                { item.get('title') }
              </TopicItem>
            )
          })
        }
        <TopicText>
          更多热门专题>
        </TopicText>
      </TopicWrapper>
    )
  }
}
const mapStateToProps= (state) => ({
    list: state.get('home').get('topicList')
})

export default connect(mapStateToProps, null)(Topic);