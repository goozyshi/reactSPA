import { fromJS } from 'immutable';
const defaultState = fromJS({
  topicList:[{
      id: 1,
      title: '手绘',
      img_url:'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
      id: 2,
      title: '@IT·互联网',
      img_url:'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
      id: 3,
      title: '读书',
      img_url:'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
      id: 4,
      title: '故事',
      img_url:'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
      id: 5,
      title: '摄影',
      img_url:'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
      id: 5,
      title: '自然科普',
      img_url:'https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
      id: 5,
      title: '旅行·在路上',
      img_url:'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    }  
  ],
  descList:[{
      id:'1',
      title:'网友们，范爷最新情况了解一下吗？',
      desc:'前段时间张馨予何婕低调成婚，从“滚出娱乐圈”到成功洗白做军嫂，那不仅仅是质的飞跃了，那直接从深渊到天堂啊！口碑是180度逆转啊！提起张馨予最出名...',
      img_url:'https://upload-images.jianshu.io/upload_images/9723150-2fbc8b8ca7aa8b7b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
      id:'2',
      title:'用Python发一个高逼格的朋友圈【附代码】',
      desc:'前阵子在网上看到这个有趣的教程，马上就来实践学习一下，并提供给有需要的朋友学习。 昨晚就敲了代码并且发了朋友圈实验了一下，用Candice女神镇...',
      img_url:'https://upload-images.jianshu.io/upload_images/7094553-748879db5bbf77fd.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
      id:'3',
      title:'给广大码农分享福利：一个业界良心的github仓库，中文计算机资料',
      desc:'我今天查资料时无意发现的，https://github.com/CyC2018/CS-Notes 这个仓库包含了下列几个维度的计算机学习资料： ...',
      img_url:'https://upload-images.jianshu.io/upload_images/2085791-0ee9013432fbc14c?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
      id:'4',
      title:'纪晓岚的长寿之道：抽烟吃肉之外还日御数女',
      desc:'纪晓岚原名纪昀，清代政治家、文学家。在野史传说中，名人的诞生常伴有异象发生，作为名人的纪晓岚，也没逃过这一“殊荣”： 1724年，纪晓岚诞生于河...',
      img_url:'https://upload-images.jianshu.io/upload_images/11026357-d57c41b7fde0922a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
      id:'5',
      title:'《延禧攻略》里一路开挂的魏璎珞，现实中没活过半集',
      desc:'出不了戏的别入戏，放不下刀的别拿刀。 ​ 人生如戏，全靠演技。今天，斗胆评评两位大咖的演技，品品做人的道理。 01 暴脾气不好惹的魏璎珞 《延禧...',
      img_url:'https://upload-images.jianshu.io/upload_images/11630728-fddca0ef7cf652f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
      id:'6',
      title:'（手机抓拍） 日落',
      desc:'有道是“塞翁失马焉知非福”，因堵车撞景了落日熔金的景色。 原本归家心切，现在改变主意，立马向西驱车，奔赴尽在咫尺的那处湖泊。 落日熔金，丹霞似火...',
      img_url:'https://upload-images.jianshu.io/upload_images/12971498-4994016caf8f7e28.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
      id:'6',
      title:'推荐几款极简小众功能强大的APP',
      desc:'话不多说，先放总览图~ 1、Via 503K！503K！！503K！下载只需 503K！ 对于极简主义这这一款真的做到了极致，没有多余的广告，首...',
      img_url:'https://upload-images.jianshu.io/upload_images/2869815-909d6c2e28e710dc.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
      id:'6',
      title:'全国人都在说程序员是屌丝？这几张图证明了我自己！',
      desc:'说起程序员，大家的印象是 各种颜色的T恤，各种格子的衬衫 毫不在意的发型 月薪3万活成月薪3千的典型案例啊！ 也是因为这样的不修边幅 程序员永远.',
      img_url:'https://upload-images.jianshu.io/upload_images/13090773-a9828cb642906790.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
  ],
});
export default ( state = defaultState , action )=>{
  switch(action.type){
    default:
    return state;
  }
}
