class Object:
    def print_object(self):
        data = {
            'key' : 'value1',
            'key2': 'value2',
            'key3': [
                {
                    '인프런': {
                        '강의' : '기초부터 배우는 파이썬',
                        '시간' : '350분'
                    }
                    }
            ],
            'key4' : {'밥' : '김치'}
        }
        
        key = 'key2' 
        print(data['key']) # value1
        print(data[key])   # value2

if __name__ == '__main__':
    object = Object()
    object.print_object()