from function_for_game import *
from player_object import *


def minmax(board, depth, isMax, player='x', opponent='o'):
    score = evaluateMove(board)

    if score == 10 or score == -10:
        return score

    # This is a tie
    if check_tie(board) == 9:
        return 0

    # If this is a Maximize player
    if isMax:
        best = -1000
        for i in range(len(board)):
            for j in range(len(board)):
                # Check if cell is empty
                if board[i][j] == "-":

                    # Make the move
                    board[i][j] = player

                    # Call minimax recursive and
                    # Choose the best value
                    best = max(best, minmax(board,depth+1,False))

                    # Undo the move
                    board[i][j] = "-"
        return best
    # If this is a Minimize player
    else:
        best = 1000

        for i in range(len(board)):
            for j in range(len(board)):
                # Check if cell is empty
                if board[i][j] == "-":

                    # Make the move
                    board[i][j] = opponent

                    # Call minimax recursive and
                    # Choose the best value
                    best = min(best, minmax(board,depth+1,True))

                    # Undo the move
                    board[i][j] = "-"
        return best


class AI_Object:
    def __init__(self, player):
        self.player = player

    # Find the best move for AI
    def findBestMove(self, board):
        bestVal = 1000
        (best_x, best_y) = (-1,-1)

        # Traverse all cells, evaluate minmax function
        for i in range(len(board)):
            for j in range(len(board)):
                if board[i][j] == "-":
                    board[i][j] = self.player

                    # Compute the current move val
                    moveVal = minmax(board,0,True)

                    # Undo the move
                    board[i][j] = "-"

                    # Check if current move > bestMove
                    if moveVal < bestVal:
                        (best_x, best_y) = (i, j)
                        bestVal = moveVal
        board[best_x][best_y] = self.player
        print("AI moves at x = {}, y = {}".format(best_x,best_y))