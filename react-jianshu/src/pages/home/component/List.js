import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import{
  ListItem,
  ListInfo,
  LoadMore,
} from '../style';
class List extends PureComponent {
  render(){
    return(
      <div>
      { this.props.desclist.map((item)=>{
          return(
            <Link key={item.get('id')} to={'/detail/'+ item.get('id')}>
              <ListItem >
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
            </Link>
          )
        })
      }
      <LoadMore>阅读更多</LoadMore>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    desclist: state.get('home').get('descList'),
})
export default connect(mapStateToProps, null)(List)
