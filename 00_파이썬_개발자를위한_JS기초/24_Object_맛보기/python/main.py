class Object:
    def print_object(self):
        data = {
            'key' : 'value1',
            'key2': 'value2'
        }

        key = 'key2' 

        print(data['key']) # value1
        print(data[key])   # value2

if __name__ == '__main__':
    object = Object()
    object.print_object()