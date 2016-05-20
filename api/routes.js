import * as controller from './ItemController';

export function connection () {
	controller.connection();
}

export function getItems ( request, response ) {
	return controller.getItems().then( data => response.send( data ) );
}

export function getItem ( request, response ) {
	return controller.getItemById( request.params.id ).then( data => response.send( data ) );
}

export function createItem ( request, response ) {
	return response.send( 'createItem' );
}

export function updateItem ( request, response ) {
	return response.send( 'updateItem' );
}

export function deleteItem ( request, response ) {
	return controller.deleteItem( request.params.id ).then( data => response.send( data ) );
}