import {StreamChat} from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    console.error("stream api key or secret key is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
    try {
        if (!userData || !userData.id) {
            throw new Error("User ID is required for upserting a user.");
        }

        await streamClient.upsertUser(userData);
        return userData;
    } catch (error) {
        console.log("Error upserting user in Stream:", error.message);
    }
};


export const generateStreamToken = (userId) => {}

