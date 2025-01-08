import pandas as pd


df = pd.read_csv('C:/Users/usuario/Downloads/renewable-share-energy.csv')


df.to_json('renewable-data.json', orient='records')