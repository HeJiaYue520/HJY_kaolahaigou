// 加载gulp，并结构需要的方法
let {task,src,dest,watch,series,parallel} = require('gulp')
let load = require('gulp-load-plugins')()
let del = require('del')//删除文件
// 编译sass
// let sass = require('gulp-sass')
// sass.compiler = require('node-sass')

// 删除dist目录
task('delDist',async () => {
  await del('./dist')
})


/**
 * gulp-connect: 实现页面自动刷新
*/
// 处理html
task('html',async () => {
  src('./views/*.html')
  .pipe(dest('./dist/views'))
  .pipe(load.connect.reload())
})

task('index',async () => {
  src('./index.html')
  .pipe(dest('./dist'))
  .pipe(load.connect.reload())
})

// 编译sass
// 处理css
task('style',async ()=>{
  src('./style/*.css')
  .pipe(dest('./dist/style'))
  .pipe(load.connect.reload())
})

// task('sass', async () => {
//   src('./style/*.scss')
//   .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
//   .pipe(dest('./dist/style'))
//   .pipe(load.connect.reload())
// })

// 处理js
task('script',async () => {
  src('./script/*.js')
  .pipe(dest('./dist/script'))
  .pipe(load.connect.reload())
})

// 处理img
task('images',async ()=>{
  src('./images/*.*')
  .pipe(dest('./dist/images'))
  .pipe(load.connect.reload())
})

// 处理font
// task('font', async () => {
//   src('./font/*.*')
//   .pipe(dest('./dist/font'))
//   .pipe(load.connect.reload())
// })

// 启动一个服务，实现自动刷新
task('reload',async ()=>{
  load.connect.server({
    root: './dist',//设置根目录
    livereload: true//开启自动刷新
  })
})

// 监听文件变化
task('watch',async ()=>{
  watch('./views/*.html',series('html'))
  watch('./index.html',series('index'))
  // watch('./style/*.scss',series('sass'))
  watch('./script/*.js',series('script'))
  watch('./images/*.*',series('images'))
})

// 打包（开发环境）
task('dev',series('delDist','html','style','script','images','index'))

// 启动项目
task('start',series('dev','reload','watch'))

