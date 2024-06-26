import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/readArticle.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectDetail = () => {
	const navigate = useNavigate();

	const { index } = useParams();
	const projectIndex = parseInt(index, 10);
	const project = INFO.projects[projectIndex];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [project]);

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project.description} />
			</Helmet>

			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="title read-article-title">
								{project.title}
							</div>

							<div className="read-article-body">
								{project.description}
							</div>

							<div className="read-article-img-container">
								<img
									src={`../projects/${project.img}.png`}
									alt="none"
									className="read-article-img"
								/>
							</div>

							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								onClick={(e) => e.stopPropagation()}
							>
								<div className="project-link">
									<div className="project-link-icon">
										<FontAwesomeIcon icon={faLink} />
									</div>
									<div className="project-link-text">
										View project on Github
									</div>
								</div>
							</a>
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectDetail;
