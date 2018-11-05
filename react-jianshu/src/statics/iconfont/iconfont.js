import { createGlobalStyle } from 'styled-components';
export const IconfontGlobalstyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1541410736576'); /* IE9*/
    src: url('./iconfont.eot?t=1541410736576#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1541410736576') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1541410736576#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`


