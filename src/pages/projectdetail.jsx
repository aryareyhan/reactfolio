import React from "react";
import { useParams } from "react-router-dom";
import INFO from "../data/user";  // Assuming the data file is the same

const ProjectDetail = () => {
	const { index } = useParams();
	const projectIndex = parseInt(index, 10);  // Convert the index parameter to a number
	const project = INFO.projects[projectIndex];

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<div className="project-detail">
			<h1>{project.title}</h1>
			<p>{project.description}</p>
			<a href={project.link} target="_blank" rel="noopener noreferrer">
				{project.linkText}
			</a>
			{/* Add more project details here */}
		</div>
	);
};

export default ProjectDetail;
