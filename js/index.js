window.onload=function(){



    //全屏翻页开始
    $('#dowebok').fullpage({
        // sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        slidesNavigation:true,//显示side的位置图标
        // continuousVertical: true,
        verticalCentered:true,
        loopBottom: false,
        resize:true,
        normalScrollElements:".header_nav",

        // loopBottom: true,//到底部自动切换到第一页
        // continuousVertical: true,
        // navigation:true,
        // slidesNavPosition:"bottom",
        // onSlideLeave(anchorLink,index,slideIndex,direction){
        //     console.log(1);
        //     console.log(anchorLink);
        //     console.log(index);
        //     console.log(slideIndex);
        //     console.log(direction);
        // },

        //翻页后回调函数
        // onLeave(index,nextIndex,direction){
        //     console.log(($(window).width()));
        //     console.log(index);
        //     console.log(nextIndex);
        //     console.log(direction);
        // },
    });

    //第一页side播放
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 20000);

    //循环插件123213123
    // var mySwiper = new Swiper ('.swiper-container', {
    //     //循环
    //     loop: true,
    //     //时间//操作后还是自动
    //     autoplay: {delay: 5000,disableOnInteraction: false},
    //     //显示数目
    //     slidesPerView: 'auto',
    //     //swiper绑定fullpage触摸滚动side事件，首页下面的swiper触摸滚动时 停止上面的fullpage side滚动 swiper结束后 回复上面的滚动事件
    //     on: {
    //         touchStart: function(event){
    //             $.fn.fullpage.setAllowScrolling(false);
    //         },
    //         touchEnd: function(event){
    //             $.fn.fullpage.setAllowScrolling(true);
    //         },
    //     },
    // });


    // //鼠标覆盖停止自动切换
    // mySwiper.el.onmouseover = function(){
    //     mySwiper.autoplay.stop();
    // };
    //
    // //鼠标离开开始自动切换
    // mySwiper.el.onmouseout = function(){
    //     mySwiper.autoplay.start();
    // };


};