import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
  display:flex;
  justify-content:center;
  height:57px;
  border-bottom:1px solid #f0f0f0;
`
export const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  width:1440px;
  height:57 px;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  display:block;
  float:left;
  height:56px;
  width:100px;
  background:url(${logoPic});
  background-size: contain;
`
export const NavWrapper = styled.div`
  display:flex;
`
export const Nav = styled.div`
  dispaly:flex;
  width:945px;
  height:58 px;
`
export const NavItem = styled.div`
  height:58 px;
  font-size:22px;
  line-height:26px;
  padding:15px;
  color:#333;
  &.left {
    float:left;
    font-size:17px;
  }
  &.right {
    float:right;
    line-height:20px;
    padding:17px 10px 17px 15px;
    font-size:15px;
    color:#969696;
  }
  &.login{
    padding:6px 12px;
    margin:11px 6px 0 10px;
    font-weight:400px;
  }
  &.active {
    color:#ea6f5a;
  }
  .iconfont{
    font-size:20px;
    margin-right:5px;
  }
`
export const SearchWrapper = styled.div`
  display:flex;
  align-items:center;
  .iconfont{
    font-size:20px;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width:240px;
  }
  &.slide-exit {
    transition: all .2s ease-in;
  }
  &.slide-exit-active {
    width:180px;
  }
  box-sizing:border-box;
  width:180px;
  height:38px;
  padding:0 40px 0 20px;
  margin:10px 0 0 15px   ;
  outline:none;
  font-size:14px;
  border:1px solid #eee;
  border-radius:40px;
  color:#333;
  background:#eee;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
`
export const IconWrapper = styled.div`
  display:flex;
  position:relative;
  justify-content:center;
  align-items:center;
  box-sizing:border-box;
  top:5px;
  right:40px;
  width:30px;
  height:30px;
  border-radius:15px;
  &.focused{
    background:#969696;
    color:#fff;
  }
`
export const Addition = styled.div`
  display:flex;
  justify-content:space-between;
`
export const Button = styled.div`
  height:40px;
  width:100px;
  background: #ea6f5a;
  color:#fff;
  padding:6px 12px;
  line-height:24px;
  text-align:center;
  font-size:15px;
  margin:9px 5px 0 15px;
  border:1px solid #ea6f5a;
  border-radius:20px;
  box-sizing:border-box;
  &.reg{
    height: 40px;
    width: 80px;
    background: #fff;
    color: #ea6f5a;
  }
  .iconfont{
    font-size:20px;
  }
`