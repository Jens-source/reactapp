import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
  '4.jpg',
  'images/slide_6.jpg',
  'images/slide_7.jpg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true
}

class Landing extends Component {
	render () {
		return(
			 <Fade>
	      <div className="each-fade">
	        <div className="image-container">
	          <img src="https://www.relish.co.uk/sites/default/files/styles/header_image/public/header_images/relbar_0.jpg?itok=-w4c0p73" />
	        </div>
	       </div>
	      <div className="each-fade">
	        <div className="image-container">
	          <img src="https://www.villasbytekoa.com/wp-content/uploads/2016/09/bartender.jpg" />
	        </div>
	      </div>
	      <div className="each-fade">
	        <div className="image-container">
	          <img src="http://www.weddingcocktailbars.com/wp-content/uploads/2016/01/Wedding-Champagne-Reception.jpg" />
	        </div>
	      </div>
	    </Fade>
	 
		)
	}
}
export default Landing;