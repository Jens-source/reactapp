import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';



class Resume extends Component {
	render () {
		return(
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{textAlign: 'center'}}>
							<img
								src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
								alt="avatar"
								style={{height: '200px'}}
								/>
						</div>
							<h2 style={{paddingTop: '2em'}}>Jens Tofte</h2>
							<h4 style={{color: 'grey'}}>Programmer</h4>
							<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
							<p>There is no one reason why I want to study computer science at university, instead there are a combination of them. Since my earliest childhood I have always been interested in computers, both their hardware and software. In the modern world it’s virtually impossible to escape computer’s, they are part of so many things that touch our lives, making them easier and creating solutions for so many complex and challenging problems. Computer science is at the forefront of breakthroughs in science, technology and mathematics, and at the heart of virtually all cutting edge discoveries in fields like engineering, business, entertainment and education. It’s a interdisciplinary and dynamic subject, whose roots include mathematics, physics and electronics.</p>
							<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
							<h5>Address</h5>
							<p>Muir street 44</p>
							<p>Heidelberg</p>
							<p>6665</p>
							<h5>Phone</h5>
							<p>(+27) 61-650-9469</p>
							<h5>Email</h5>
							<p>tofmanjens@gmail.com</p>
							<h5>Web</h5>
							<p>mywebsite.com</p>
							<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>
						<Education
							startYear={2017}
							endYear={2020}
							schoolName="University of South Africa"
							schoolDescription="Bachelors of Science in Computing - A systematic and coherent body of knowledge. An understanding of underlying concepts and principles of computing and the ability to apply this in the workplace. A high level of cognitive and other generic skills including problem-solving, written and spoken communication. The ability to access and evaluate scientific information; competence in applying knowledge through basic research methods and practice. Specific skills and applied competence leading to continued personal intellectual growth, gainful economic activity and valuable contributions to society in science and technology."
						/>

						<Education
							startYear={2018}
							schoolName="Udemy"
							schoolDescription="The Complete 2019 Web Developer in 2018 Zero to Mastery. Building websites and apps using HTML5, CSS and Javascript. Also, create an api server using react and postgres."
						/>
						<hr style={{borderTop: '3px solid #e22947'}}/>
						<h2>Experience</h2>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;