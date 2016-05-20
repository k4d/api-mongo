import express		from 'express';
import * as routes	from './routes';

const APP  = express();

APP.get( '/', routes.getAll );

APP.get( '/items', routes.getAll );

APP.get( '/item/:id', routes.getItemById );

APP.listen( 8080, () => {
	console.log( 'Server is running on port 8080' );
});