
import styled from 'styled-components';
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  float: left;
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
export const TopicWrapper = styled.div`
  overflow: hidden;
  width: 625px;
  height:104px;
  margin-bottom: 40px;
  line-height: 24px;
  background: #fff;
  padding: 30px 0 0;
`
export const TopicItem = styled.div`
  float: left;
  overflow: hidden;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  margin: 0 18px 18px 0;
  padding: 30px 0 0;
  line-height: 32px;
`
export const HomeRight = styled.div`
  float: right;
  width: 280px;
  margin-left: 40px;
  padding: 30px 0 0;
`