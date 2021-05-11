data = ""

with open('info.txt', 'a') as f:
    while data != "n":
        data = input("Data: ")
        if data == "n":
            break
        f.write(data)
        f.write('\n')

f.close()
