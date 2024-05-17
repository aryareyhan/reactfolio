import {
	faAndroid,
	faJava,
	faJsSquare,
	faSwift,
} from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";

const INFO = {
	main: {
		title: "Arya's Portfolio",
		name: "Arya R.",
		email: "aryspoty@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://x.com/aryareyhann/",
		github: "https://github.com/aryareyhan/",
		linkedin: "https://linkedin.com/in/aryareyhan/",
		instagram: "https://instagram.com/aryareyhann",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
		spotify: "https://open.spotify.com/user/aryareyhan/",
	},

	homepage: {
		title: "Mobile App and Full Stack Developer.",
		description:
			"I am a mobile developer with expertise in creating robust, user-friendly applications for both iOS and Android platforms. I enjoy solving complex problems and continuously expanding my skill set. Currently, I am also studying full stack web development to broaden my capabilities and stay ahead in the industry. I am passionate about writing high-quality code that adheres to best practices and industry standards. I am always seeking new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "I'm Arya R., finding happiness in every day, here in Indonesia.",
		description:
			"As a Computer Science student, I am deeply passionate about mobile app technology, with a specific focus on Android programming. My enthusiasm for this field drives me to continually explore and expand my knowledge. I have a proven track record as a fast learner, especially when it comes to topics that genuinely captivate my interest. My ability to effectively communicate and connect with others sets me apart. I excel in public speaking and have leveraged my skills as an MC for various online organizational events. This experience has honed my interpersonal and leadership skills, allowing me to collaborate engage with audiences effectively.",
		description2:
			"I've worked on several projects over the years and I'm proud of the progress I've made. Most of my work has been focused on mobile app development. While I have only a few projects, I strive to create high-quality, impactful apps. Currently, I'm doing an internship where I'm further honing my skills.",
	},

	articles: {
		title: "Explore my educational, work, and organizational experiences.",
		description: "",
	},

	projects: [
		{
			title: "GameHI",
			description:
				"GameHI is my playground for mastering Swift Storyboard, boasting a sleek and intuitive UI design. This mobile game management app is where simplicity meets functionality, serving as my learning canvas for Swift Storyboard proficiency.",
			logo: faSwift,
			linkText: "View Project",
			link: "https://github.com/aryareyhan/GameHI",
		},

		{
			title: "Bluejack Pharmacy",
			description:
				"Bluejack Pharmacy serves as my learning ground for mastering simple CRUD operations on Android using Java. It's a mobile pharmacy app empowering users to purchase medicines conveniently.",
			logo: faAndroid,
			linkText: "View Project",
			link: "https://github.com/aryareyhan/BluejackV2",
		},

		{
			title: "Redbull News",
			description:
				"Redbull News marks my debut in Android app development using Java for the platform. It's my initial foray into the language, designed to immerse myself in its intricacies and functionalities.",
			logo: faAndroid,
			linkText: "View Project",
			link: "https://github.com/aryareyhan/RedbullNews",
		},

		{
			title: "Arduino Parking Lot",
			description:
				"An Android app designed for university project, facilitating easier parking in public lots by connecting with an Arduino module. The app assigns users to available parking spots for added convenience.",
			logo: faC,
			linkText: "View Project",
			link: "https://github.com/aryareyhan/ArduinoParkingAuto",
		},

		{
			title: "Parking System App",
			description:
				"I developed this project to learn Java Swing and SQL. It provides parking management features like real-time tracking, cost calculation, and, vehicle management. With data securely stored, it promises enhanced efficiency and convenience.",
			logo: faJava,
			linkText: "View Project",
			link: "https://github.com/aryareyhan/ParkingManagementSystem",
		},

		{
			title: "Contacts App",
			description:
				"This React-based app was created as a personal learning project. It offers a user-friendly interface for managing contacts efficiently. Explore features such as adding, editing, and deleting contacts, all designed to enhance familiarity with React development.",
			logo: faJsSquare,
			linkText: "View Project",
			link: "https://github.com/aryareyhan/ContactsApp",
		},
	],
};

export default INFO;
