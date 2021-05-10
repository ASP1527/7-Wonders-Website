data = ""

with open('info.txt', 'a') as f:
    while data != "n":
        data = input("Data: ")
        f.write(data)
        f.write('\n')

f.close()
