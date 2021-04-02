// component/tab-1/tab-1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    banner:[
      {
      img:'../../images/护照.png',
      title:'护照识别',
      detail:'快速高热度识别技术',
      url:'../../pages/results/results?str=passport'
    },
    {img:'../../images/车牌.png',
      title:'车牌号识别',
      detail:'轻松复制车牌号',
      url:'../../pages/results/results?str=car'
    }, 
    {img:'../../images/more.png',
    title:'更多识别',
    detail:'正在努力适配中，敬请期待'
  }, 
    ],
  
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
