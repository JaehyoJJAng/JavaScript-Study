class Celsius:
    def __init__(self,array:list) -> None:
        self.array : list = array 

    def fetch(self,element:int)-> int:
        return (element * 9 / 5) + 32
        
    def print_celsius(self)-> list:
        arrays = [self.fetch(element=element) for element in self.array]
        return arrays

def main():
    celsius = Celsius(array=[27, 25, 26, 22, 28, 27, 21])
    arrays : list = celsius.print_celsius()
    print(arrays)

if __name__ == '__main__':
    main()