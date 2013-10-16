actual_word = ['F', 'O', 'X']
guessed_word = ['', '', '']

def guess_word():
    while actual_word[:] != guessed_word[:]:
        i = 0
        guess = raw_input("Guess a letter: ")
        for i in range(len(actual_word)):
            if actual_word[i] ==guess:
                guessed_word[i] = actual_word[i]
                print "Congrats, you got a letter!"
        print guessed_word
    print "Congratulations, you won!"

guess_word()