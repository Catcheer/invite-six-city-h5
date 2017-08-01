export default {
  // 'host': 'http://api.6city.com',
  'host': 'http://192.168.1.187:9000',

  "AppKey": "78701677fa28465ca5fb624a51a9dca4",
  //从url链接中判断朋友圈||微信好友
  //先判断是否为微信环境，如果是type 1 好友 type 2 朋友圈
  'getSource': {
    type: 1, //微信好友
    type: 2 //朋友圈

  },

  // 传给后台的来源类型
  'source': {
    //    [DisplayText("微信好友")]
    WeiXinFriend: 1,

    //  [DisplayText("微信朋友圈")]
    WeiXinCircle: 2,

    //[DisplayText("手机QQ")]
    QQ: 4,

    //[DisplayText("复制链接")]
    Copy: 8
  }

}