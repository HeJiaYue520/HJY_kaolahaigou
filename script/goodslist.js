var warp = document.querySelector('.warp')
var mask = document.querySelector('.mask')
var count = document.querySelector('.count')
var span = $1('h2 span')

//记录商品增加的个数
let i = 0;
$('.mask').on('click', '.add', function () {
  i += 1;
  count.innerHTML = `已选<span>${i}</span>件商品，点击查询商品详情`
})

//点击请求数据获取json数据并渲染
$('.btn').click(function () {
  $(function () { // 页面加载之后调用
    $.ajax({
      //请求数据地址
      url: "../json/overseas.json",
      //请求数据方式
      type: 'get',
      //请求数据格式
      dateType: 'json',
      async: true,
      //浏览器是否缓存数据，
      // cache:'false',
      //成功后回调(传参)
      success: function (json) {
        // 建立一个空字符串用于接收渲染数据的HTML结构
        var strHtml = ''
        // jq遍历json数据方法
        $.each(json, function (index, item) {
          strHtml += `
          <div class="template">
            <div class="img_mask">
              <img src="${item.imgSrc}" alt="">
              <p class="tex">${item.details}</p>
            </div>           
            <p class="price">${item.VipPrice}</p>
            <span class="add" goods_Id="${item.date_id}">加入购物车</span>
          </div>`
        })
        $('.mask').html(strHtml);
      }
    });
  });
})

// 先判断当前用户信息（不同用户功能还未实现）
//先将localStorage商品数据清空
localStorage.clear('goodscar')


// console.log($('.template'));
//点击新增的数据中的.add(这里用jq写未来元素),获取所点数据json下标
$('.mask').on('click', '.template span', function () {
  // 获取点击对象的id,并设置个数num属性值，还有价格属性值，图片属性值,文本内容
  // "goodscar"=>"{'goods_Id':'g1','num':'1','price':'VipPrice','tex':'details','src':'imgSrc'}"
  //获取当前点击元素当前goods_Id
  var nnow_id = $(this).attr('goods_Id')
  // console.log(nnow_id);
  // （获取当前点击的商品的所有信息并组成新的数组）
  // 所选商品价格
  var price = $(this).siblings().eq(1).text()
  // console.log(price);
  //所选商品文案
  var tex = $(this).siblings().eq(0).find('p').text()
  // console.log(tex);
  //所选商品图片
  var src = $(this).siblings().eq(0).find('img').attr('src')
  // console.log(src);
  //创建一个新的购物车数组，用于在浏览器存储数据数据
  var now_Goodscar = []
  //判断这个商品是否在新数组中存在，不存在就存数据,先判断获取后的数据有没有，在遍历判断下面的操作
  if (localStorage.getItem('goodscar')) { //判断goodscar中是否有数据，没有则返回NaN
    // 有数据则执行这里，将空数组赋值，赋的值就是goodscar中的数据（把Json字符串数据格式转换成Json对象）
    // 在数据传输流程中，JSON是以文本(即字符串)的形式传递
    // var json1 = '{ "name": "cxh", "sex": "man" }'; // JSON字符串
    // var json2 = { "name": "cxh", "sex": "man" }; //  JSON对象
    // JSON.parse() 用于将JSON字符串转换为JSON对象
    // var obj = JSON.parse(json1); // 需严格的json格式
    now_Goodscar = JSON.parse(localStorage.getItem('goodscar'))
  }
  //标记购物车中是否有该物品
  var flag = false
  //判断购物车中是否有该物品
  // 方法：
  // 1、先遍历购物车中的数据找出所有商品id，
  // 2、判断获取的商品的goods_Id是否是和数组中的goods_Id相等
  // 3、如果相等，就只需要设置并将商品的数量属性值数量加1
  // 4、并通过判断购物车是和否已经有该商品得出：
  //     ----如果没有，那就设置一个新的商品对象到新的购物车数组中
  //     ----如果有，就数量++

  // console.log(now_Goodscar);
  // console.log(now_Goodscar.goods_Id === nnow_id);
  // nnow_id num price tex src 
  // 这里判断顺序需要反向思维，因为代码的执行是从顺序执行，如果先判断的值为无，那么循环
  $.each(now_Goodscar, function (index, item) {
    // 判断是否有：如果有   
    if (item.goods_Id === nnow_id) {
      item.num++
      flag = true
    }
  })
  //如果没有
  if (!flag) {
    // 放一个新的商品对象信息：
    // 1、名字属性：用上面的nnow_id接收
    // 2、新建上面列举的属性属性值
    // "goodscar"=>"{'goods_Id':'当前点击的商品名','num':'第一次点击后的默认值：1','price':'VipPrice','tex':'details','src':'imgSrc'}"
    now_Goodscar.push({
      "goods_Id": nnow_id,
      "num": 1,
      "VipPrice": price,
      "details": tex,
      "imgSrc": src
    })
  }
  // 将新数组更新到本地存储
  localStorage.setItem('goodscar', JSON.stringify(now_Goodscar))
  alert('加入购物车成功！')
})