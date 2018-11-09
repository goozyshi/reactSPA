import React,{ Component } from 'react';
import {
  Button,
} from '../style';
import Carousel from 'nuka-carousel';
const img1 = 'https://upload.jianshu.io/admin_banners/web_images/4555/a34dbe6f8ac889163dd7980c18885554ba7939e5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540';
const img2 = 'http://upload.jianshu.io/admin_banners/web_images/4529/d8d780d8dd4a32485655815c2cb4e367b61cb15c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540';
const img3 = 'http://upload.jianshu.io/admin_banners/web_images/4554/4a8e7a7c6f7767a8000859070b50902b9fae90d1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540';
const img4 = 'http://upload.jianshu.io/admin_banners/web_images/4535/c4ef5054e0e08459ba8d548c035a1306e97820a9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540';
const img5 = 'http://upload.jianshu.io/admin_banners/web_images/4514/a9212731b77ad524cb832c35d314348ec0b66235.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540';
const img6 = 'http://upload.jianshu.io/admin_banners/web_images/4539/814816838070065013af51fac80e6a03e453a660.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540';
const img7 = 'http://upload.jianshu.io/admin_banners/web_images/4552/9e5c3eaefe05d6314315f466344c2e540a2f4d97.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540';
const img8 = 'http://upload.jianshu.io/admin_banners/web_images/4537/e4fc8843fabbf17e6f5660eea8ce0661b00b3089.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540';
const props_setting = {
  dots:false,
  autoplay: true,
  autoGenerateStyleTag: true,
  wrapAround: true,
}


class ReactSlider extends Component {
  LeftControl = ({previousSlide}) =>{
    return(
      <Button onClick={previousSlide} className='left'>
        <i className = "iconfont">&#xe732;</i>
      </Button>
    )
  }
  RightControl = ({nextSlide}) =>{
    return(
      <Button onClick={nextSlide} className='right'>
        <i className = "iconfont">&#xe731;</i>
      </Button>
    )
  }
  render(){
    return(
      <div>
        <Carousel {...props_setting}
          renderCenterLeftControls={({ previousSlide }) => this.LeftControl({ previousSlide })}   
          renderCenterRightControls={({ nextSlide }) => this.RightControl({ nextSlide })}
        >
        <img src={img1} alt='img1' style={{borderRadius:'5px'}} />
        <img src={img2} alt='img2' style={{borderRadius:'5px'}} />
        <img src={img3} alt='img3' style={{borderRadius:'5px'}} />
        <img src={img4} alt='img4' style={{borderRadius:'5px'}} />
        <img src={img5} alt='img5' style={{borderRadius:'5px'}} />
        <img src={img6} alt='img6' style={{borderRadius:'5px'}} />
        <img src={img7} alt='img7' style={{borderRadius:'5px'}} />
        <img src={img8} alt='img8' style={{borderRadius:'5px'}} />
      </Carousel>
      </div>
    )
  }
}
export default ReactSlider;