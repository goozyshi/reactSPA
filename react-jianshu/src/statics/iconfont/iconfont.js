import { createGlobalStyle } from 'styled-components';
export const IconfontGlobalstyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1541557285902'); /* IE9*/
    src: url('./iconfont.eot?t=1541557285902#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1541557285902') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1541557285902#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`


