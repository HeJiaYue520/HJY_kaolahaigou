// 切换背景图功能
var LoginBGFlog1Index = 0
var LoginBGFlog2Index = 0
var clickFlog = 0
$('.checkBGSpan').on('click', function () {
  clickFlog ++
  LoginBGFlog1Index = LoginBGFlog2Index
  LoginBGFlog2Index ++
  if (LoginBGFlog2Index === $('.loginBImg').length) {
    LoginBGFlog2Index = 0
  }
  $($('.loginBImg')[LoginBGFlog1Index]).removeClass('loginBGShow')
  $($('.loginBImg')[LoginBGFlog2Index]).addClass('loginBGShow')
  // 根据索引不同，切换后登录选项页跳出的动画位置也不同
  if (LoginBGFlog2Index === 0 || LoginBGFlog2Index === 2) {
    animate($1('.loginFun'),attrObj = {
      'left': 700,
      'opacity':1
    })
  }else if (LoginBGFlog2Index === 1 || LoginBGFlog2Index === 3) {
    animate($1('.loginFun'),attrObj = {
      'left': 80,
      'opacity':1
    })
  }
  if (clickFlog === 25) {
    alert('瓜皮，再丝滑，点击也要有个度吧，一口气点20多次你也是个人才')
    clickFlog = 0
  }
  // return false
})

// 点击手机登录图标切换显示内容
var LoginTopScanLogWrapFlog = 0
$('.LoginTopScanLogWrap').on('click', function () {
  clickFlog ++
  if (LoginTopScanLogWrapFlog === 0 ) {
    $('.phoneLoginLog').css('display','none')
    $('scanLoginLog').css('display','block')
    $('.LoginCentSubmitWrap1').removeClass('showBox')
    $('.LoginCentSubmitWrap2').addClass('showBox')
  }else if (LoginTopScanLogWrapFlog === 1) {
    $('.phoneLoginLog').css('display','block')
    $('scanLoginLog').css('display','none')
    $('.LoginCentSubmitWrap2').removeClass('showBox')
    $('.LoginCentSubmitWrap1').addClass('showBox')
  }else if (LoginTopScanLogWrapFlog === 2) {
    LoginTopScanLogWrapFlog = 0
    $('.phoneLoginLog').css('display','none')
    $('scanLoginLog').css('display','block')
    $('.LoginCentSubmitWrap1').removeClass('showBox')
    $('.LoginCentSubmitWrap2').addClass('showBox')
  }
  LoginTopScanLogWrapFlog ++
  if (clickFlog === 25) {
    alert('瓜皮，再丝滑，点击也要有个度吧，一口气点20多次你也是个人才')
    clickFlog = 0
  }
})

// 登录方式的选项卡切换
$('.passwordToLoginText1').on('click', function () {
  $('.passwordToLoginText1').css('border-bottom','2px solid rgb(0, 0, 0)')
  $('.passwordToLoginText2').css('border-bottom','2px solid transparent')
  $('.passwordToLoginShow0').removeClass('showBox')
  $('.passwordToLoginShow1').removeClass('showBox')
  $('.passwordToLoginShow0').addClass('showBox')
})
$('.passwordToLoginText2').on('click', function () {
  $('.passwordToLoginText1').css('border-bottom','2px solid transparent')
  $('.passwordToLoginText2').css('border-bottom','2px solid rgb(0, 0, 0)')
  $('.passwordToLoginShow0').removeClass('showBox')
  $('.passwordToLoginShow1').removeClass('showBox')
  $('.passwordToLoginShow1').addClass('showBox')
})

// input获取\失去焦点设置样式
$('.p_userWrap input').on({
  focus:function () { 
    $(this).css('border','2px solid #38ffff')
  },
  blur:function () { 
    $(this).css('border','2px solid transparent')
  }
})

// 点击登录判断输入值的是否正确
$('.LoginButton').on('click', function () {
  console.log($('.userNameInput').val())
  console.log($('.passWordInput').val())
  console.log($('.userPhoneNumberInput').val())
  console.log($('.passVerificationInput').val())
  
})













































// 验证码功能
$(function(){
  var show_num = [];
  draw(show_num);
  $(".gainVerification").on('click',function(){
   draw(show_num);
  })
  $(".btnLogin").on('click',function(){
   var val = $(".input-val").val().toLowerCase();
   var num = show_num.join("");
   if(val==''){
    alert('请输入验证码！');
   }else if(val == num){
    alert('提交成功！');
    $(".input-val").val('');
    // draw(show_num);
   }else{
    alert('验证码错误！请重新输入！');
    $(".input-val").val('');
    // draw(show_num);
   }
  })
 })
 //生成并渲染出验证码图形
 function draw(show_num) {
  var canvas_width=$('#canvas').width();
  var canvas_height=$('#canvas').height();
  var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
  var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
  canvas.width = canvas_width;
  canvas.height = canvas_height;
  var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
  var aCode = sCode.split(",");
  var aLength = aCode.length;//获取到数组的长度
  for (var i = 0; i < 4; i++) { //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
   var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
   // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
   var deg = Math.random() - 0.5; //产生一个随机弧度
   var txt = aCode[j];//得到随机的一个内容
   show_num[i] = txt.toLowerCase();
   var x = 10 + i * 20;//文字在canvas上的x坐标
   var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
   context.font = "bold 23px 微软雅黑";
   context.translate(x, y);
   context.rotate(deg);
   context.fillStyle = randomColor();
   context.fillText(txt, 0, 0);
   context.rotate(-deg);
   context.translate(-x, -y);
  }
  for (var i = 0; i <= 5; i++) { //验证码上显示线条
   context.strokeStyle = randomColor();
   context.beginPath();
   context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
   context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
   context.stroke();
  }
  for (var i = 0; i <= 30; i++) { //验证码上显示小点
   context.strokeStyle = randomColor();
   context.beginPath();
   var x = Math.random() * canvas_width;
   var y = Math.random() * canvas_height;
   context.moveTo(x, y);
   context.lineTo(x + 1, y + 1);
   context.stroke();
  }
 }
 //得到随机的颜色值
 function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
 }