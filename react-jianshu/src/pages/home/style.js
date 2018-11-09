
import styled from 'styled-components';
export const HomeWrapper = styled.div`
  display: flex;
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;
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
export const LoadMore = styled.div`
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  color: #fff;
  font-size: 17px;
  line-height: 20px;
  background: #a5a5a5;
  border-radius: 50px;
  cursor: pointer;
`

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  margin-left: 40px;
  padding: 30px 0 0;
`
/**
 * Recommend
 */
export const RecommendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 5px;
  background: #072;
  background:url(${(props)=>props.img_url});
  background-size: contain;
`
export const JianApp = styled.div`
  overflow: hidden;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background: #fff;
  padding: 10px 22px;
  margin-bottom: 30px;
  cursor: pointer;
  .qrcode{
    display: block;
    float: left;
    width: 60px;
    height: 60px;
  }
  .title{
  margin-top:15px;
    color: #333;
    font-size: 15px;
  }
  .desc{
    margin-top: 4px;
    color: #999;
    font-size: 13px;
  }
`
export const AppInfo = styled.div`
  display: flex;
  align-self: center;
  position: absolute;
  top: 185px;
  background: #fff;
  width: 170px;
  height: 170px;
  border: 1px solid #666;
  border-radius: 6px;
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity .5s ease-in;
  }
  &.fade-exit {
    opacity: 1;
    transition: all .5s ease-out ;
  }
  &.fade-exit-active {
    opacity: 0;
  }
  .qrcode_big{
    display: block;
    height: 150px;
    width:150px;
    margin:10px;
  }
`
/**
 * Writer
 */
export const WriterWrapper = styled.div`
  overflow: hidden;
`
export const WriterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #969696;
  font-size: 14px;
  margin: 25px 0;
`
export const WriterItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width：280px;
  margin-top: 15px;
  .writer-icon{
    display: block;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
  .writer-name{
    color: #333;
    font-size: 14px;
  }
  .desc{
    margin-top: 12px;
    color: #969696;
    font-size: 12px;
  }
  .follow{
    align-self: flex-start;
    color:#42c02e;
    padding: 10px;
    font-size: 15px;
    font-weight: 400;
  }
`
export const WriterFooter = styled.div`
  margin-top: 30px;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align: center;
  padding: 10px 0;
  color: #787878;
  cursor: pointer;
`
export const BackToTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  height: 60px;
  width: 60px;
  border: 1px solid #dcdcdc;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  .iconfont{
    font-size: 17px;
    font-weight: bold;
    color: #333;
  }
`