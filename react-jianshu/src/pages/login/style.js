import styled from 'styled-components';
export const LoginWrapper = styled.div`
  position: absolute;
  top: 56px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
` 
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  background: #fff;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
` 
export const Input = styled.input`
  width: 300px;
  height: 40px;
  line-height: 30px;
  margin 0 auto;
  outline: none;
  color: #777;
  border: 1px solid #c8c8c8;
  padding: 4px 12px 4px 35px;
  &.user{
    border-radius: 4px 4px 0 0; 
  }
  &.password{
    border-radius: 0 0 4px 4px
  }
  &::placeholder{
    color:#999;
  }
`
export const Button = styled.div`
  display: block;
  width: 220px;
  height: 25px;
  line-height: 25px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  background: #3194d0;
  border-radius: 25px;
  padding: 9px 18px;
  margin-top: 20px;
`