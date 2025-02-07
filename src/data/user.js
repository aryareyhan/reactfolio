import {
	faAndroid,
	faHtml5,
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
		title: "Hi there, welcome to Arya's Website. ✨",
		description:
			"I'm a Computer Science student who's passionate about technology, currently expanding my expertise in data science, data analysis, and machine learning to stay ahead in the industry. As a software developer, I have strengths in full-stack web and mobile application development, crafting robust, user-friendly applications for iOS, Android, and web platforms. I thrive on tackling new challenges and continuously seek opportunities to grow as a versatile and innovative developer.",
		info: "I'm currently looking for an internship!",
	},

	about: {
		title: "Here lies some facts about myself. 🧭",
		description:
			"As a Computer Science student, I am deeply passionate about mobile app technology, with a specific focus on Android programming. My enthusiasm for this field drives me to continually explore and expand my knowledge. I have a proven track record as a fast learner, especially when it comes to topics that genuinely captivate my interest. My ability to effectively communicate and connect with others sets me apart. I excel in public speaking and have leveraged my skills as an MC for various online organizational events. This experience has honed my interpersonal and leadership skills, allowing me to collaborate engage with audiences effectively.",
		info: "Here's some skills I've picked up",
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
			link: "https://github.com/aryareyhan/GameHI",
			img: "gamehi",
		},

		{
			title: "Bluejack Pharmacy",
			description:
				"Bluejack Pharmacy serves as my learning ground for mastering simple CRUD operations on Android using Java. It's a mobile pharmacy app empowering users to purchase medicines conveniently.",
			logo: faAndroid,
			link: "https://github.com/aryareyhan/BluejackV2",
			img: "bluejack",
		},

		{
			title: "Redbull News",
			description:
				"Redbull News marks my debut in Android app development using Java for the platform. It's my initial foray into the language, designed to immerse myself in its intricacies and functionalities.",
			logo: faAndroid,
			link: "https://github.com/aryareyhan/RedbullNews",
			img: "redbull",
		},

		{
			title: "Arduino Parking Lot",
			description:
				"An Android app designed for university project, facilitating easier parking in public lots by connecting with an Arduino module. The app assigns users to available parking spots for added convenience.",
			logo: faC,
			link: "https://github.com/aryareyhan/ArduinoParkingAuto",
			img: "arduino",
		},

		{
			title: "Parking System App",
			description:
				"I developed this project to learn Java Swing and SQL. It provides parking management features like real-time tracking, cost calculation, and, vehicle management. With data securely stored, it promises enhanced efficiency and convenience.",
			logo: faJava,
			linkText: "View Project",
			link: "https://github.com/aryareyhan/ParkingManagementSystem",
			img: "parking",
		},

		{
			title: "Contacts App",
			description:
				"This React-based app was created as a personal learning project. It offers a user-friendly interface for managing contacts efficiently. Explore features such as adding, editing, and deleting contacts, all designed to enhance familiarity with React development.",
			logo: faJsSquare,
			link: "https://github.com/aryareyhan/ContactsApp",
			img: "contactlist",
		},

		{
			title: "Keyboard Store",
			description:
				"This JavaFX-based application was developed as part of a course assignment. It provides a platform for managing keyboard purchases and inventory. Users can browse and buy keyboards, while administrators manage stock levels and product details, showcasing practical skills in JavaFX and object-oriented programming.",
			logo: faJava,
			link: "https://github.com/aryareyhan/KeyboardStore",
			img: "keyboard",
		},

		{
			title: "To do list",
			description:
				"This to-do list app, built with HTML, CSS, and JavaScript, is my first coding project independent of any assignment. It offers a simple and intuitive interface for managing daily tasks, allowing users to add, edit, and delete items. This project demonstrates foundational web development skills and marks the beginning of my coding journey.",
			logo: faJsSquare,
			link: "https://github.com/aryareyhan/ToDoList",
			img: "todolist",
		},

		{
			title: "AA Hotel",
			description:
				"This landing page for a hotel was developed as part of a course assignment. Built with HTML, CSS, and JavaScript, it features a clean and attractive design to showcase the hotel's amenities and services. The page includes sections for room descriptions, customer testimonials, and contact information, demonstrating skills in front-end web development and responsive design.",
			logo: faHtml5,
			link: "https://github.com/aryareyhan/HotelWeb",
			img: "hotel",
		},
	],
};

export default INFO;
