class TestPlayer:
    def __init__(self, f, s):
        self.f = f
        self.s = s

    def display(self):
        print("First number is: " + str(self.f))
        print("Second number is: " + str(self.s))

    def add(self, one, two):
        print(one + two)



obj1 = TestPlayer(1,2)
obj1.display()
TestPlayer.add(obj1,1,2)