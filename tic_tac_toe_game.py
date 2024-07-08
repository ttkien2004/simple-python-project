# importing all necessary libraries
import numpy as np
import random
from time import sleep
from player_object import *
from function_for_game import *
from AI_Object import *


def create_board(board):
    for i in range(len(board)):
        row = ''
        for j in range(len(board)):
            row += " |{}|".format(board[i][j])
        print(row, end='\n')


def check_winner_or_tie(board):
    player_win = ""
    if evaluate(board) == "tie":
        player_win = "tie"
    elif evaluate(board) == "x":
        player_win = "x"
    elif evaluate(board) == "o":
        player_win = "o"
    return player_win

def play_game():
    print("Welcome to our tic-tac-toe game!!!\n")
    print("One player-Type '1'\n"
          "Two player-Type '2'\n")
    option = str(input("Please choose one of two options: "))
    while True:
        if option == "1":
            player = CreatePlayer("x")
            AI = AI_Object("o")
            turn = True
            res = ''
            while True:
                create_board(board_game)
                # Lượt của player
                if turn:
                    turn = False
                    player.player_chooses(board_game)
                # Lượt của AI
                else:
                    turn = True
                    AI.findBestMove(board_game)

                # Check whether there is a winner or tie
                if check_winner_or_tie(board_game) != "":
                    res = check_winner_or_tie(board_game)
                    break
            if res == "tie":
                print("Tie!!!")
            else:
                print("Player {} wins!!!".format(res))
            break

        elif option == "2":
            player1 = CreatePlayer("x")
            player2 = CreatePlayer("o")
            pick = True
            res = ""
            while True:
                create_board(board_game)
                if pick:
                    pick = False
                    player1.player_chooses(board_game)
                else:
                    pick = True
                    player2.player_chooses(board_game)
                # Check whether there is a winner or tie
                if check_winner_or_tie(board_game) != "":
                    res = check_winner_or_tie(board_game)
                    break
            if res == "tie":
                print("Tie!!!")
            else:
                print("Player {} wins!!!".format(res))
            break
        else:
            print("Sorry, we don't have that option, please type again!!!")
            option = str(input("Please choose one of two options: "))


play_game()
