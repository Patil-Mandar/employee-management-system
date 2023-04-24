import mongoose from "mongoose";

const connectMongo = async () => {
	try {
		mongoose.set("strictQuery", true);
		const { connection } = await mongoose.connect('mongodb+srv://manomay15:Manomay15@cluster0.5bcl5ba.mongodb.net/test');

		if (connection.readyState == 1) {
			console.log("Database Connected");
		}
	} catch (errors) {
		return Promise.reject(errors);
	}
};

export default connectMongo;
