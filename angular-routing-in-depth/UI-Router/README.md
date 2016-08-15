#### 1.指令的定义
从用户的角度来看，指令就是在应用的模板中使用的自定义HTML标签。指令可以很简单，也可以很复杂。AngularJS的HTML编译器会解析指令，增强模板的功能。也是组件化未来的发展趋势，目前HTML5中也加入了很多新标签，但是在实际业务开发过程中，有很多复用的模板，加上复用的交互效果，
可以将其编写为AngularJS的指令，开发工程师可以在同一个项目，或多个项目中使用，实现开发一次，
到处使用的目标。

#### 2.内置指令和自定义指令
AngularJS内部指令都是ng-diretivename这种，以ng-开头。可以通过 [https://docs.angularjs.org/api/ng/directive](https://docs.angularjs.org/api/ng/directive)
查看AngularJS的指令。在实际开发中，常用的有以下几个：

ngApp

ngController

ngClass

ngClick

ngShow和ng-hide

ngRepeat

ngSubmit

#### 3.第一个指令
编写一个第一个指令，输出Hello AngularJS Diretive.

```index.html```

```html
<html ng-app="app">

<head>
<title>AngularJs First Diretive</title>
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"></link>
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootswatch/3.3.5/cosmo/bootstrap.min.css" />
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <script src="https://code.angularjs.org/1.5.7/angular.js"></script>
  <script src="script.js"></script>
</head>

<body ng-controller="mainCtrl">
  <hello-world></hello-world>
</body>

</html>
```
script.js

```javascript
var app=angular.module('app',[]);
app.controller('mainCtrl',function($scope){
  $scope.message="Learning Angularjs";


});

angular.module('app').directive('userInfoCard',function(){
  return {
    template:"Hello World. I am an Angularjs Diretive.",
    restrict:"EA",
    replace:true
  }
})
```

运行效果如下:
![](http://images2015.cnblogs.com/blog/59618/201607/59618-20160723144838122-1870697782.png)

#### 4.总结
在AngularJS中，指令非常的重要。指令是AngularJS和其他大多数JavaScript客户端框架的区别所在，也是未来Web开发组件化趋势所在。有了指令，无需编辑一大段代码定义模型；有了指令，AngularJS的模型和视图得到了建好，从而让开发者可以快速高效的开发强大的应用。

![](http://images2015.cnblogs.com/blog/59618/201607/59618-20160708090522811-599592837.png)


**参考网址**

1.[https://docs.angularjs.org/guide/directive](https://docs.angularjs.org/guide/directive)

