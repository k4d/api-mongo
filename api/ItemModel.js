import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	key			: { type : String, required : true },
	title		: { type : String, required : true },
	description	: { type : String },
	createdAt	: {
					type : Date,
					required : true,
					default : Date.now
				},
	updatedAt	: { type : Date },
	isActive	: { type : Boolean, default : false }
});

const Item = mongoose.model( 'Item', ItemSchema );