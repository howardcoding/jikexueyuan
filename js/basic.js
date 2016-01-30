define(function(require, exports) {

    // 通过 require 引入依赖
    var $ = require('jquery');
    /**
     * 鼠标滑过导航标签的时候【显示】课程详情下拉菜单
     * @param  {[type]} element 产生鼠标事件的元素
     * @return {[type]}         无返回值
     */
    exports.displayCourse = function(element) {
            $(element).each(function(index) {
                // 添加鼠标滑过事件
                $(this).on('mouseover', function(event) {
                    event.preventDefault();
                    //为元素添加display的类名
                    $('.course-detail').addClass('display');
                    //当鼠标划过导航栏的时候，对应的课程菜单背景颜色高亮显示
                    if (index > 0) {
                        removeHighLight('.course-detail .content'); //移除所有元素的高亮效果
                        highLight($('.course-detail ul').eq(index - 1)); //为对应的菜单添加高亮背景
                    };
                });
            });
        }
        /**
         * 鼠标滑过导航标签的时候【隐藏】课程详情下拉菜单
         * @param  {[type]} element 产生鼠标事件的元素
         * @return {[type]}         无返回值
         */
    exports.hideCourse = function(element) {
            $(element).on('mouseleave', function(event) {
                event.preventDefault();
                $('.course-detail').removeClass('display');
            });
        }
        /**
         * 控制课程详情下拉菜单的背景高亮显示
         * @return {[type]} 无返回值
         */
   exports.highLightCourse = function() {
            $('.course-detail ul').on('mouseover', function(event) {
                event.preventDefault();
                highLight(this);
            });
            $('.course-detail ul').on('mouseleave', function(event) {
                event.preventDefault();
                removeHighLight('.course-detail .content')
            });
        }
        /**
         * 为元素添加高亮背景颜色
         * @param  {[type]} elementAdd [需要添加高亮背景的元素选择器]
         * @return {[type]}            [description]
         */
    function highLight(elementAdd) {
        $(elementAdd).addClass('highlight');
    }
    /**
     * 移除元素的高亮背景颜色
     */

    function removeHighLight(elementRemove) {
        $(elementRemove).removeClass('highlight');
    }
    /**
     * 页面左侧导航鼠标事件动画效果
     * @return {[type]} [无返回值]
     */
   exports.displayNavDetail = function(element) {
            $(element).each(function(index) {
                $(this).on('mouseover', function(event) {
                    event.preventDefault();
                    $('.left-detail').addClass('hide'); //隐藏所有详情页
                    $('.left-detail').eq(index).removeClass('hide'); //显示特定索引的详情页
                    $('.lesson-nav li').eq(index).css('border-right-color', '#fff'); //改变左侧导航栏的li的右边框的颜色
                });
                $(this).on('mouseout', function(event) {
                    event.preventDefault(); //鼠标移开时隐藏所有详情页
                    $('.left-detail').addClass('hide');
                    $('.lesson-nav li').eq(index).css('border-right-color', '#e4e4e4'); //改变左侧导航栏的li的右边框的颜色
                });
            });
        }
        /**
         * 鼠标滑过Banner部分的时候，出现左右切换的按钮
         * @param  {[type]} element [description]
         */
   exports.showButton = function(element) {
            $(element).on('mouseenter', function(event) {
                event.preventDefault();
                $('.main-banner .btn-left').addClass('display');
                $('.main-banner .btn-right').addClass('display');
            });
            $('.main-banner .btn-left').on('mouseenter', function(event) {
                event.preventDefault();
                $('.main-banner .btn-left').addClass('display');
                $('.main-banner .btn-right').addClass('display');
            });
            $('.main-banner .btn-right').on('mouseenter', function(event) {
                event.preventDefault();
                $('.main-banner .btn-left').addClass('display');
                $('.main-banner .btn-right').addClass('display');
            });
            $('.main-banner .banner-tag').on('mouseenter', function(event) {
                event.preventDefault();
                $('.main-banner .btn-left').addClass('display');
                $('.main-banner .btn-right').addClass('display');
            });
            $(element).on('mouseleave', function(event) {
                event.preventDefault();
                $('.main-banner .btn-left').removeClass('display');
                $('.main-banner .btn-right').removeClass('display');
            });
        }
        /**
         * 点击向左切换Banner按钮的效果
         * @return {[type]} [description]
         */
    exports.leftBanner = function() {
            $('.main-banner .btn-left').on('click', function(event) {
                event.preventDefault();
                changeBanner('left');
                getBannerIndex('left');

            });
        }
        /**
         * 点击向右切换Banner按钮的效果
         * @return {[type]} [description]
         */
    exports.rightBanner = function() {
            $('.main-banner .btn-right').on('click', function(event) {
                event.preventDefault();
                changeBanner('right');
                getBannerIndex('right');

            });
        }
        /**
         * 当点击切换Banner之后，小标签也会改变颜色与当前显示的标签对应
         * @return {[type]} [description]
         */
    function getBannerIndex(direction) {
        var leftPosition = $('.banner-info').css("left").toString();
        leftPosition = leftPosition.substring(0, leftPosition.length - 2);
        leftPosition = parseInt(leftPosition); //取到当前Banner容器的left的数值，去掉px并且转换为数字
        var bannerIndex = -(leftPosition / 560 - 1);
        $('.banner-tag li').removeClass('on');
        if (direction == 'right') {
            if (bannerIndex == '6') {
                $('.banner-tag li').eq(0).addClass('on');
            } else {
                $('.banner-tag li').eq(bannerIndex).addClass('on');
            };
        };

        if (direction == 'left') {
            if (bannerIndex == '1') {
                $('.banner-tag li').eq(5).addClass('on')
            } else {
                $('.banner-tag li').eq(bannerIndex - 2).addClass('on');
            };
        };


    }
    /**
     * Banner切换动画
     */

    function changeBanner(direction) {
        var imgWidth = $('.banner-info a').css("width").toString();
        imgWidth = imgWidth.substring(0, imgWidth.length - 2);
        imgWidth = parseInt(imgWidth); //取到每一张Banner图片的宽度，去掉px并且转换为数字
        var leftPosition = $('.banner-info').css("left").toString();
        leftPosition = leftPosition.substring(0, leftPosition.length - 2);
        leftPosition = parseInt(leftPosition); //取到当前Banner容器的left的数值，去掉px并且转换为数字
        if (direction == 'left') {
            if (leftPosition == 0) {
                $('.banner-info').animate({
                    left: '-' + imgWidth * 5 + 'px'
                }, 200);
            } else {
                var leftOne = leftPosition + imgWidth;
                $('.banner-info').animate({
                    left: leftOne + 'px'
                }, 200);
            };

        };
        if (direction == 'right') {
            if (leftPosition == '-2800') {
                $('.banner-info').animate({
                    left: '0px'
                }, 200);
            } else {
                var leftOne = leftPosition - imgWidth;
                $('.banner-info').animate({
                    left: leftOne + 'px'
                }, 200);
            };
        };
    }
    /**
     * 点击Banner标签的时候切换Banner内容
     * @return {[type]} [description]
     */
    exports.clickBannerTag = function() {
            $('.banner-tag li').each(function(index, el) {
                $(this).on('click', function(event) {
                    event.preventDefault();
                    $('.banner-tag li').removeClass('on');
                    $(this).addClass('on');
                    var imgWidth = $('.banner-info a').css("width").toString();
                    imgWidth = imgWidth.substring(0, imgWidth.length - 2);
                    imgWidth = parseInt(imgWidth); //取到每一张Banner图片的宽度，去掉px并且转换为数字
                    $('.banner-info').animate({
                        left: '-' + index * imgWidth + 'px'
                    }, 500)
                });
            });
        }
        /**
         * 鼠标滑过页面中部导航Tab的时候完成切换
         * @return {[type]} [description]
         */
    exports.switchTab = function() {
            $('.hot-lesson-tab li').each(function(index, el) {
                $(this).on('mouseover', function(event) {
                    event.preventDefault();
                    $('.hot-lesson-tab li').removeClass('onmouse');
                    $(this).addClass('onmouse');
                    $('.hot-lesson-detail').addClass('hide');
                    $('.hot-lesson-detail').eq(index).removeClass('hide');
                });

            });
        }
        /**
         * 实现热门推荐课程板块的动画效果
         * @return {[type]} [description]
         */
    exports.displayHotLesson = function() {
            $('.hot-lesson-detail ul li').each(function(index, el) {
                $(this).on('mouseenter', function(event) {
                    event.preventDefault();
                    $('.hot-lesson-play').eq(index).removeClass('hide');
                    $('.hot-lesson-info').eq(index).delay(300).addClass('top-layer');
                    $('.hot-lesson-detail .cf li').eq(index).css('height', '400px!important');
                    $('.inner-info').eq(index).slideDown('400');
                });
                $(this).on('mouseleave', function(event) {
                    event.preventDefault();
                    $('.hot-lesson-play').eq(index).addClass('hide');
                    $('.inner-info').eq(index).css('display', 'none');
                    $('.hot-lesson-info').eq(index).animate({
                        height: '70px!important'
                    }, 300);
                    $('.hot-lesson-info').eq(index).removeClass('top-layer');
                    $('.hot-lesson-detail .cf li').eq(index).css('height', '220px');
                });
            });
        }
        /**
         * 实现职业路径图板块的动画效果，鼠标移过的时候，边框和按钮变为绿色
         * @return {[type]} [description]
         */
    exports.changeButtonColor = function() {
        $('.route-detail').each(function(index, el) {
            $(this).on('mouseover', function(event) {
                $(this).css({
                    'border-color': '#35b558'
                });
                if ((index != 4) && (index != 9)) {
                    $('.route-detail').eq(index + 1).css({
                        'border-left-color': '#35b558'
                    });
                    $('.route-detail').eq(index + 5).css({
                        'border-top-color': '#35b558'
                    });
                } else {
                    $(this).css('border-right-color', '#35b558');
                    $('.route-detail').eq(index + 5).css({
                        'border-top-color': '#35b558'
                    });
                };
                if (index <= 7) {
                    $('.route-detail button').eq(index).addClass('btn-green');
                };

            });
            $(this).on('mouseout', function(event) {
                event.preventDefault();
                $('.route-detail button').eq(index).removeClass('btn-green');
                $('.route-detail').css('border-color', '#e4e4e4');
            });
        });
    }

    /**
     * 知识体系板块翻转效果
     */
    exports.transformLesson = function() {
            $('.know-front').each(function(index, el) {
                $(this).on('mouseenter', function(event) {
                    event.preventDefault();
                    $('.know-list').eq(index).addClass('know-out');
                    $('.know-back').eq(index).addClass('know-in');
                });
            });
            $('.know-front').each(function(index, el) {
                $(this).on('mouseleave', function(event) {
                    event.preventDefault();

                    $('.know-list').eq(index).addClass('know-out-back');
                    $('.know-back').eq(index).addClass('know-in-back');
                    $('.know-list').eq(index).removeClass('know-out know-out-back');
                    $('.know-back').eq(index).removeClass('know-in know-in-back');
                });
            });
        }
        /**
         * 精品系列课程板块详情描述部分
         */

    exports.showDescribe = function() {
            $('.best-detail').each(function(index, el) {
                $(this).on('mouseenter', function(event) {
                    event.preventDefault();
                    $(".best-lesson-describe").eq(index).addClass('display');
                });
                $(this).on('mouseleave', function(event) {
                    event.preventDefault();
                    $('.best-lesson-describe').eq(index).removeClass('display');
                });
            });
        }
        /**
         * 翻开书本的效果
         * @return {[type]} [description]
         */
   exports.openBook = function() {
            $('.img-back').each(function(index, el) {
                $(this).on('mouseenter', function(event) {
                    event.preventDefault();
                    $('.img-back img').eq(index).addClass('book-open');

                });
                $(this).on('mouseleave', function(event) {
                    event.preventDefault();
                    $('.img-back img').eq(index).removeClass('book-open');

                });
            });
            $('.wikibook').each(function(index, el) {
                $(this).on('mouseenter', function(event) {
                    event.preventDefault();
                    $('.wikibook').eq(index).css('border-color', '#35b558');
                    $('.wikibook').eq(index + 1).css('border-left-color', '#35b558');
                });
                $(this).on('mouseleave', function(event) {
                    event.preventDefault();
                    $('.wikibook').eq(index).css('border-color', '#e4e4e4');
                    $('.wikibook').eq(index + 1).css('border-left-color', '#e4e4e4');
                });
            });
        }
        /**
         * 鼠标移动到板块当中的时候，显示向左和向右的按钮
         */

    exports.showCompanyBotton = function() {
        $('.company-coop,.company-left,.company-right').on('mouseenter', function(event) {
            event.preventDefault();
            $('.company-left,.company-right').addClass('display');
        });
        $('.companies').on('mouseleave', function(event) {
            event.preventDefault();
            $('.company-left,.company-right').removeClass('display');
        });
    }

    exports.showSchoolBotton = function() {
        $('.school-coop,.school-left,.school-right').on('mouseenter', function(event) {
            event.preventDefault();
            $('.school-left,.school-right').addClass('display');
        });
        $('.schools').on('mouseleave', function(event) {
            event.preventDefault();
            $('.school-left,.school-right').removeClass('display');
        });
    }

    exports.showMediaButton = function() {
            $('.media-coop,.media-left,.media-right').on('mouseenter', function(event) {
                event.preventDefault();
                $('.media-left,.media-right').addClass('display');
            });
            $('.medias').on('mouseleave', function(event) {
                event.preventDefault();
                $('.media-left,.media-right').removeClass('display');
            });
        }
        /**
         * 鼠标点击向左和向右按钮时，完成图片的切换
         */
    exports.swipeCompany = function() {
        $('.company-left').on('click', function(event) {
            event.preventDefault();
            changeImage('left', 160, '.company-coop .swiper-wrapper');
        });
        $('.company-right').on('click', function(event) {
            event.preventDefault();
            changeImage('right', 160, '.company-coop .swiper-wrapper');
        });
    }

    exports.swipeSchool = function() {
        $('.school-left').on('click', function(event) {
            event.preventDefault();
            changeImage('left', 160, '.school-swiper-wrapper');
        });
        $('.school-right').on('click', function(event) {
            event.preventDefault();
            changeImage('right', 160, '.school-swiper-wrapper');
        });
    }

   exports.swipeMedia = function() {
        $('.media-left').on('click', function(event) {
            event.preventDefault();
            changeImage('left', 160, '.media-coop .swiper-wrapper');
        });
        $('.media-right').on('click', function(event) {
            event.preventDefault();
            changeImage('right', 160, '.media-coop .swiper-wrapper');
        });
    }

    function changeImage(direction, width, target) {
        var leftPosition = $(target).css('left').toString();
        leftPosition = leftPosition.substring(0, leftPosition.length - 2);
        leftPosition = parseInt(leftPosition); //取到当前Banner容器的left的数值，去掉px并且转换为数字

        if (direction == 'left') {
            var leftOne = leftPosition - width;
            $(target).animate({
                left: leftOne + 'px'
            }, 100);
        };
        if (direction == 'right') {
            var leftOne = leftPosition + width;
            $(target).animate({
                left: leftOne + 'px'
            }, 100);
        };
    }

   exports.showFixedIcon = function() {
        $('.qq-icon').on('mouseenter', function(event) {
            event.preventDefault();
            $('.weixinpop').addClass('display');
        });
        $('.qq-icon').on('mouseleave', function(event) {
            event.preventDefault();
            $('.weixinpop').removeClass('display');
        });
        $('.weixin-join').on('mouseenter', function(event) {
            event.preventDefault();
            $('.appewx').addClass('display');
        });
        $('.weixin-join').on('mouseleave', function(event) {
            event.preventDefault();
            $('.appewx').removeClass('display');
        });
        $('.back-to-top').on('click', function(event) {
            event.preventDefault();
            $(window).scrollTop(0);
        });
    }




});
