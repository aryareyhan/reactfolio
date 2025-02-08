import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faJava,
	faAndroid,
	faSwift,
	faHtml5,
	faJsSquare,
	faPython,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";
import { faC, faDatabase, faF } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
	return (
		<div className="skills-container">
			<div className="skills">
				<div className="social">
					<div>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faAndroid}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Android</div>
					</div>
				</div>

				<div className="social">
					<div>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faJava}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Java</div>
					</div>
				</div>

				<div className="social">
					<div>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faSwift}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Swift</div>
					</div>
				</div>

				<div className="social">
					<div>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faReact}
								className="social-icon"
							/>
						</div>
						<div className="social-text">React</div>
					</div>
				</div>

				<div className="social">
					<div>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faF}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Flutter</div>
					</div>
				</div>
			</div>
			<div className="skills">
				<div className="social">
					<div>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faHtml5}
								className="social-icon"
							/>
						</div>
						<div className="social-text">HTML5/CSS</div>
					</div>
				</div>

				<div className="social">
					<div>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faJsSquare}
								className="social-icon"
							/>
						</div>
						<div className="social-text">JavaScript</div>
					</div>
				</div>

				<div className="social">
					<div>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faPython}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Python</div>
					</div>
				</div>

				<div className="social">
					<div>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faC}
								className="social-icon"
							/>
						</div>
						<div className="social-text">C</div>
					</div>
				</div>

				<div className="social">
					<div>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faDatabase}
								className="social-icon"
							/>
						</div>
						<div className="social-text">SQL</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
