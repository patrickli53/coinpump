from bs4 import BeautifulSoup
import time
from selenium import webdriver
import re
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Sets up database
cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db=firestore.client()

driver = webdriver.Chrome()

driver.get("https://charts.bogged.finance/?token=0x27e89d357957cE332Ff442DB69F4b476401BbBc5")
time.sleep(10)
soup = BeautifulSoup(driver.page_source,'html.parser')
res = soup.find_all('h4', class_='dark:text-white text-gray-800 text-sm md:text-lg')

price = str(res[1])
m = re.search(r'\$(\d+.\d+)', price)
price = str(m.groups()[0])

db.collection("Information").document("GalaxyCoin").update({"price": price})


