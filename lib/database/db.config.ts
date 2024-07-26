// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
	throw new Error(
		'Invalid/Missing environment variable: "MONGODB_URI"',
	);
}

const uri = process.env.MONGODB_URI;
const options = {
	serverSelectionTimeoutMS: 5000, // Increase this timeout as needed
	connectTimeoutMS: 10000, // Connection timeout
	socketTimeoutMS: 45000, // Socket timeout
};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	let globalWithMongo = global as typeof globalThis & {
		_mongoClientPromise?: Promise<MongoClient>;
	};

	if (!globalWithMongo._mongoClientPromise) {
		client = new MongoClient(uri, options);
		globalWithMongo._mongoClientPromise =
			client.connect();
	}
	clientPromise = globalWithMongo._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

export default clientPromise;

export const connectToDB = async () => {
	try {
		if (mongoose.connection.readyState >= 1) {
			console.log("--->Mongodb already connected!!!");
		} else {
			await mongoose.connect(uri, options);
			console.log("--->Mongodb connected!!!");
		}
	} catch (error) {
		console.log(error);
	}
};
