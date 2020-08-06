data=""
with open('01enero.tex', 'r') as file:
    data = file.read()
file.close()
print(data)
data=data.replace("\\'a","á")
data=data.replace("\\'e","é")
data=data.replace("\\'i","í")
data=data.replace("\\'o","ó")
data=data.replace("\\'u","ú")
data=data.replace("\\cent","")
data=data.replace("\\smallskip","")
data=data.replace("?`","¿")
print(data)
with open('problemas.tex','w') as file:
    file.write(data)