import express		from 'express';
import * as routes	from './routes';
import config		from './config';

const APP = express();

routes.connection();

APP.get( '/', routes.getItems );

APP.get( '/items', routes.getItems );

APP.get( '/items/:id', routes.getItem );

APP.delete( '/items/:id', routes.deleteItem );

APP.listen( config.serverPort, () => {
	console.log( `Server is running on port ${config.serverPort}` );
});