"use strict";

layui.define(['layer', 'form', 'upload', 'laytpl'], function (exports) {
  var layer = layui.layer,
      form = layui.form,
      upload = layui.upload;
  console.log(upload);
  layer.msg('Hello World'); //监听提交按钮

  form.on('submit(test)', function (data) {
    console.log(data);
  }); //实例化一个上传控件

  upload.render({
    url: '上传接口url',
    success: function success(data) {
      console.log(data);
    }
  });
  var laytpl = layui.laytpl;
  console.log(laytpl);
  /* //直接解析字符
  laytpl('{{ d.name }}是一位公猿').render({
    name: '贤心'
  }, function(string){
    console.log(string); //贤心是一位公猿
  }); */
  //你也可以采用下述同步写法，将 render 方法的回调函数剔除，可直接返回渲染好的字符

  /* var string =  laytpl('{{ d.name }}是一位公猿').render({
    name: '贤心'
  });
  console.log(string);  //贤心是一位公猿 */
  //如果模板较大，你也可以采用数据的写法，这样会比较直观一些

  laytpl(['{{ d.name }}}aaaaaaaaaaaaaaaaaa', 'bbbbbbbbbbbbbbbb'].join(''));
  exports('base', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});