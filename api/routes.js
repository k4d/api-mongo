import * as controller from './ItemController';

let json = {
	data : null
};

export function connection () {
	controller.connection();
}

export function getItems ( request, response ) {
	return controller.getItems().then( data => {
		json.data = data;
		return response.send( json );
	});
}

export function getItem ( request, response ) {

	let id = request.params.id;

	return controller.getItemById( id ).then( data => {
		json.data = data;
		return response.send( json );
	});
}

export function createItem ( request, response ) {
	return controller.createItem( request.body ).then( data => response.send( data ) );
}

export function deleteItem ( request, response ) {
	return controller.deleteItem( request.params.id ).then( data => response.send( data ) );
}