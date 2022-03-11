# 购物街
## 项目使用准备工作
- 将`/apis/config.js`这个文件中的`baseURL`改为老师的项目地址。
- 将`project.config.json`这个文件中的`appid`改为自己的`appid`。
## 项目成果图
![11.png](https://s2.loli.net/2022/03/11/alWTAt8SDGjMQrV.png)
![22.png](https://s2.loli.net/2022/03/11/pWseG2lY8L7QJck.png)
![44.png](https://s2.loli.net/2022/03/11/xzIJFXVNHfbOKkS.png)
![55.png](https://s2.loli.net/2022/03/11/hf7DMcRU5PJOtve.png)
![33.png](https://s2.loli.net/2022/03/11/KE2Iul74VYRyQw6.png)
![66.png](https://s2.loli.net/2022/03/11/DKxLdNSCPmMr7gH.png)
![77.png](https://s2.loli.net/2022/03/11/zJvNVdSq79Hybmu.png)
## 项目学习地址
[2019年7月最新小程序开发教程](https://www.bilibili.com/video/BV1Kt411V7rg?p=1)
## 项目特点
- 在首页和分类页的商品展示中使用了瀑布流布局。
## Bug
- 购物车中的数据是存在缓存`Storage`中的，若购物车中的总数据大小超过单个`key`允许存储的最大数据长度`1MB`，则会出现一些奇怪的现象。
## 一些尚待改正的问题
- 只做了`iPhone 6`机型的适配，未做其他机型的适配。
- 在商品详情页中，对于用户评论的时间戳没有进行处理。
- 对于`/components/cs-waterfall`这个组件，每当父组件传入新的`prop`数据时，该组件会清空之前的数据，然后再重新根据新的数据进行布局。该问题会导致在首页中一直下滑查看商品时，额外消耗部分性能。
## 声明
**该项目仅做学习交流！**