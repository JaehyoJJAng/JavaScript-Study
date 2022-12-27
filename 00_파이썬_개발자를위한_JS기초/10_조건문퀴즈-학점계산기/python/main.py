def print_grade(midterm_score, final_score):
    total_score = midterm_score + final_score

    if total_score >= 90:
        print('A')
    elif total_score >= 80:
        print('B')
    elif total_score >= 70:
        print('C')
    elif total_score >= 60:
        print('D')
    else:
        print('F')