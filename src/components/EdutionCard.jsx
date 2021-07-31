import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const EdutionCard = ({ education }) => {
	return (
		<Fade right duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 style={{ color: '#007acc' }}>
								{education.schoolName}
							</h5>
							<h6>{education.subHeader}</h6>
							<Badge style={{ background: '#007acc', color: 'white' }} className="mr-1">
								{education.duration}
							</Badge>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default EdutionCard;
