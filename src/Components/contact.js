 import React, {Component} from 'react';
 import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
	render () {
		return(
			<div className="contact-body">
			  <Grid className="contact-grid">
			    <Cell col={6}>
			      <h2>Jens Tofte</h2>
			      <image
			      	src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/50119480_10213761837141802_2029511998869340160_n.jpg?_nc_cat=100&_nc_ht=scontent-jnb1-1.xx&oh=c59015c3cb1d50188c19985df5d2d9c5&oe=5D35E081"
			      	alt="avatar"
			      	style={{height: '250px'}}
			      	/>
			      	<p style={{width: '75%', margin: 'auto', padidngTop: '1em'}} >I consider myself to be a intelligent and presentable individual, with an out-going likable personality and an ability to work effectively as part of a team as well on own initiative. I possess a fresh, modern approach to the IT industry, and employ creative and enthusiastic methods to problem solving. Two of my strongest points are firstly the ability to transfer my own knowledge and understanding to fellow students, and secondly my competency in being able to use a variety of key software packages to a high standard of accuracy. I am a determined individual who sees tasks through to the end, whilst planning and organising activities to meet timelines.</p>
			    </Cell>
			    <Cell col={6}>
			    	<h2>Contact Me</h2>
			    	<hr/>
			    	<div className="contact-list">
			    		<List>
					  <ListItem>
					    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
					    	<i className="fa fa-phone-square" arial-hidden= "true"/>
					    	(+27) 61-650-9469
					    </ListItemContent>
					    </ListItem>

					    <ListItem>
					    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
					    	<i className="fa fa-envelope" arial-hidden= "true"/>
					    	tofmanjens@gmail.com
					    </ListItemContent>
					    </ListItem>

					    <ListItem>
					    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
					    	<i className="fa fa-skype" arial-hidden= "true"/>
					    	jens.skype
					    </ListItemContent>
					    </ListItem>
					</List>
			    	</div>
			    	
			    </Cell>
			  </Grid>
			</div>
		)
	}
}

export default Contact;