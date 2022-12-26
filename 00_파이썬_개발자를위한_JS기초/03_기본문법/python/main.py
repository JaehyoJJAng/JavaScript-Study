# 미술관 티켓 가격을 계산해주는 함수

def ticket_price(standard,student):
  standard_price = 150000
  student_price = 8000

  total_price = (standard * standard_price) + (student * student_price)
  return total_price