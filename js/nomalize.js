//确定宽高
const myheight = $(window).height()
const mywidth = $(window).width()


//动态设置各个宽高,各个页面视差函数算法
function mymove(myheight, mywidth, img1, img2, img3, box, control) {


    $(box).css('width', mywidth + 'px')
    $(box).css('height', myheight + 'px')
    $(box).css('background-color', 'skyblue')
    $(box).css('position', 'relative')
    $(box).css('overflow', 'hidden')
    $(box).css('z-index', '0')

    $(box + '>img').css({
        position: 'absolute',
        left: '0 px',
        top: '0 px',
        width: mywidth + 300 + 'px',
        height: myheight + 300 + 'px',
        'margin-top': '-150px',
        'margin-left': '-150px'
    })
    $(img1).css('z-index', '1')
    $(img2).css('z-index', '2')
    $(img3).css('z-index', '3')

    $(control).mousemove(function (e) {
        //视差滚动
        var halfWindowLeft = mywidth / 2
        var halfWindowTop = myheight / 2
        var rLeft = halfWindowLeft - e.clientX
        var rateX = rLeft / halfWindowLeft
        var rTop = halfWindowTop - e.clientY

        var rateY = rTop / halfWindowTop
        var outDistance = 100
        var outOffsetX = rateX * outDistance
        var outOffsetY = rateY * outDistance
        $(img1).css('left', outOffsetX * 0.4)
        $(img1).css('top', outOffsetY * 0.1)
        $(img2).css('left', outOffsetX * 1)
        $(img2).css('top', outOffsetY * 0.3)
        $(img3).css('left', outOffsetX * 0.6)
        $(img3).css('top', outOffsetY * 0.2)

    })


    //如何阻止mousemove上层事件
    // $(document).on('mousemove', control, function (e) {
    //     e.stopPropagation()
    //     var halfWindowLeft = mywidth / 2
    //     var halfWindowTop = myheight / 2
    //     var rLeft = halfWindowLeft - e.clientX
    //     var rateX = rLeft / halfWindowLeft
    //     var rTop = halfWindowTop - e.clientY
    //     var rateY = rTop / halfWindowTop
    //     var outDistance = 100
    //     var outOffsetX = rateX * outDistance
    //     var outOffsetY = rateY * outDistance
    //     $(img1).css('left', outOffsetX * 0.4)
    //     $(img1).css('top', outOffsetY * 0.1)
    //     $(img2).css('left', outOffsetX * 1)
    //     $(img2).css('top', outOffsetY * 0.3)
    //     $(img3).css('left', outOffsetX * 0.6)
    //     $(img3).css('top', outOffsetY * 0.2)
    // })

    //设置蒙版至顶层
    // $(mask).css({
    //     'z-index': '100000'
    // })
}

//视差函数调用
mymove(myheight, mywidth, '#img1', '#img2', '#img3', '#viewBox1', '#c1')
mymove(myheight, mywidth, '#img4', '#img5', '#img6', '#viewBox2', '#c2')
mymove(myheight, mywidth, '#img7', '#img8', '#img9', '#viewBox3', '#c3')
mymove(myheight, mywidth, '#img10', '#img11', '#img12', '#viewBox4', '#c4')
mymove(myheight, mywidth, '#img13', '#img14', '#img15', '#viewBox5', '#c5')
mymove(myheight, mywidth, '#img16', '#img17', '#img18', '#viewBox6', '#c6')
mymove(myheight, mywidth, '#img19', '#img20', '#img21', '#viewBox7', '#c7')

//控制蒙版
$('#mask').css({
    'width': (mywidth / 2) * 0.9,
    'height': myheight * 0.93,
    'top': myheight * 0.07 / 2,
    'left': myheight * 0.07 / 2,
})
$('.index-address').css({
    // 'margin-top': $('.left-info').height() - 100
})

//动态设置负一屏大小
$('#nav-background').css({
    'width': mywidth - 40,
    'height': myheight - 40,
    'margin': '20px 20px'
})

//设置负一屏大小函数
function setOnlyone(name) {

}




