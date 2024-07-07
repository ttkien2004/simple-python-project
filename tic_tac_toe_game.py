# importing all neccessary libraries
import numpy as np
import random
from time import sleep

# Create an empty board
board_game = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
]
def create_board(board):
    for i in range(len(board)):
        row = ''
        for j in range(len(board)):
            row += " |{}|".format(board[i][j])
        print(row, end='\n')

# Check for empty place on board
def possibilities(board, x, y):
    if board[x][y] == "-": return True
    return False

# Let player choose a place in a board
def player_chooses(board, player):
    x = int(input("Please choose x: "))
    y = int(input("Please choose y: "))
    if possibilities(board, x, y):
        if player == "x":
            board[x][y] = "x"
        elif player == "o":
            board[x][y] = "o"
    else:
        print("That position has already been filled")

# Check whether the player has three
# of their marks in a horizontal row
def row_win(board, player):
    for x in range(len(board)):
        win = True
        for y in range(len(board)):
            if board[x][y] != player:
                win = False
                continue
        if win:
            return True
    return False

#of their marks in a column row
def col_win(board, player):
    for x in range(len(board)):
        win = True
        for y in range(len(board)):
            if board[y][x] != player:
                win = False
                continue
        if win:
            return True
    return False

#of their marks in a diagonal row
def diagonal_row(board, player):
    win = True
    y = 0
    for x in range(len(board)):
        if board[x][x] != player:
            win = False
    if win:
        return True
    win = True
    for x in range(len(board), -1, -1):
        if board[x][y] != player:
            win = False
            break
        y += 1
    if win:
        return True
    return win

#Evalute there is a winner or a tie
def check_tie(board):
    score = 1
    for i in range(len(board)):
        for j in range(len(board)):
            if board[i][j] != "-":
                score += 1
            else:
                return -1
    return score

def evaluate(board):
    winner = ''
    for player in ["x", "o"]:
        if row_win(board,player) or col_win(board,player) or diagonal_row(board,player):
            winner = player

    if check_tie(board) != -1 and winner == '':
        return winner
    return winner

print("Welcome to our tic-tac-toe game!!!\n")
print("One player-Type '1'\n"
      "Two player-Type '2'\n")
print(input("Please choose one of two options: "))
