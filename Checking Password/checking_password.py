import re

def cek(sandi):
    score = 0
    keluaran = []
    salah = True
    if len(sandi) > 8:
        score += 1
    else:
        keluaran.append("Password minimal 8 karakter. ")

    if re.search(r"[a-z]", sandi):
        if(re.search(r"[A-Z]", sandi)):
            if(re.search(r"[*_#]", sandi)):
                if(re.search(r"[^a-zA-Z0-9*_#]", sandi)):
                    salah = False
                else:
                    score +=1
            else:
                salah = False
        else:
            salah = False
    else:
        salah = False

    if(salah == False):
        keluaran.append("Password minimal mengandung huruf kecil, kapital, dan salah satu dari *, _, #")

    if(salah == True):
        score+=1
        
    if(score == 2):
        kekuatan = "Kuat Sekali"
    elif(score == 1):
        kekuatan = "Kurang Kuat"
    else:
        kekuatan = "Lemah Sekali"
    return keluaran, kekuatan

sandi = input("Masukkan Sandi: ")
keluaran, kekuatan = cek(sandi)
print("Status sandi: ", kekuatan)
if(kekuatan == "Kuat Sekali"):
    print("Komentar: Wow, Password kamu kuat, hebat!")
else:
    print("Komentar: ", keluaran)


