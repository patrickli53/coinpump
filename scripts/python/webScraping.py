from bs4 import BeautifulSoup
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import re
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

chrome_options = Options()
#chrome_options.add_argument("--headless")
driver = webdriver.Chrome(options=chrome_options)

# Sets up database
cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db=firestore.client()

resetMin = 5;

def updatePrice():
    driver.get("https://charts.bogged.finance/?token=0x27e89d357957cE332Ff442DB69F4b476401BbBc5")

    time.sleep(10)
    soup = BeautifulSoup(driver.page_source,'html.parser')
    res = soup.find_all('h4', class_='dark:text-white text-gray-800 text-sm md:text-lg')

    price = str(res[1])
    m = re.search(r'\$(\d+.\d+)', price)
    price = str(m.groups()[0])
    print("Price updated to " + price)
    db.collection("Information").document("GalaxyCoin").update({"price": price})


print("[INFO] Starting to scrape the web")

while(True):
    try:
        print("Updating price")
        updatePrice()
        #time.sleep(60*resetMin)
        time.sleep(5*60)
    except:
        print("Error scraping the web, waiting 1 minute before next attempt")
        time.sleep(60)


print("[INFO] Program exited")