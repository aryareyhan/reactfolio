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
		github: "https://github.com/aryareyhan/",
		linkedin: "https://linkedin.com/in/aryareyhan/",
		instagram: "https://instagram.com/aryareyhann",
		spotify: "https://open.spotify.com/user/aryareyhan/",
	},

	homepage: {
		title: "Hi there, welcome to Arya's Website. ✨",
		description:
			"This is my digital space. I built this website as a fun way to spend my free time, and it's designed to guide you through my story, projects, portfolio, and experience. I invite you to explore around and reach out using the contact information provided if you're interested in connecting or discussing opportunities. I'm always excited to meet new people, exchange ideas, and explore fresh challenges. Enjoy your visit, and feel free to drop me a message anytime!",
		info: "I'm currently looking for an internship!",
	},

	about: {
		title: "Here lies some facts about myself. 🧭",
		description:
			"I'm a Computer Science student passionate about technology and innovation. Currently, I'm expanding my expertise in data science, data analysis, and machine learning to stay ahead in the industry, all while leveraging my hands-on experience as a full-stack web developer intern and a self-taught mobile app creator. Known for my quick learning and collaborative spirit, I'm eager to transition into a data science role with a special focus on biology, consistently seeking out challenges that fuel my growth as a versatile developer.",
		description2:
			"Outside the digital realm, I embrace a lifestyle that keeps me energized and inspired. Whether it's a quick badminton match, a refreshing run, or an efficient workout session, I enjoy staying active without sacrificing time. I also love taking leisurely rides on my motorcycle, where cruising through the city offers a chill, scenic escape that perfectly balances my technical pursuits.",
		info: "Here's some skills I've picked up",
	},

	articles: {
		title: "Things that I've done throughout my career. 💼",
		description: "",
	},

	contact: {
		title: "Let's connect, feel free to reach me out! 🔗",
		description:
			"I'm enthusiastic about exploring new job opportunities and expanding my network, as well as making new friends along the way. Your feedback, questions, and suggestions are highly valued. If you'd like to connect or have any inquiries, feel free to reach me out via my contacts I've provided below. I'm active on all of the platforms and look forward to engaging with you there. Thank you once again for your interest, and I'm excited to connect with you!",
	},

	projectpage: {
		title: "Some of the things I've made with code and curiosity. ⚒️",
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
	},
};

export default INFO;
