/**
 * 使用gulp-load-plugins 批量引入package.json中的gulp插件
 * 安装：npm install --save-dev gulp-load-plugins
 */

/**
 * 1.加载gulp，并结构需要的方法
 * 2.自动加载其他gulp插件
 * 3.nodejs删除文件的API
 */

// 加载gulp，并结构需要的方法
let {task,src,dest,watch,series,parallel} = require('gulp')
let load = require('gulp-load-plugins')()//自动加载其他gulp插件
let del = require('del')//删除文件
//sass配置
// let sass = require('gulp-sass')
// sass.compiler = require('node-sass')


// 删除dist目录
task('delDist',async () => {
  await del('./dist')
})

// 处理css
/**
 * load.rev()给文件名添加哈希值
 * load.minify()带一般是压缩文件
 * 写入到dist目录下
 * load.rev.manifest()生成记录哈希值的json文件
 */
// task('style', async () => {
//   src('./style/*.css')
//   .pipe(load.rev())//给文件名添加哈希值
//   .pipe(load.minifyCss())//压缩css，编译sass
//   .pipe(dest('./dist/style'))//写入到dist目录下
//   .pipe(load.rev.manifest())//生成记录哈希值的json文件
//   .pipe(dest('./rev/css'))//将记录哈希值的json文件保存rev目录
// })

// 处理css
task('style',async ()=>{
  src('./style/*.css')
  .pipe(load.rev())//给文件名添加哈希值
  .pipe(load.minifyCss())//压缩css
  .pipe(dest('./dist/style'))//写入到dist目录下
  .pipe(load.rev.manifest())//生成记录哈希值的json文件
  .pipe(dest('./rev/css'))//将记录哈希值的json文件保存rev目录
})
// 编译sass，将sass文件装换为css文件
// task('sass', async () => {
//   src('./style/*.scss')
//   .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
//   .pipe(load.rev())
//   .pipe(load.minifyCss())
//   .pipe(dest('./dist/style'))
//   .pipe(load.rev.manifest())
//   .pipe(dest('./rev/css'))
// })

// 处理js
task('script',async () => {
  src('./script/*.js')
  .pipe(load.rev())
  .pipe(load.babel({
    presets: ['@babel/env']
  }))
  .pipe(load.uglify())
  .pipe(dest('./dist/script'))
  .pipe(load.rev.manifest())
  .pipe(dest('./rev/js'))
})

// 压缩图片
// task('images',async () => {
//   src('./images/*.*')
//   .pipe(load.imagemin())
//   .pipe(dest('./dist/images'))
// })

// // 处理font(字体图标库)
// task('font', async () => {
//   src('./font/*.*')
//   .pipe(dest('./dist/font'))
// })

// 处理html
task('html',async () => {
  setTimeout( () => {
    src(['./rev/**/*.json','./dist/views/*.html'])
    .pipe(load.revCollector({replaceReved:true}))//使用带哈希值的文件替换原文件
    .pipe(load.minifyHtml())
    .pipe(dest('./dist'))
  },2000)
})

task('index',async () => {
  setTimeout(()=>{
    src(['./rev/**/*.json','./index.html'])
    .pipe(load.revCollector({replaceReved:true}))//使用带哈希值的文件替换原文件
    .pipe(load.minifyHtml())
    .pipe(dest('./dist'))
  },2000)
})

// 打包（生成环境）
task('build',series('delDist','index','style','script','html'))
