//funcional component
import React from 'react';
import Noticias from './Noticias'
import PropTypes from 'prop-types';

const ListaNoticias = ({noticias}) =>  ( 
		<div className="row">
			{noticias.map(noticia => (
			    <Noticias 
			    	key = {noticia.url}
			    	noticias={noticia}
			    />
			))}
		</div>
	);

ListaNoticias.propTypes = {
	noticias : PropTypes.array.isRequired
}
export default ListaNoticias;