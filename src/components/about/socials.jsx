import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
	faSpotify,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div style={{ display: "flex", gap: "5em" }}>
			<div className="socials">
				<div className="social">
					<a
						href={INFO.socials.instagram}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faInstagram}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on Instagram</div>
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
								icon={faGithub}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on GitHub</div>
					</a>
				</div>
			</div>
			<div className="socials">
				<div className="social">
					<a
						href={INFO.socials.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faLinkedin}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on LinkedIn</div>
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
								icon={faSpotify}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on Spotify</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
