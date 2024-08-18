import * as sdk from "node-appwrite";

const {
  APP_WRITE_PROJECT_ID,
  APP_WRITE_API_KEY,
  APP_WRITE_DB_ID,
  APP_WRITE_PATIENT_COLLECTION_ID,
  APP_WRITE_DOCTOR_COLLECTION_ID,
  APP_WRITE_APPOINTMENT_COLLECTION_ID,
  NEXT_APP_WRITE_PUBLIC_BUCKET_IT,
  NEXT_PUBLIC_ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint(NEXT_PUBLIC_ENDPOINT!)
  .setProject(APP_WRITE_PROJECT_ID!)
  .setKey(APP_WRITE_API_KEY!);

export const appwrite_databases = new sdk.Databases(client);
export const appwrite_storage = new sdk.Storage(client);
export const appwrite_messaging = new sdk.Messaging(client);
export const appwrite_users = new sdk.Users(client);
