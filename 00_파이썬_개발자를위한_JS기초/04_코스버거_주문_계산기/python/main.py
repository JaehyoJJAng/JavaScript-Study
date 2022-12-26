# 주문의 합계를 계산해 주는 함수
# burger, hotdog, drink는 각 아이템 개수를 뜻합니다.
def order_price(burger, hotdog, drink):
    burger_price = 6000
    hotdog_price = 5000
    drink_price = 3000

    total_price = burger * burger_price + hotdog * hotdog_price + drink * drink_price

    return total_price