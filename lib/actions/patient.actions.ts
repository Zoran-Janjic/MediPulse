"use server";

import { CreateUserParams } from "../../types/types";
import { appwrite_users } from "../appWrite/appWrite.config";
import { ID, Query } from "node-appwrite";

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newuser = await appwrite_users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    console.log("No error ", newuser);
    return parseStringify(newuser);
  } catch (error: any) {
    if (error?.code === 409) {
      throw new Error("User already exists with this email: " + user.email);
    }
    console.error("An error occurred while creating a new user:", error);
    throw new Error("Failed to create user: " + error.message);
  }
};
