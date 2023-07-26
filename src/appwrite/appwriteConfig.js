import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("64c1307d5068032916f9")

export const account = new Account(client)

//Database

export const databases = new Databases(client, "64c1307d5068032916f9")