f = open('info.txt', 'r')
readFile = f.read()
splitFile = readFile.split('\n')
splitFile = list(filter(None, splitFile))
print(splitFile)
f.close()

