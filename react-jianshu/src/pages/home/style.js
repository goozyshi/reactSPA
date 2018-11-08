
import styled from 'styled-components';
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  padding-top: 30px;
  width: 640px;
  borderRadius:'5px',
  .iconfont{
    color: #fff;
    font-weight: 700;
    font-size: 22px;
    text-shadow: 0 1px 2px rgba(0,0,0,.6);
  }
`
export const Banner = styled.img`
  borderRadius:'5px',
`
export const Button = styled.button`
  background-color: rgba(0,0,0,.4);
  height: 50px;
  width: 40px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0,0,0,.6);
  border: none;
  outline:none;
  &.left{
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px; 
  }
  &.right{
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`
/**
 * Topic
 */
export const TopicWrapper = styled.div`
  overflow: hidden;
  float: left;
  margin-top:20px;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  overflow: hidden;
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin: 0 18px 18px 0;
  .topic-pic{
    display: block;
    float: left;
    height:32px;
    width: 32px;
    margin-right: 10px;
  }
`
export const TopicText = styled.a.attrs({
  href:'https://www.jianshu.com/recommendations/collections?utm_medium=index-collections&utm_source=desktop'
})`;
  float: left;
  font-size: 14px;
  line-height: 32px;  
  color: #787878;
  text-decoration-line: none;
`
/**
 * List
 */
export const ListItem = styled.div`
  overflow: hidden;
  float: left;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic{
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    margin-left:10px;
  }
`
export const ListInfo = styled.div`
  overflow: hidden;
  float: left;
  width: 500px;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin: 0 0 6px 0;
  }
  .desc{
    line-height: 18px;
    font-size: 13px;
    color: #999;
    margin: 0 0 8px ;
  }
`
export const HomeRight = styled.div`
  display: block;
  float: right;
  width: 280px;
  margin-left: 40px;
  padding: 30px 0 0;
`