---
title: "📈 Send MQTT data til din MQTT broker med Python "
description: "I dette eksempel bruger vi python til at fetche en temperatur fra en online API, og sender dataen til Home Asssistant via MQTT, med et python script."
date: 2022-09-15
tags:
  - python
  - mqtt
---

Et af de emner jeg ser som et naturligt _next step_ for mit _home-lab_ eventyr, kunne sagtens være at nørde noget mere med [**MQTT**](https://www.youtube.com/watch?v=NXyf7tVsi10). Det er kæmpestort i home automation miljøet, men ud over dét er det en, i mine øjne, ret overset protokol, man kan bruge til alt muligt! I dag laver jeg et bare-bones script i python til, hvordan man kommer igang med at publish MQTT messages til sin broker, med specifikke topics.

## MQTT & decouple

Men da vi jo ikke er nogen rock star programmør, starter vi selvfølgeligt ud med at hente arbejdet fra nogen der er. For der findes selvfølgeligt adskillige python biblioteker, der alle kan gøre vores proces endnu nemmere.

### MQTT

Til MQTT delen bruger vi [`paho-mqtt`](https://pypi.org/project/paho-mqtt/) biblioteket, da det giver os en `client` class, der gør det muligt at udgive beskeder på vores interne MQTT netværk.

### decouple

Et andet bibliotek jeg har valgt at tage med, er langt fra nødvendigt, men jeg synes at _best practices_ er gode at træne, og `decouple` kan hjælpe os til at nemt inkludere en `.env` og dens variabler/secrets i et hvert python projekt.

Installer begge dependencies med

```bash
pip install paho-mqtt decouple
```

## .env til "secrets"

Selvom jeg laver et super lille projekt som sådan en MQTT publisher her, vil jeg gerne bestræbe mig efter at gøre tingene så _best practice_ som giver mening. Så at skrive sensitive data som API nøgler i .env filer, o.l prøver jeg at altid have med i mit workflow. Mit ADHD har desværre et par gange efterlad API nøgler på github, så jeg tager det med i samtlige projekter herfra.

Ved man ikke hvad en .env fil er, er det en (skjult) fil, der indeholder de "secrets" du ikke har lyst til at skal figurere i din programkode.

Basicly loader man sin .env fil i koden, så man fx kan skrive `config(msql_pw)` frem for sit faktiske password til sin database, når man skal connecte til den.

### Opret .env fil i dit projektmappe

Alt efter hvilket system du er på, så laver du bare en tom tekstfil som du plejer.
Jeg kører kommandoen
`touch .env`

### Gem dine secrets

```bash
mqtt-broker=192.168.1.100   # Indsæt selv IP adressen til din broker
mqtt-port=1883              # Porten er typisk 1883
mqtt-user=mqtt-user         # Dit brugernavn til din broke
mqtt-pass=k0BNAv612asABXyo6mODi5jXaofI29SxHFVOEGk8JCmF4M+GJpo0g
api-endpoint=https://domæne.org/api/endpoint?query=0secondQuery=1

```

Og så er vi så små også ved at kunne _rigtigt_ gå i gang!

## Sæt i gang!

Vi starter meget klassisk vores python dokument med imports.

```py
import time
import random
import requests
from decouple import config
from paho.mqtt import mqtt_client
```

Efterfulgt af at vi declare vores variabler

```py
URL = config(api-endpoint)
BROKER = config(mqtt-broker)
PORT = config(mqtt-port)
TOPIC = "bankehuset/vand/temperatur/"
CLIENT_ID = f'bankehuset-mqtt-{random.randint(0, 1000)}'
USER = config('mqtt-user')
PASS = config('mqtt-pass')
```

### connect_mqtt()
Vi laver en funktion der connecter vores app til vores MQTT broker. Det er super simpelt, og som taget ud af [pypi-kodeeksemplet](https://pypi.org/project/paho-mqtt/#usage-and-api).
```python
def connect_mqtt():
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print(f"Tilsluttede til `{BROKER}`!")
        else:
            print("Kunne ikke tilslutte, return code %d\n", rc)
    client = mqtt_client.Client(CLIENT_ID) # Henter CLIENT ID fra .env
    client.username_pw_set(USER, PASS)  #           -- || --
    client.on_connect = on_connect      #           -- || --
    client.connect(BROKER, PORT)        #           -- || --
    return client
```



## Fetch dataen fra API'en
Vi skal jo have noget data fra en datakilde, som vi er interesserede i at få enten præsenteret i en graf eller på et dashboard eller lign. Her henter vi temperatur data med `request`' indbyggede `get`funktion fra en node API, hvor vi får responset tilbage i json: 
```py
RESPONSE = requests.get(URL).json()
WATERTEMP = RESPONSE['data'][0]['temperature']
msg = f"{WATERTEMP}"
result = client.publish(TOPIC, msg)
# result: [0, 1]
status = result[0]
```
## Publish dataen til din broker
I én og samme omgang kan vi ligeså godt - nu vi har fat i dataen, skubbe den videre til vores broker, _wrapped_ ind i en publish funktion:
```py
def publish(client):
     while True:
        RESPONSE = requests.get(URL).json()
        WATERTEMP = RESPONSE['data'][0]['temperature']
        msg = f"{WATERTEMP}"    # Vores response indeholde andre vejrdata 
                                # her sendes kun vandtemperaturen.
        result = client.publish(TOPIC, msg)
        status = result[0] # Her tjekker vi status på vores request (0 = OK, 1 = ERR)
        if status == 0:
            print(f"Sendte `{msg}` til `{TOPIC}`")
        else:
            print(f"Kunne ikke sende `{msg}` til `{TOPIC}`")
        # Lige dette projekt kræver at opdatere 
        # oplysningerne hvert kvarter - altså 900 sekunder.
        time.sleep(900)
```



## Komplet kode
Og kæder vi dem alle sammen får vi denne komplette kode

```python
import time
import random
import requests
from decouple import config
from paho.mqtt import mqtt_client

URL = config(api-endpoint)
BROKER = config(mqtt-broker)
PORT = config(mqtt-port)
TOPIC = "bankehuset/vand/temperatur/"
CLIENT_ID = f'bankehuset-mqtt-{random.randint(0, 1000)}'
USER = config('mqtt-user')
PASS = config('mqtt-pass')

def connect_mqtt():
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print(f"Tilsluttede til `{BROKER}`!")
        else:
            print("Kunne ikke tilslutte, return code %d\n", rc)
    client = mqtt_client.Client(CLIENT_ID)
    client.username_pw_set(USER, PASS)
    client.on_connect = on_connect
    client.connect(BROKER, PORT)
    return client

def publish(client):
     while True:
        RESPONSE = requests.get(URL).json()
        WATERTEMP = RESPONSE['data'][0]['temperature']
        msg = f"{WATERTEMP}"
        result = client.publish(TOPIC, msg)
        status = result[0]
        if status == 0:
            print(f"Sendte `{msg}` til `{TOPIC}`")
        else:
            print(f"Kunne ikke sende `{msg}` til `{TOPIC}`")
        time.sleep(900)

def run():
    client = connect_mqtt()
    client.loop()
    publish(client)

if '__name__' == '__main__':
    run()
```
