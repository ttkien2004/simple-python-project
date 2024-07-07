# importing all necessary libraries
import numpy as np
import random
from time import sleep
from player_object import *


def create_board(board):
    for i in range(len(board)):
        row = ''
        for j in range(len(board)):
            row += " |{}|".format(board[i][j])
        print(row, end='\n')


def play_game():
    print("Welcome to our tic-tac-toe game!!!\n")
    print("One player-Type '1'\n"
          "Two player-Type '2'\n")
    option = str(input("Please choose one of two options: "))
    while True:
        if option == "1":
            print("There's nothing here, See you again soon")
            break
        elif option == "2":
            player1 = CreatePlayer("x")
            player2 = CreatePlayer("o")
            pick = True
            player_win = ''
            win = True
            while True:
                create_board(board_game)
                if pick:
                    pick = False
                    player1.player_chooses(board_game)
                else:
                    pick = True
                    player2.player_chooses(board_game)
                if evaluate(board_game) == "tie":
                    print("Tie!!!")
                    break
                elif evaluate(board_game) == "x":
                    player_win = "x"
                    break
                elif evaluate(board_game) == "o":
                    player_win = "o"
                    break
            if win:
                print("Player {} wins".format(player_win))
            else:
                print("Tie!!!")
            break
        else:
            print("Sorry, we don't have that option, please type again!!!")
            option = str(input("Please choose one of two options: "))


play_game()