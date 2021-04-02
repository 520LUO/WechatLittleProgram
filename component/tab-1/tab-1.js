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
      img:'../../images/人物 15.png',
      title:'人像动漫化',
      detail:'千人千面的二次元动漫形象',
      url:'../../pages/results/results?str=cute'
    },
    {img:'../../images/二维码.png',
      title:'二维码识别',
      detail:'快速识别零等待',
      url:'../../pages/results/results?str=qrcode'
    }, 
    {img:'../../images/more.png',
    title:'更多热门识别',
    detail:'正在努力整理中，敬请期待'
  }, 
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
