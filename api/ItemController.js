import config from './config';
import mongoose from 'mongoose';
import './ItemModel';

const Item = mongoose.model( 'Item' );

export function connection () {
	mongoose.connect( `mongodb://${config.db.host}/${config.db.name}` );
}

export function getItems () {
	return Item.find();
}

export function getItemById ( id ) {
	return Item.findById( id );
}

export function createItem ( data ) {

	let item = new Item({
		key			: data.key,
		title		: data.title,
		description	: data.description,
		createdAt	: new Date()
	});

	return item.save();
}

export function deleteItem ( id ) {
	return Item.findById( id ).remove();
}