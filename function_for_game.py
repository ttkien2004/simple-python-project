# Check for empty place on board
def possibilities(board, x, y):
    if board[x][y] == "-":
        return True
    return False


# Evaluate there is a winner or a tie
def check_tie(board):
    # if score == 9, then it will be a tie
    score = 0
    for i in range(len(board)):
        for j in range(len(board)):
            if board[i][j] != "-":
                score += 1
            else:
                return -1
    return score


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


# of their marks in a column row
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


# of their marks in a diagonal row
def diagonal_row(board, player):
    win = True
    y = 0
    for x in range(len(board)):
        if board[x][x] != player:
            win = False
    if win:
        return True
    win = True
    for x in range(len(board)-1, -1, -1):
        if board[x][y] != player:
            win = False
            break
        y += 1
    if win:
        return True
    return win


def evaluate(board):
    winner = ''
    for player in ["x", "o"]:
        if row_win(board,player) or col_win(board,player) or diagonal_row(board,player):
            winner = player
            break

    if check_tie(board) == 9 and winner == '':
        return 'tie'
    return winner


# Evaluate function for player vs AI
def evaluateMove(board, player='x', opponent='o'):
    for move in ["x", "o"]:
        if row_win(board,move) or col_win(board,move) or diagonal_row(board,move):
            if move == player:
                return 10
            elif move == opponent:
                return -10
            break
    return 0