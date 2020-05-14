// 获取购物车数据
function getShoppingCar(cb) {
    // 从cookie中获取用户名
    $.get("./php/getShoppingCart.php", {
        "vipName": "朱三"
    }, function (data) {
        let htmlStr = "";
        data.forEach(item => {
            htmlStr += `
                <div style="height: auto;">
                    <div class="ord-body">
                        <div class="shop clear_fix">
                            <div class="shop-info">
                                <div class="cart-checkbox">
                                    <input type="text">
                                    <label for=""></label>  
                                </div>
                                <span class="iconfont icon-tianmao"></span>
                                店铺：
                                <a href="#">${item.beiyong2}</a>
                                <span class="ww-light">
                                    <a href="#">
                                        <span class="iconfont icon-wangwang"></span>
                                    </a>
                                </span>
                                <span class="shop-coupon">
                                    <em>优惠券</em>
                                    <span class="iconfont icon-angle-down"></span>
                                </span>
                            </div>
                        </div>
                        <div class="ord-content">
                            <div class="item-list">
                                <div class="bundle-last">
                                    <div class="bundle-hd">
                                        <div class="td-chk"></div>
                                        <div class="bd-title">
                                            2件包邮
                                            <i class="icon-bd-title"></i>
                                        </div>
                                        <div class="bd-promos">
                                            <div class="bd-has-promo">
                                                已享优惠：
                                                <span class="bd-has-promo-content">包邮</span>
                                                &nbsp;
                                            </div>
                                            <div class="act-promo">
                                                <div class="act-promo-warpper">
                                                    <ul>
                                                        <li>满两件，包邮</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bundle-main">
                                        <div class="item-list">
                                            <div class="item-holder">
                                                <div class="item-body">
                                                    <ul class="item-content clear_fix">
                                                        <li class="td td-chk">
                                                            <div class="td-inner">
                                                                <div style="height: 82px;position: relative;">
                                                                    <div class="cart-checkbox">
                                                                        <input type="text">
                                                                        <label for=""></label>  
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="td td-item">
                                                            <div class="td-inner">
                                                                <div class="item-pic">
                                                                    <a href="#">
                                                                        <img src="${item.goodsImg}" alt="">
                                                                    </a>
                                                                </div>
                                                                <div class="item-info">
                                                                    <div class="item-basic-info">
                                                                        <a href="#" class="item-title">${item.goodsDesc}</a>
                                                                    </div>
                                                                    <div class="item-other-info">
                                                                        <div class="promos-logos"></div>
                                                                        <div class="item-icon-list clear_fix">
                                                                            <div class="item-icons">
                                                                                <span class="item-icon">
                                                                                    <img src="https://assets.alicdn.com/sys/common/icon/trade/xcard.png" alt="">
                                                                                </span>
                                                                                <a href="" class="item-icon">
                                                                                    <img src="https://img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png" alt="">
                                                                                </a>
                                                                                <a href="#" class="item-icon">
                                                                                    <img src="https://img.alicdn.com/tps/i4/T1BCidFrNlXXaSQP_X-16-16.png" alt="">
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="td td-info">
                                                            <div class="item-props">
                                                            <p class="sku-line">颜色分类：${item.beiyong4}</p> 
                                                            </div>
                                                        </li>
                                                        <li class="td td-price">
                                                            <div class="td-inner">
                                                                <div class="price-content">
                                                                    <div class="price-line">
                                                                        <em>￥${item.goodsPrice}</em>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="td td-amount">
                                                            <div class="td-inner">
                                                                <div class="item-amount">
                                                                    <a href="#" class="no-minus">-</a>
                                                                    <input type="text" class="text-amount" value="${item.goodsCount}">
                                                                    <a href="#" class="plus">+</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="td td-sum">
                                                            <div class="td-inner">
                                                                <em class="number">￥${item.goodsPrice*item.goodsCount}</em>
                                                            </div>
                                                        </li>
                                                        <li class="td td-op">
                                                            <div class="td-inner">
                                                                <a href="#">移入收藏夹</a>
                                                                <a href="#" class="delBtn">删除</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        $(".ord-list").html(htmlStr);
        cb();
    }, "json")
}

$(function(){
    getShoppingCar(addEvent)

    function addEvent(){
        $(".plus").click(function(){
            let count = parseInt($(".text-amount").val());
            count++;
            $(".text-amount").val(count)
            totalMoney()
        })

        $(".no-minus").click(function(){
            let count = parseInt($(".text-amount").val());
            count--;
            if(count==0){
                count=1;
            };
            $(".text-amount").val(count);
            totalMoney()
        })
    }
})
function totalMoney(){
    let money = 0;

    let $totalMoney =$(".number").html();
    $totalMoney.each(function(){
        money += $totalMoney;
    });
    $(".price em").html(money)
}

