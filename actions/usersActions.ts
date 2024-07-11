"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "@/lib/database/db.config";
import {
	CreateUserParams,
	UpdateUserParams,
} from "@/types";
import User from "@/lib/database/models/userSchema";

export async function createUser(user: CreateUserParams) {
	try {
		await connectToDB();
		const newUser = await User.create(user);
		return JSON.parse(JSON.stringify(newUser));
	} catch (error) {
		console.log(error);
	}
}

export async function getUserById(userId: string) {
	try {
		await connectToDB();

		const user = await User.findById(userId);

		if (!user) throw new Error("User not found");
		return JSON.parse(JSON.stringify(user));
	} catch (error) {
		console.log(error);
	}
}

export async function updateUser(
	clerkId: string,
	user: UpdateUserParams,
) {
	try {
		await connectToDB();

		const updatedUser = await User.findOneAndUpdate(
			{ clerkId },
			user,
			{ new: true },
		);

		if (!updatedUser)
			throw new Error("User update failed");
		return JSON.parse(JSON.stringify(updatedUser));
	} catch (error) {
		console.log(error);
	}
}

export async function deleteUser(clerkId: string) {
	try {
		await connectToDB();

		// Find user to delete
		const userToDelete = await User.findOne({
			clerkId,
		});

		if (!userToDelete) {
			throw new Error("User not found");
		}

		// Unlink relationships

		// Delete user
		const deletedUser = await User.findByIdAndDelete(
			userToDelete._id,
		);
		revalidatePath("/");

		return deletedUser
			? JSON.parse(JSON.stringify(deletedUser))
			: null;
	} catch (error) {
		console.log(error);
	}
}
