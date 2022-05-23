function open_list() {
    $(".vta_listPopupWindow").toggle();
}
function changeIcon(mainNode, clickNode) {
    if (mainNode) {
        if (mainNode.attr("src").indexOf("down_black.png") >= 0) {
            mainNode.attr("src", "./img/up_blue.png");
            clickNode.addClass('list_item_active');
        } else {
            mainNode.attr("src", "./img/down_black.png");
            clickNode.removeClass('list_item_active');
        }
    }
}
// 弹出来点击事件
$(function () {
    $('.list_item').click(function () {
        // 	// 清除所有效果
        // $(".list_child").hide()
        // $(".list_item img").attr("src", "./img/down_black.png");
        // $(".list_item").removeClass('list_item_active')
        $(this).next('div').slideToggle();
        // 更换图标添加类别
        changeIcon($(this).children('img'), $(this));
    });
});
// 底部
$(function () {
    $('.atBottomThe_item').click(function () {
        var array = $(".atBottomThe_item") // 主元素
        var array_child = $(".atBottomThe_child")//子元素
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if ($(this).attr('data-index') == index) {
                if ($(this).attr('num') == 0) {
                    $(array_child[index]).show()
                    $(this).attr('num', 1)
                    $(element).find('img').attr("src", "./img/up_blue.png");
                    $(element).addClass('list_item_active')
                } else {
                    $(array_child[index]).hide()
                    $(element).find('img').attr("src", "./img/down_black.png");
                    $(element).removeClass('list_item_active')
                    $(this).attr('num', 0)
                }
                // $(this).next('div').slideToggle();
                // changeIcon($(this).children('img'), $(this));
            } else {
                $(element).attr('num', 0)
                $(array_child[index]).hide()
                $(element).removeClass('list_item_active')
                $(element).find('img').attr("src", "./img/down_black.png");
            }
        }
    });
});
//新闻 tab切换事件
$(function () {
    $('#newsInformation_tabs a').click(function (e) {
        e.preventDefault();
        $('#newsInformation_tabs li').removeClass("swich_btn_item_active");
        $("#newsInformation_content div").removeClass("newsInformation_show");
        $(this).parent().addClass("swich_btn_item_active");
        $('#' + $(this).attr('title')).addClass('newsInformation_show');
    })
});
//版本 tab切换事件
$(function () {
    $('#version_tabs a').click(function (e) {
        e.preventDefault();
        $('#version_tabs li').removeClass("swich_btn_item_active");
        $("#version_content div").removeClass("version_show");
        $(this).parent().addClass("swich_btn_item_active");
        $('#' + $(this).attr('title')).addClass('version_show');
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