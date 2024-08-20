"use server";

import { CreateUserParams } from "../../types/types";
import { appwrite_users } from "../appWrite/appWrite.config";
import { ID, Query } from "node-appwrite";

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    console.log("im here");
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newuser = await appwrite_users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await appwrite_users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};
