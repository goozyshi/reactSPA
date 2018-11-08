import React, { Component } from 'react';
import { connect } from 'react-redux';
import{
  ListItem,
  ListInfo,
} from '../style';
class List extends Component{
  render(){
    return(
      <div>
      {
        this.props.desclist.map((item)=>{
          return(
            <ListItem key={item.get('id')}>
              <img
                className = 'list-pic'
                src={item.get('img_url')}
                alt='ss'
              />
              <ListInfo>
                <h3 className= 'title'>{item.get('title')}</h3>
                <p className= 'desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })
      }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    desclist: state.get('home').get('descList'),
})
export default connect(mapStateToProps, null)(List)
