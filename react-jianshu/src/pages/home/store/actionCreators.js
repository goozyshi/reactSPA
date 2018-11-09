import * as actionTypes from './constants';

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLETOPSHOW,
  show
})
export const showQRcode = (show) => ({
  type: actionTypes.SHOWQRCODE,
  show
})
export const hideQRcode = (show) => ({
  type: actionTypes.HIDEQRCODE,
  show
})