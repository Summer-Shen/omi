webpackJsonp([13],{45:function(n,t){n.exports='# omi-kbone\n\n\u4f7f\u7528 [omis](https://github.com/Tencent/omi/tree/master/packages/omis) \u591a\u7aef\u5f00\u53d1(\u5c0f\u7a0b\u5e8f\u548cWeb)\uff0c\u57fa\u4e8e [kbone](https://github.com/wechat-miniprogram/kbone) \u7684 element \u548c render\u3002\n\n## \u4e00\u5957\u8bed\u6cd5\u591a\u7aef\u8fd0\u884c\n\n```jsx\nimport { h } from \'omis\'\nimport \'./index.css\'\n\nconst Counter = (props, store) => {\n  return (\n    <div>\n      <button onClick={store.sub}>-</button>\n      <span>{store.count}</span>\n      <button onClick={store.add}>+</button>\n\n      <div onClick={store.clickHandle}>\u8df3\u8f6c</div>\n    </div>\n  )\n}\n\nCounter.store = _ => {\n  return {\n    count: 1,\n    add() {\n      this.count++\n      _.update()\n    },\n    sub() {\n      this.count--\n      _.update()\n    },\n    clickHandle() {\n      if ("undefined" != typeof wx && wx.getSystemInfoSync) {\n        wx.navigateTo({\n          url: \'../log/index?id=1\'\n        })\n      } else {\n        location.href = \'log.html\'\n      }\n    }\n  }\n}\n\nexport default Counter\n```\n\n\u6ce8\u610f\u8fd9\u91cc css \u5728\u5c0f\u7a0b\u5e8f\u548cweb\u91cc\u90fd\u662f\u5168\u5c40\u4f5c\u7528\uff0c\u5c0f\u7a0b\u5e8f\u6ca1\u6cd5\u505a\u5230 scoped style\uff0c\u5728 web \u91cc\u662f\u53ef\u4ee5\u505a\u5230 scoped\uff0c\u53ea\u9700\u8981\u8fd9\u6837\uff1a\n\n```js\nCounter.css = require(\'./_index.css\')\n```\n\n\u4f7f\u7528\u4e0b\u5212\u7ebf\u524d\u7f00\u5e76\u4e14\u8d4b\u503c\u4fbf\u53ef\u3002\n\n## \u5feb\u901f\u5f00\u59cb\n\n```js\nnpm i omi-cli -g\nomi init-kbone my-app\ncd my-app\nnpm start        //\u5f00\u53d1\u5c0f\u7a0b\u5e8f\nnpm run web      //\u5f00\u53d1 web\nnpm run build    //\u53d1\u5e03 web\n```\n\n> \u4e5f\u652f\u6301\u4e00\u6761\u547d\u4ee4 `npx omi-cli init-kbone my-app` (npm v5.2.0+)\n\n## \u76ee\u5f55\u8bf4\u660e\n\n```\n\u251c\u2500 build\n\u2502  \u251c\u2500 mp     //\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\u6307\u5411\u7684\u76ee\u5f55\uff0c\u7528\u4e8e\u751f\u4ea7\u73af\u5883\n\u2502  \u251c\u2500 web    //web \u7f16\u8bd1\u51fa\u7684\u6587\u4ef6\uff0c\u7528\u4e8e\u751f\u4ea7\u73af\u5883\n\u251c\u2500 config\n\u251c\u2500 public\n\u251c\u2500 scripts\n\u251c\u2500 src\n\u2502  \u251c\u2500 assets\n\u2502  \u251c\u2500 components    //\u5b58\u653e\u6240\u6709\u7ec4\u4ef6\n\u2502  \u251c\u2500 log.js        //\u5165\u53e3\u6587\u4ef6\uff0c\u4f1a build \u6210  log.html\n\u2502  \u2514\u2500 index.js      //\u5165\u53e3\u6587\u4ef6\uff0c\u4f1a build \u6210  index.html\n```\n\n## \u8c01\u5728\u4f7f\u7528 kbone\uff1f\n\n<table>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td><a target="_blank" href="https://developers.weixin.qq.com/community/develop/mixflow"><img width="200px"\n\t\t\t\t\t\tsrc="https://raw.githubusercontent.com/wechat-miniprogram/kbone/develop/docs/images/code1.jpg"></a></td>\n\t\t\t<td><a target="_blank" href="http://omijs.org"><img width="200px"\n\t\t\t\t\t\tsrc="https://github.com/Tencent/omi/raw/master/assets/omi-cloud.jpg"></a></td>\n\t\t\t<td width="92px"><a target="_blank" href="https://github.com/Tencent/omi/issues/new">\u544a\u8bc9\u6211\u4eec</a></td>\n\t\t\n</table>\n\n## \u6ce8\u610f\u4e8b\u9879\n\n* \u4e0d\u8981\u4f7f\u7528 bindtap\uff0c\u4f7f\u7528 onClick\n* \u56fe\u7247\u8bf7\u4f7f\u7528 cdn \u5730\u5740\u6216\u8005 base64\n* \u5982\u679c\u8981\u517c\u5bb9 web\uff0c\u8bf7\u7528 HTML \u548c CSS \u6807\u7b7e\uff0c\u6bd4\u5982\u7528 div\uff0c\u4e0d\u7528 view\uff0c\u4e0d\u7528 rpx \u5355\u4f4d\u7b49\n\n## License\n\nMIT \n'}});
//# sourceMappingURL=13.df7ed406.chunk.js.map