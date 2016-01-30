// 所有模块都通过 define 来定义
define(function(require, exports, module) {

    // 通过 require 引入依赖
    var $ = require('jquery-debug');
    var Basic = require('basic');
    // 通过 exports 对外提供接口
    exports.demo = function() {
        alert($);
    }
    exports.animations = function() {
        $(document).ready(function() {
            Basic.displayCourse('.top-nav .inner-wrap a'); //页面顶部导航栏Tab切换动画
            Basic.displayCourse('.course-detail');
            Basic.hideCourse('.top-nav .inner-wrap a');
            Basic.hideCourse('.course-detail');
            Basic.highLightCourse(); //下拉页高亮背景颜色切换动画
            Basic.displayNavDetail('.lesson-nav ul li'); //页面左侧课程导航动画
            Basic.displayNavDetail('.left-detail'); //课程导航详情页面动画
            Basic.showButton('#banner-bg'); //鼠标滑过Banner容器的时候，显示左右切换的按钮
            Basic.clickBannerTag();
            Basic.leftBanner(); //鼠标点击向左和向右按钮时对Banner进行切换
            Basic.rightBanner();
            Basic.switchTab(); //推荐课程板块的Tab标签切换
            Basic.displayHotLesson(); //鼠标经过时展现推荐课程的详情描述
            Basic.changeButtonColor(); //鼠标经过时改变按钮的颜色
            Basic.transformLesson(); //知识体系板块翻转效果
            Basic.showDescribe();
            Basic.openBook(); //书本打开的效果
            Basic.showCompanyBotton();
            Basic.showSchoolBotton();
            Basic.showMediaButton(); //出现向左和向右的按钮
            Basic.swipeCompany(); //向左和向右切换图片的动画
            Basic.swipeSchool();
            Basic.swipeMedia();
            Basic.showFixedIcon(); //回到顶部
        });


    }

});
