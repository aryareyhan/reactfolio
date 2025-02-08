import React from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projectpage.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						linkText={"Github"}
						github={project.link}
						link={`/projects/${index}`}
						thumbnail={`../thumbnail/${project.img}.png`}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
