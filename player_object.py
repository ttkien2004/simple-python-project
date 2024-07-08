# Create an empty board
from function_for_game import *
board_game = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
]

board_game_tes = [
    ["x", "o", "x"],
    ["x", "o", "x"],
    ["o", "x", "o"]
]


class CreatePlayer:
    player = ''
    x = -1
    y = -1

    def __init__(self, player):
        self.player = player

    # Let player choose position to move
    def player_chooses(self, board):
        print("Player {} moves:".format(self.player))

        while True:
            try:
                self.x = int(input("Please choose x: "))
                self.y = int(input("Please choose y: "))
                if self.x < 0 or self.x > 2 or self.y < 0 or self.y > 2:
                    print("x: {0} or y: {1} is out of index".format(self.x,self.y))
                    continue
                else:
                    break
            except ValueError:
                print("Error: Your input must be a number!!!")

        pos_x = self.x
        pos_y = self.y
        if possibilities(board, pos_x, pos_y):
            if self.player == "x":
                board[pos_x][pos_y] = "x"
            elif self.player == "o":
                board[pos_x][pos_y] = "o"
        else:
            print("That position has already been filled")