import React from "react";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link } = props;

	const descriptionLines = description.split("\n");

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-right-side">
					<div className="article-title">{title}</div>
					<div className="article-date">{date}</div>
					<div className="article-description">
						{descriptionLines.map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
