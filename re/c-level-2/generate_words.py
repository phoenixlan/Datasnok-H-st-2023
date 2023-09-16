with open("wordlist.txt", "r") as l:
    with open("words.h", "w") as out:
        for idx, word in enumerate(l.readlines()):
            out.write(f"const char* word{idx} = \"{word[:-1]}\";\n")
