import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, github } = props;
	const navigate = useNavigate();

	const navigateToDetail = () => {
		navigate(link);
	};

	return (
		<React.Fragment>
			<div className="project" onClick={navigateToDetail}>
				<div className="project-container">
					<div className="project-title">
						<div className="social-icon">
							<FontAwesomeIcon
								icon={logo}
								className="social-icon"
							/>
						</div>
						{title}
					</div>
					{/* <div className="project-description">{description}</div> */}
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