//初始化分页
var mypage = $('#dowebok').fullpage({
    sectionsColor: ['rgb(82, 84, 83)', 'rgb(82, 84, 83)', 'rgb(82, 84, 83)', 'rgb(82, 84, 83)', 'rgb(82, 84, 83)', 'rgb(82, 84, 83)', 'rgb(82, 84, 83)'],
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
    continuousVertical: true,
    controlArrows: false,
    loopHorizontal: false,
    css3: false,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    fixedElements: '#mask',
    onLeave: function (index, nextIndex, direction) {
        var leavingSection = $(this);
        //设置切换时颜色渐变
        switch (nextIndex) {
            case 1:
                $('#mask').stop(false, true).animate({
                    'background-color': 'rgb(35, 31, 29)'
                }, 1000)
                break
            case 2:
                $('#mask').stop(false, true).animate({
                    'background-color': 'rgb(41, 41, 41)'
                }, 1000)
                break
            case 3:
                $('#mask').stop(false, true).animate({
                    'background-color': 'rgb(230, 33, 23)'
                }, 1000)
                break
            case 4:
                $('#mask').stop(false, true).animate({
                    'background-color': 'rgb(59, 59, 59)'
                }, 1000)
                break
            case 5:
                $('#mask').stop(false, true).animate({
                    'background-color': 'rgb(61, 61, 61)'
                }, 1000)
                break
            case 6:
                $('#mask').stop(false, true).animate({
                    'background-color': 'rgb(0,0,0)'
                }, 1000)
                break
            case 7:
                $('#mask').stop(false, true).animate({
                    'background-color': 'rgb(3, 15, 47)'
                }, 1000)
                break
        }
    },
    afterSlideLoad: function (section, origin, destination, direction) {
        if (destination == '0' && direction == '0') {
            $.fn.fullpage.setAllowScrolling(false, 'down')
            $.fn.fullpage.setAllowScrolling(false, 'up')
        } else {
            $.fn.fullpage.setAllowScrolling(true, 'down')
            $.fn.fullpage.setAllowScrolling(true, 'up')
        }
    },
    onSlideLeave: function (section, origin, destination, direction) {
        console.log('section:' + section, 'orgin:' + origin, 'destination:' + destination, 'direction:' + direction)
        if (destination == '1' && direction == 'left') {
            $('#mask').stop(true, false).animate({
                'left': mywidth
            }, 700, 'easeInOutCubic')
        } else if (destination == '0' && direction == 'right') {
            $('#mask').stop(true, false).animate({
                'left': '20px'
            }, 700, 'easeInOutCubic')
        }
    },
    afterLoad: function (origin, destination, direction) {
        // console.log(origin, destination, direction)
        // $('#t1').css('opacity', 0)
        console.log($('#t1').text())
        switch (destination) {
            case 1:
                console.log(1)
                $('#t1').text('National Geographic')
                $('#t2').text("A Bear's-Eye View of Yellowstone")
                $('#title-information').text('Follow the journeys of 4 bears navigating the heart of Yellowstone, as seenfrom the bears’ own point of view.This groundbreaking research that attaches cameras to bears gives us a lens into the never before seen lives of one of the animal kingdom’ s most fearsome beasts.')
                break
            case 2:
                console.log(2)
                $('#title').animate({
                    'marginTop': '50px',
                    'opacity': 0
                }, function () {
                    $('#t1').text('Hollow')
                    $('#t2').text("10,000 trees made digital")
                    $('#title').css('marginTop', '-50px')
                    $('#title').animate({
                        'marginTop': '0',
                        'opacity': 1
                    })
                })

                // $('#t1').toggleClass('addTranslate')

                $('#t1').css('color', 'white')
                $('#t2').css('color', 'rgb(143, 117, 111)')
                $('#title-information').css('color', 'rgb(88, 79, 75)')
                $('#title-information').text('Artist Katie Paterson’s work is about natural phenomenon like time, the universe and volcanoes. We became a mix of a rational scientists and poetic artists when we shaped the digital experience to match her newest piece, Hollow.')
                break
            case 3:
                console.log(3)
                $('#title').animate({

                    'marginLeft': '50px',
                    'opacity': 0
                }, function () {
                    $('#t1').text('YouTube Kids')
                    $('#t2').text("Safe and fun digital playtime")
                    // $('#title').css('marginTop', '-50px')
                    $('#title').animate({
                        // 'marginTop': '50px',
                        'marginLeft': '0',
                        'opacity': 1
                    }, 100, 'swing')
                })
                $('#t1').css('color', 'white')
                $('#t2').css('color', 'black')
                $('#title-information').css('color', 'black')
                $('#title-information').text('Together with YouTube, we’ve created an app directed at children so they can enjoy the enormous amount of fun, educational videos available - while parents don’t have to worry that their kids’ explorations lead to adult content.')
                break
            case 4:
                console.log(4)
                $('#t1').text('Google Cloud Platform')
                $('#t2').text("Machine Learning")
                $('#t1').css('color', 'white')
                $('#t2').css('color', 'rgb(154, 154, 154)')
                $('#title').addClass('animated lightSpeedIn');
                setTimeout(function () {
                    $('#title').removeClass('lightSpeedIn');
                }, 1000);
                $('#title-information').css('color', 'whitec')
                $('#title-information').text('Machine Learning meets abstract expressionism in this thought-provoking video for Google Cloud Platform.')
                break
            case 5:
                console.log(5)
                $('#t1').text('Essential')
                $('#t2').text("The Rise of a Small Giant")
                $('#t1').css('color', 'white')
                $('#t2').css('color', 'rgb(255, 250, 110)')
                $('#title').addClass('animated flip');
                setTimeout(function () {
                    $('#title').removeClass('flip');
                }, 1000);
                $('#title-information').css('color', 'rgb(123, 123, 125)')
                $('#title-information').text('Essential is proof that you don’t have to be big to do something big. In fact, being big can inhibit you from being innovative or conquering a market.')
                break
            case 6:
                console.log(6)
                $('#t1').text('Witness Change')
                $('#t2').text("Fighting for human rights")
                $('#t1').css('color', 'white')
                $('#t2').css('color', 'rgb(97, 97, 97)')
                $('#title').addClass('animated shake');
                setTimeout(function () {
                    $('#title').removeClass('shake');
                }, 1000);
                $('#title-information').css('color', 'white')
                $('#title-information').text('In My World is a collaboration with photographer Robin Hammond. The website aims to raise awareness about the impact war, poverty and conflict can have on mental health issues.')
                break
            case 7:
                console.log(7)
                $('#t1').text('ESPN')
                $('#t2').text("We The Fans")
                $('#t1').css('color', 'white')
                $('#t2').css('color', 'rgb(219, 78, 16)')
                $('#title').addClass('animated rotateIn');
                setTimeout(function () {
                    $('#title').removeClass('rotateIn');
                }, 1000);
                $('#title-information').css('color', 'white')
                $('#title-information').text('We The Fans is a multiplatform storytelling project about life and love as a football fan. In collaboration with ESPN, we created a digital experience exploring the lives of Chicago Bears diehards.')
                break
        }
    }

})

