// 首先引入Mock
const Mock = require("mockjs");
/**
 * @name: 测试数据
 * @author: zl
 * @date: 2022/8/02 09:49
 * @description: index
 */
Mock.mock("/list", "post", {
  code: 10000,
  data: {
    ["totalCount"]: 33,
    [`list|10`]: [
      {
        ordinaryFieldId: "@guid",
        userOrdinaryField1: "@cname", //昵称
        "userOrdinaryField2|1": [0, 1], //是否禁用 0否 1是
        userOrdinaryField3: 0, //SDKID
        userOrdinaryField4: "@name", //账号
        userOrdinaryField5: "@natural", //手机
        userOrdinaryField6: "@email", //邮箱
        "userOrdinaryField7|1": ["0086", "0062", "0063"], //国家
        userOrdinaryField8: "@guid", //自定义登录账号
        userOrdinaryField9: "@guid", //用户标签
        "userOrdinaryField10|1": [0, 1, 2], //性别 0保密 1男 2女
        "userOrdinaryField11|1": [10, 21, 33], //组织机构Id
        "userOrdinaryField12|1": ["北信源", "南京", "西安"], //组织机构
        userOrdinaryField13: "@guid", //员工级别
        userOrdinaryField14: "@guid", //应用角色
        "userOrdinaryField15|1-10": 1, //显示顺序
      },
    ],
  },
});
