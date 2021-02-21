// 1、数据渲染
// 获取数据
// "goods_Id": nnow_id,
// "num": 1,
// "VipPrice": price,
// "details": tex,
// "imgSrc": src
var now_Goodscar = JSON.parse(localStorage.getItem('goodscar')) 
console.log(now_Goodscar);
$(function () { //页面加载之后调用
  var strhtml = ''
  var strhtml1 = ''
  var sum_new = 0;
  var s = 0 //记录默认获取的选中的商品
  // jq遍历json数据方法
  $.each(now_Goodscar, function (index, item) {
    console.log(item.imgSrc);
    s += item.num
    // 列表数据渲染
    //处理价格前面的￥符号
    var pri = item.VipPrice.replace('￥','')
    //计算页面中某个商品的总价且结果保留两位小数
    var subtotal_new = ((pri) * (item.num)).toFixed(2)
    strhtml += `
    <li class="good_massage">
      <input type="checkbox" class="checks Shoopinginput" checked>
      <div class="img_mask">
      <img src="${item.imgSrc}" alt="" class="shoppingImg">
      </div>
      <p class="goodscar_tex">${item.details}</p>
      <p class="goodscar_price">${item.VipPrice}</p>
      <p class="calculate">
        <span class="minus">-</span>
        <span class="goods_number">${item.num}</span>
        <span class="add">+</span>
      </p>
      <p class="sum">￥${subtotal_new}</p>
      <button value="" class="del">删除</button>
    </li>`
    //foot部分数据渲染
    //总价的计算()保留两位小数
    sum_new += (pri)*(item.num)
    strhtml1 = `
    <div class="foot">
      <p>全选：<input type="checkbox" class="lastAll Shoopinginput" checked></p>
      <p><button class="btn_del">删除选中商品</button></p>
      <p>已选中<span class="goods_numb">${s}</span>件商品</p>
      <p>总价格:<span class="goods_numb">￥${sum_new.toFixed(2)}</span>元</p>
      <p><button class="btn_sum">结算选中商品</button></p>
    </div>
    `
  })
  $('.lis_ul').html(strhtml);
  $('.foot_wrap').html(strhtml1);

  // 点击第一个全选
  $('.firstAll').click(function () {
    var s1All = 0
    var sumAll = 0    
    // 判断此时第一全选状态
    if($(this).is(':checked')){
      $('.checks').prop('checked',true)
      $('.lastAll').prop('checked',true)
      $.each($('.goods_number'), function (index, item) {
        var pri = $('.goods_number').parent().parent()[index].children[5].innerText.replace('￥','')
        var djzonghe = parseInt($('.goods_number')[index].innerText) * pri
        sumAll += djzonghe
        s1All += parseInt($('.goods_number')[index].innerText)
        $('.foot_wrap p')[2].innerHTML = `
        已选中<span class="goods_numb">${s1All}</span>件商品`
        $('.foot_wrap p')[3].innerHTML = `
        总价格:<span class="goods_numb">￥${sumAll.toFixed(2)}</span>元`        
      });
    }else{
      $('.checks').prop('checked',false)
      $('.lastAll').prop('checked',false)
      $.each($('.goods_number'), function (index, item) { 
        $('.foot_wrap p')[2].innerHTML = `
        <span class="goods_numb">请选择商品</span>`
        $('.foot_wrap p')[3].innerHTML = `
        总价格:<span class="goods_numb">￥0.00</span>元`         
      });
    }
  })

  // 点击最后一个全选
  $('.lastAll').click(function () {
    var s1All = 0
    var sumAll = 0     
    // 判断最后一个全选状态
    if($(this).is(':checked')){
      $('.checks').prop('checked',true)
      $('.firstAll').prop('checked',true)
      $.each($('.goods_number'), function (index, item) { 
        var pri = $('.goods_number').parent().parent()[index].children[5].innerText.replace('￥','')
        var djzonghe = parseInt($('.goods_number')[index].innerText) * pri
        sumAll += djzonghe
        s1All += parseInt($('.goods_number')[index].innerText)
        $('.foot_wrap p')[2].innerHTML = `
        已选中<span class="goods_numb">${s1All}</span>件商品`
        $('.foot_wrap p')[3].innerHTML = `
        总价格:<span class="goods_numb">￥${sumAll.toFixed(2)}</span>元`    
      });
    }else{
      $('.checks').prop('checked',false)
      $('.firstAll').prop('checked',false)
      $.each($('.goods_number'), function (index, item) { 
        $('.foot_wrap p')[2].innerHTML = `
        <span class="goods_numb">请选择商品</span>`
        $('.foot_wrap p')[3].innerHTML = `
        总价格:<span class="goods_numb">￥0.00</span>元`         
      }); 
    } 
  })  

  // 点击列表框（事件委托）
  $('.lis_ul').on('click','.checks',function () {
    // 循环未来元素并判断
    $.each($('.checks'), function (index, item) {
      if(!$(item).prop('checked')) {
        $('.firstAll').prop('checked',false)
        $('.lastAll').prop('checked',false)
        return false
      }
      $('.firstAll').prop('checked',true)
      $('.lastAll').prop('checked',true)
    })    
  })

  //点击列表框
  $('.lis_ul').on('click','.checks',function () {
    var s1All = 0
    var sumAll = 0
    if($(this).prop('checked')===false){
      $.each($('.goods_number'), function (index, item) {
        $('.foot_wrap p')[2].innerHTML = `
        <span class="goods_numb">请选择商品</span>`
        $('.foot_wrap p')[3].innerHTML = `
        总价格:<span class="goods_numb">￥0.00</span>元`         
      }); 
    }
    if(!$(this).prop('checked')){
      this.parentNode.children[4].children[1].innerText = 1
      $.each($('.checks'), function (index, item) { 
        if($(this).prop('checked')){
          var a = this.parentNode.children[5].innerText.replace('￥','')//价格
          var b = this.parentNode.children[4].children[1].innerText//计数
          s1All += parseInt(b)
          $('.foot_wrap p')[2].innerHTML = `
          已选中<span class="goods_numb">${s1All}</span>件商品`
          sumAll += parseInt(b)*parseInt(a)
          //控制商品总价
          $('.foot_wrap p')[3].innerHTML = `
          总价格:<span class="goods_numb">￥${sumAll.toFixed(2)}</span>元`  
        }
      })
    }else if($(this).prop('checked')){
      this.parentNode.children[4].children[1].innerText
      $.each($('.checks'), function (index, item) { 
        if($(this).prop('checked')){
          var a = this.parentNode.children[5].innerText.replace('￥','')//价格
          var b = this.parentNode.children[4].children[1].innerText//计数
          s1All += parseInt(b)
          $('.foot_wrap p')[2].innerHTML = `
          已选中<span class="goods_numb">${s1All}</span>件商品`
          sumAll += parseInt(b)*parseInt(a)
          //控制商品总价
          $('.foot_wrap p')[3].innerHTML = `
          总价格:<span class="goods_numb">￥${sumAll.toFixed(2)}</span>元`
          return 
        }
      })
    }
  });

  //点击删除，选中被删除
  // 获取选中的商品
  $('.lis_ul').on('click','.del',function(){
    $(this.parentNode).remove('li')
    var s1All = 0
    var sumAll = 0
    var a = document.querySelector('.del')
    var flog = true
    $.each($('.checks'),function (index,item){
      if(!$(this).prop('checked')){
        // 设置全选
        flog = false
        $('.firstAll').prop('checked',flog)
        $('.lastAll').prop('checked',flog)
        return
      }
      $('.firstAll').prop('checked',flog)
      $('.lastAll').prop('checked',flog)      
    })    
    if(a){
      $.each($('.checks'), function (index, item) {
        if($(this).prop('checked')){
          var a = this.parentNode.children[5].innerText.replace('￥','')//价格
          var b = this.parentNode.children[4].children[1].innerText//计数
          s1All += parseInt(b)
          $('.foot_wrap p')[2].innerHTML = `
          已选中<span class="goods_numb">${s1All}</span>件商品`
          sumAll += parseInt(b)*parseInt(a)
          //控制商品总价
          $('.foot_wrap p')[3].innerHTML = `
          总价格:<span class="goods_numb">￥${sumAll.toFixed(2)}</span>元`
          return 
        }
      })        
    }else if(a === null){
      $('.firstAll').prop('checked',false)
      $('.lastAll').prop('checked',false)
      $('.foot_wrap p')[2].innerHTML = `
      <span class="goods_numb">请选择商品</span>`
      $('.foot_wrap p')[3].innerHTML = `
      总价格:<span class="goods_numb">￥0.00</span>元` 
    }
  })

  // 点击删除全部勾选
  $('.items').on('click', '.btn_del',function () {
    var s1All = 0
    var sumAll = 0
    $.each($('.checks'), function (index,item) { 
      if($(this).prop('checked')){
        $(this).parent().remove()
        $('.firstAll').prop('checked',false)
        $('.lastAll').prop('checked',false)
        $.each($('.goods_number'), function (index, item) { 
          $('.foot_wrap p')[2].innerHTML = `
          <span class="goods_numb">请选择商品</span>`
          $('.foot_wrap p')[3].innerHTML = `
          总价格:<span class="goods_numb">￥0.00</span>元`         
        })
      }
    })   
  });

  // 点击加减号商品个数变化
  $('.lis_ul').on('click','.minus', function () {
    var s1All = 0
    var sumAll = 0
    this.parentNode.children[1].innerText--
    if(this.parentNode.children[1].innerText < 1){
      this.parentNode.children[1].innerText = 1
      alert('瓜皮！最低购买一件，不想买请选中再删除哦~')     
    }
    var a = this.parentNode.parentNode.children[3].innerText.replace('￥','')
    var b = this.parentNode.children[1].innerText
    var subtotal_new = ((a) * (b)).toFixed(2)
    this.parentNode.parentNode.children[5].innerText = '￥'+subtotal_new 
    $.each($('.goods_number'), function (index, item) { 
    if($(this.parentNode.parentNode.children[0]).prop('checked')){
      var pri = $('.goods_number').parent().parent()[index].children[5].innerText.replace('￥','')
        var djzonghe = parseInt($('.goods_number')[index].innerText) * pri
        sumAll += djzonghe
        s1All += parseInt($('.goods_number')[index].innerText)
        $('.foot_wrap p')[2].innerHTML = `
        已选中<span class="goods_numb">${s1All}</span>件商品`
        $('.foot_wrap p')[3].innerHTML = `
        总价格:<span class="goods_numb">￥${sumAll.toFixed(2)}</span>元`    
      };
    })
  })

  $('.lis_ul').on('click','.add', function () {
    var s1All = 0
    var sumAll = 0
    this.parentNode.children[1].innerText++
    if(this.parentNode.children[1].innerText > 99){
      this.parentNode.children[1].innerText = 99
      alert('瓜皮！每个商品最多买99件哦~')     
    }
    var a = this.parentNode.parentNode.children[3].innerText.replace('￥','')
    var b = this.parentNode.children[1].innerText
    var subtotal_new = ((a) * (b)).toFixed(2)
    this.parentNode.parentNode.children[5].innerText = '￥'+subtotal_new
    $.each($('.goods_number'), function (index, item) { 
        if($(this.parentNode.parentNode.children[0]).prop('checked')){
        var pri = $('.goods_number').parent().parent()[index].children[5].innerText.replace('￥','')
        var djzonghe = parseInt($('.goods_number')[index].innerText) * pri
        sumAll += djzonghe
        s1All += parseInt($('.goods_number')[index].innerText)
        $('.foot_wrap p')[2].innerHTML = `
        已选中<span class="goods_numb">${s1All}</span>件商品`
        $('.foot_wrap p')[3].innerHTML = `
        总价格:<span class="goods_numb">￥${sumAll.toFixed(2)}</span>元`    
      }   
    });
  })
})
