# 考拉项目

## 一、首页：

> 首页公约：
>
> 1. 登录注册按钮必须醒目
> 2. 所有轮播图必须符合审美
> 3. 带点的轮播图在符合审美的条件下，可以改用长方框样式的点
> 4. 部分小字样的标签，必须设置不同的默认样式
> 5. 大型板块之间必须在命名后面添加上花里胡哨的背景图片
> 6. 配色必须要花里胡哨的
> 7. 最好有个切换主题背景颜色的功能

------



### 1、头部（公共头部分）

- **头部广告栏：**

  ```tex
  1. 规定广告切换时间，在浏览器上记录广告栏的标题，每次进入浏览器切换广告内容
  2. 鼠标悬停广告，出现关闭按钮，点击可以关闭广告，点击后切换功能，变成加号，点击可以再次显示广告
  3. 下次进入，自动切换到下一广告内容
  ```

  

- **头部导航栏**：

  ```tex
  1. 导航栏选项间距中的小竖线（可调节），下拉选项旁边倒立三角形（可悬停旋转）
  2. 三级菜单布局：下拉菜单样式包括竖轴排列，横轴排列，中间部分带虚线分隔符
  3. 三级菜单样式：鼠标悬停出现运动下拉菜单（第三级菜单要规范，覆盖下面所有内容，且超出部分要隐藏并出现滚动条）
  4. 导航栏选项间距中的小竖线（可调节）
  5. 购物车放商品介绍样式
  6. 地点功能实现定位，并可以查询地图，实现点击出发事件，设置关闭功能（点击其他地方实现关闭功能）
  ```

  

- **搜索框区域：**

  搜索框样式：当可视区域往下滑动时，弹出固定的搜索框
  
  <font color =red>**这个区域必须包括：左边开始，要有考拉log，所有分类标签，搜索框，还有登入，注册，购物车功能（参考考拉购物车）**</font>
  
  ```tex
  1. 图片log：自己制作一个精美的GIF动图
  2. 所有分类标签：log图下方标签放置一个“所有分类标签”，可以展示两个二级菜单内容，里面放所有商品的分类
  3. 搜索框：（a）定义圆角；（b）放精美的字体图标；（c）设置悬停拟态风格按钮；（d）搜索框上方设置选项卡设置，将商品分为四种电商数据库（淘宝，京东，苏宁，考拉），并切换搜索下方小文字的内容，样式为导航栏样式；（e）搜索框下方大文字链接，对应不同页面的链接。悬停大连接下方出现向上运动的图标。
  4. 搜索框右侧广告空白区：放置自己喜欢的log图
  ```
  
  

### 2、banner 部分（横幅部分）

- **版心外部：**

  ```tex
  要求：
  用按钮控制切换两种样式
  背景样式1：可切换的京东背景的两侧风格
  背景样式2：可切换的考拉，苏宁大型背景图（可后续升级用Canvas制作背景随着图片颜色变化）
  ```


- **版心内部：**

  ```tex
  1.一列固定显示的二级菜单(注意这个二级菜单要很规范，内容超出部分要隐藏，并出现滚动动条)
  2.四个轮播图：
	a.一个大轮播图a，放7张图片，用渐隐渐现方式做，带点（十分优雅）
  	b.大轮播图下方一个轮播图b，用的是有滚轮的运动型轮播图不带点（带点的话不符合审美）
  	c.大轮播图a的右边放置
  	d.运动型轮播图b的右边放置一个点击切换按钮时显示3D翻转效果的轮播图（不点击或不在该轮播图上悬停时，就自动用渐隐渐现的方式替换）
  3.大体轮播图的右边：放置一个和京东板块类似的登录，资讯，选项卡切换页面。上方用一个小广告图标定位住（参考苏宁上方的广告类型）
  ```
  



### 3、classify 部分（商品大型分类展示区）

- 第一部分：京东秒杀区

- 第二部分：苏宁的福货迎新春区 （商品项目采用考拉的热门品牌样式）

- 第三部分（分两个板块，参考京东布局）：

  1. 选项卡切换板块（京东的每日特价）
  2. 换一批板块（布局参考京东，换一批商品样式自定义，换一批选项的功能参考考拉）

- 第四部分：发现好货板块（参考京东的发现好货，但是前面的log图要换成花里胡哨的颜色）

- 第五步部分（参考京东的布局）：

  ​	<font color=red>**添加一个相对美观的背景log**</font>（可以考虑自制翅膀类）

  1. 轮播图小板块（实现缩放轮播图）
  2. 中间一个大型的展示框（参考苏宁拼购，实现向上自动3秒轮播，鼠标悬停立即停止）
  3. 选项卡小版块（实现鼠标悬停切换内容，点击实现商品跳转）

- 第六部分（参考考拉原版）



### 4、guessYouLike部分（猜你喜欢部分）

1. 参考京东的为你推荐商品布局
2. 首先是一个大大的选项卡
3. 下面的商品用（UI树懒加载原理）----> 对dom 结构以及相关的异步数据，进行懒加载，节约浏览器渲染的性能



### 5、尾部（公共尾部分）

1. 必须用灰黑色背景（符合审美，配合使用精灵图效果更佳）
2. 标签必须带小图标
3. 必须居中，图标部分必须分类
4. 上下一共分成四个部分：
   - 大图标区
   - 排列区
   - 居中文本区（文本用小树线隔开）
   - 小图标文本居中区



## 二、登录注册页面

> 登录页面公约：
>
> 1. 页面背景图每次进入自动切换，且为半透明状态，背景图可以支持用户自定义添加，但是格式必须按规则来，不然图片像素显示会不美观
> 2. 登录窗口所有按钮，弹窗，必须是拟态圆角风格

------



### 1、头部设计，参考考拉登录页

```tex
1.头部使用白色背景，左边是考拉log，右边用上精灵图
2.头部必须有返回首页功能（虽然点击log能返回首页，但是用户一般不会这么做，所以还是有必要实现这一需求）
```



### 2、banner部分（中间大屏区域）

```tex
1.banner的背景：实现切换背景颜色功能（点击换一张功能，即可实现背景3D旋转切换）用户每次登入，如果之前没有勾选记住密码，就实现自动切换下一张
2.背景图实现用户自定义功能（但是用图片格式限制）
```



### 3、登录，注册窗口部分

```tex
1.登录分三种登录方式：
	----密码登录
	----短信登录（手机绑定功能）
	----
	----二维码登录
其中，密码登录，短信登录，用选项卡切换，且切换样式的下划线，要花里花哨才行
二维码登录放到右上角点击实现弹出

2.密码登录模块（实现密码再次确认功能）
	----实现账号，密码登录功能（包含确认密码和小眼睛展示掩码显示功能）支持设置头像，不然就默认设置卡通头像
	
3.短信登录模块
	----实现手机绑定功能（这个要求不是很高，大致实现当用户选择该登入方式时，输入手机号后点击获取验证码就好，点击是否记住手机号完成记录以后登入的信息状态）
	
4.二维码登录页面（不做实现功能的要求）
	----但是要放置一张二维码，内容开发者自定义
```

