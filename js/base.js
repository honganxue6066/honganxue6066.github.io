window.onload=function(){

    var dowebok=$('#dowebok');
    if(dowebok){

        //首页团队的swiper
        var swiper = new Swiper('.swiper-container', {
            lazy: true,
            mousewheel: true,
            loop : true,
            // autoplay: {
            //     delay: 10000,
            //     disableOnInteraction: false,
            // },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 8,
                    spaceBetween: 40,
                },
            }
        });
        //鼠标覆盖停止自动切换
        // swiper.el.onmouseover = function(){
        //     swiper.autoplay.stop();
        // }
        //
        // //鼠标离开开始自动切换
        // swiper.el.onmouseout = function(){
        //     swiper.autoplay.start();
        // }


        //首页中间的搜索按钮
        var index_search_text=$(".index_search_text");
        //首页搜索遮罩
        var search_zhezhao=$(".search_zhezhao");
        var index_search=$(".index_search");
        var index_search_close=$(".index_search_close");

        var clickcount=0;
        index_search_text.click(function () {
            if(clickcount===0){
                search_zhezhao.stop(true,true).toggleClass("show_search_zhezhao");
                index_search.stop(true,true).toggleClass("index_search_checked");
                $(".head_bg_zhezao").stop(true,true).toggleClass("show_head_bg_zhezao");
            }
            clickcount=1;
        });

        search_zhezhao.click(function () {
            clickcount=0;
            search_zhezhao.stop(true,true).toggleClass("show_search_zhezhao");
            index_search.stop(true,true).toggleClass("index_search_checked");
            $(".head_bg_zhezao").stop(true,true).toggleClass("show_head_bg_zhezao");
        });

        index_search_close.click(function () {
            clickcount=0;
            search_zhezhao.toggleClass("show_search_zhezhao");
            index_search.toggleClass("index_search_checked");
            $(".head_bg_zhezao").stop(true,true).toggleClass("show_head_bg_zhezao");
        });

        //全屏翻页开始
        dowebok.fullpage({
            // sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
            slidesNavigation:true,//显示side的位置图标
            // continuousVertical: true,
            verticalCentered:true,
            loopBottom: false,
            resize:true,
            normalScrollElements:'.nav,.nav_zhezhao,.index_search,.search_zhezhao',

            // paddingTop:'150px',
            // loopBottom: true,//到底部自动切换到第一页
            // continuousVertical: true,
            // navigation:true,
            // slidesNavPosition:"bottom",
            // onSlideLeave(anchorLink,index,slideIndex,direction){
            //     console.log("anchorLink="+anchorLink);
            //     console.log("index="+index);
            //     console.log("slideIndex="+slideIndex);
            //     console.log("direction="+direction);
            // },

            //翻页后回调函数
            afterLoad(anchorLink,index){
                // console.log(anchorLink);
                // console.log(index);

            },

            // 翻页前回调函数
            onLeave(index,nextIndex,direction){
                if(nextIndex===1){
                    $(".search_btn_1").stop(true,true).removeClass("show_search_btn_logo");
                    $(".logo a").stop(true,true).removeClass("show_search_btn_logo");
                    $(".index_box").stop(true,true).addClass("ok_index_one");
                    // $(".index_base_zhezao").stop(true,true).removeClass("show_index_zhezao");
                    // $(".head_bg_zhezao").stop(true,true).removeClass("show_head_bg_zhezao");
                }else{
                    $(".search_btn_1").stop(true,true).addClass("show_search_btn_logo");
                    $(".logo a").stop(true,true).addClass("show_search_btn_logo");
                    $(".index_box").stop(true,true).removeClass("ok_index_one");
                    // $(".index_base_zhezao").stop(true,true).addClass("show_index_zhezao");
                    // $(".head_bg_zhezao").stop(true,true).addClass("show_head_bg_zhezao");
                }
                // console.log(index);
                // console.log(nextIndex);
                // console.log(direction);
            },

            // 页面初始化后的函数
            afterRender(index,nextIndex,direction){
                // console.log("页面加载完成");
                $(".loading").addClass("reloading");
                $(".loading_left").on("webkitTransitionEnd msTransitionend mozTransitionend transitionend", function() {
                    $(".reloading").hide();
                    // console.log("动画结束啦.");
                    $(".head_one_left_box").addClass("ok_head");
                    $(".head_one_right_box").addClass("ok_head");
                    $(".nav_menu").addClass("ok_nav_menu");
                    $(".index_box").addClass("ok_index_one");
                });
            },

        });

        // //第一页side播放
        // setInterval(function(){
        //     $.fn.fullpage.moveSlideRight();
        // }, 20000);

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
    }else{
        $(".loading").addClass("reloading");
        $(".loading_left").on("webkitTransitionEnd msTransitionend mozTransitionend transitionend", function() {
            $(".reloading").hide();
        });
    }

    click_btn();
    function click_btn() {

        //头部全局左侧搜索按钮
        var head_search_btn=$(".search_btn_1");
        var head_search=$(".head_search");
        head_search_btn.click(function () {
            // $(".head_search").slideToggle();
            head_search.toggleClass("show_head_search");
        });

        //头部全局nav按钮
        var nav_menu=$(".nav_menu");
        //头部全局nav导航
        var nav=$(".nav");
        //全局遮罩
        var zhezao=$(".nav_zhezhao");
        //打开nav后的关闭按钮
        var close_nav=$(".close_nav");


        nav_menu.click(function () {
            //导航按钮三横变一×
            // $(this).stop(true,true).toggleClass("click_nav_menu");
            //导航的显示隐藏
            nav.stop(true,true).toggleClass("nav_open");
            zhezao.stop(true,true).toggleClass("show_nav_zhezhao");
        });

        zhezao.click(function () {
            //导航的显示隐藏
            nav.stop(true,true).toggleClass("nav_open");
            zhezao.stop(true,true).toggleClass("show_nav_zhezhao");
        });

        close_nav.click(function () {
            //导航的显示隐藏
            nav.stop(true,true).toggleClass("nav_open");
            zhezao.stop(true,true).toggleClass("show_nav_zhezhao");
        });

    }
};

$(document).ready(function(){



});


