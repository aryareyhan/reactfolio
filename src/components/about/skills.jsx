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
import { faC } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
	return (
		<div style={{ display: "flex", gap: "5em", padding: "1em" }}>
			<div className="socials">
				<div className="social">
					<a
						href={INFO.socials.instagram}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faAndroid}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Android</div>
					</a>
				</div>

				<div className="social">
					<a
						href={INFO.socials.twitter}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faJava}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Java</div>
					</a>
				</div>

				<div className="social">
					<a
						href={INFO.socials.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faSwift}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Swift</div>
					</a>
				</div>

				<div className="social">
					<a
						href={INFO.socials.spotify}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faReact}
								className="social-icon"
							/>
						</div>
						<div className="social-text">React</div>
					</a>
				</div>
			</div>
			<div className="socials">
				<div className="social">
					<a
						href={INFO.socials.instagram}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faHtml5}
								className="social-icon"
							/>
						</div>
						<div className="social-text">HTML5/CSS</div>
					</a>
				</div>

				<div className="social">
					<a
						href={INFO.socials.twitter}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faJsSquare}
								className="social-icon"
							/>
						</div>
						<div className="social-text">JavaScript</div>
					</a>
				</div>

				<div className="social">
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faPython}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Python</div>
					</a>
				</div>

				<div className="social">
					<a
						href={INFO.socials.spotify}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faC}
								className="social-icon"
							/>
						</div>
						<div className="social-text">C</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Skills;
