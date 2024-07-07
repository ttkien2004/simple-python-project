class Test_player:
    f = 0
    s = 0
    def __int__(self, f, s):
        self.f = f
        self.s = s
    def display(self):
        print("First number is: " + str(self.f))
        print("Second number is: " + str(self.s))


obj1 = Test_player(1,2)