// 更多动画设置
//记录旋转角度
var deg = 0
//记录是否进负一屏;0当前,-1负一屏
var flag = 0
$('#more').mouseenter(function () {
    $('#more').css({
        'cursor': 'pointer'
    })
    $('#trans1').stop(true, true).animate({
        'top': '5px'
    }, 100).animate({
        'top': '18px'
    }, 100)

    $('#trans3').stop(true, true).animate({
        'top': '39px'
    }, 100).animate({
        'top': '26px'
    }, 100)
})
$('#more').click(function () {
    //动画
    $('#trans1').stop(true, true).animate({
        top: '3px'
    }, 300).animate({
        top: '18px'
    }, 300)
    $('#trans3').stop(true, true).animate({
        top: '42px'
    }, 300).animate({
        top: '26px'
    }, 300)
    setTimeout(() => {
        $('#trans2').stop(true, true).animate({}, function () {
            if (deg == 0) {
                deg = 180
            } else {
                deg = 0
            }
            $('#trans2').css({
                'transform': 'rotate(' + deg + 'deg)'
            })
        })
    }, 150)
    //设置mask的position为ab
    //跳转
    if (flag == 0) {
        $.fn.fullpage.moveSlideLeft()
        flag = -1
    } else {
        $.fn.fullpage.moveSlideRight()
        flag = 0
    }

})

//鼠标经过以及点击负一屏ul的变化
$('#nav-ul').on('click', 'li', function (e) {
    $('#nav-ul a').css('color', '')
    $(this).find('*').css('color', 'white')
})
//标题动画
function titleAnimate() {
    $('#t1').animate({
        'height': 0
    })
}