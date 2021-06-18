
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


"""
Get serviceAccountKey.json through Firebase: Project settings > Service accounts > Click python > Press generate new private key button

requires firebase_admin module: pip install firebase_admin

"""
# Sets up database
cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db=firestore.client()




def ResetWeeklyVotes():
    f=open("backup.txt", "w")
    # doc
    coins = db.collection("Coins").get()

    for coin in coins:
        key = coin.id
        f.write("%s : %s\n" % (coin.id, coin.to_dict()["WeeklyVotes"]))
        db.collection("Coins").document(key).update({"WeeklyVotes": 0})

    f.close()

#MAIN
def Main():
    val = input("Do you want to reset the weekly leaderboard votes? (y/n)\n")

    if (val == "y"):
        ResetWeeklyVotes()
    
    print("Done")

Main()