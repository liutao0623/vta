function open_list() {
    $(".vta_listPopupWindow").toggle();
}
function changeIcon(mainNode, clickNode, index) {
    if (mainNode) {
        if (mainNode.attr("src").indexOf("down") >= 0) {
            mainNode.attr("src", "./img/up_blue.png");
            clickNode.addClass('list_item_active');
        } else {
            if (index == 0) {
                mainNode.attr("src", "./img/down_black.png");
            } else {
                mainNode.attr("src", "./img/down.png");
            }
            clickNode.removeClass('list_item_active');
        }
    }
}

// 弹出来点击事件
$(function () {
    $('.list_item').click(function () {
        var array = $(".list_item") // 主元素
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if ($(this).attr('data-index') == index) {
                $(this).next('div').slideToggle();
                // 更换图标添加类别
                changeIcon($(this).children('img'), $(this), 0);
            } else {
                $(element).next('div').hide();
                $(element).find('img').attr("src", "./img/down_black.png");
                $(element).removeClass('list_item_active')
            }
        }

    });
});
// 底部
$(function () {
    $('.atBottomThe_item').click(function () {
        var array = $(".atBottomThe_item") // 主元素
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if ($(this).attr('data-index') == index) {
                // 更换图标添加类别
                $(this).next('div').slideToggle();
                changeIcon($(this).children('img'), $(this), 1);
            } else {
                $(element).next('div').hide();
                $(element).find('img').attr("src", "./img/down.png");
                $(element).removeClass('list_item_active')
            }
        }
    });
});
// 查看更多
$(function () {
    $('.toViewMore').click(function () {
        $('#application_content').slideToggle();
        if ($(this).attr('data-flag') == 0) {
            $(this).find('text').text('向上收缩');
            $(this).find('img').css("transform", "rotate(180deg)");
            $(this).attr('data-flag', 1)
        } else {
            $(this).find('text').text('查看更多');
            $(this).find('img').css("transform", "rotate(0deg)");
            $(this).attr('data-flag', 0)
        }

    });
});
//新闻 tab切换事件
$(function () {
    $('#newsInformation_tabs a').click(function (e) {
        e.preventDefault();
        var array = $("#newsInformation_tabs .swich_btn_item") // 主元素
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if ($(this).parent().attr('data-index') == index) {
                $('#' + $(this).attr('title')).show(1000);
                $(this).parent().addClass("swich_btn_item_active");
            } else {
                $(element).removeClass("swich_btn_item_active")
                $('#' + $(element).find('a').attr('title')).hide();
            }
        }
    })
});
//版本 tab切换事件
$(function () {
    $('#version_tabs a').click(function (e) {
        e.preventDefault();
        var array = $("#version_tabs .swich_btn_item") // 主元素
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if ($(this).parent().attr('data-index') == index) {
                $('#' + $(this).attr('title')).show(1000);
                $(this).parent().addClass("swich_btn_item_active");
            } else {
                $(element).removeClass("swich_btn_item_active")
                $('#' + $(element).find('a').attr('title')).hide();
            }
        }

        // $('#version_tabs li').removeClass("swich_btn_item_active");
        // $("#version_content div").removeClass("version_show");
        // $(this).parent().addClass("swich_btn_item_active");
        // $('#' + $(this).attr('title')).addClass('version_show');
    })
});
// 客服弹窗
$(function () {
    $('.vta_kefu ').click(function () {
        // $('html,body').addClass('ovfHiden'); //使网页不可滚动
        $('.popup_addLayerMask,.vta_kefu_popup').bind("touchmove", function (e) {
            e.preventDefault();
        });
        $('.vta_kefu_popup').show();
        $('.popup_addLayerMask').show();
    });
});
$(function () {
    $('.shutDownPopup ').click(function () {
        // $('html,body').removeClass('ovfHiden');
        $('.vta_kefu_popup').hide();
        $('.popup_addLayerMask').hide();

    });
});