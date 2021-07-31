import emoji from "react-easy-emoji";

export const greetings = {
	name: "ThanhND",
	title: "Hi, I'm ",
	tagline: "Creative Developer & Team Player located in VietNam.",
	specialize: "Specialized in ",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/popolimo3/",
	instagram: "",
	twitter: "",
	github: "https://github.com/DaiThanh97",
	linkedin: "https://www.linkedin.com/in/th%C3%A0nh-nguy%E1%BB%85n-b13515154/",
};

export const aboutSection = {
	title: "About Me",
	tagline: "Fullstack Developer as a (mainly) Backend Developer.",
	tags: ['Sofware Engineer', 'Backend Developer', 'Mentor', 'Codeholic']
};

export const skillsSection = {
	title: "What I'm Doing",
	subTitle:
		"All the technologies that I've been working with.",
	skills: [
		emoji(
			"⚡ Implement Restful API, Websocket for client interactions."
		),
		emoji(
			"⚡ Develop high availability and robust system with Microservices Architecture."
		),
		emoji(
			"⚡ Integration of third party services such as AWS / Digital Ocean"
		),
	],
	techStacks: [
		{
			name: 'Back-End',
			techs: [
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "logos:typescript-icon",
				},
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "logos:nodejs-icon",
				},
				{
					skillName: "GraphQL",
					fontAwesomeClassname: "logos:graphql",
				},
				{
					skillName: "Jest",
					fontAwesomeClassname: "logos:jest",
				},
				{
					skillName: "npm",
					fontAwesomeClassname: "vscode-icons:file-type-npm",
				},
			],
		},
		{
			name: 'Front-End',
			techs: [
				{
					skillName: "HTML5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "SASS",
					fontAwesomeClassname: "logos:sass",
				},
				{
					skillName: "Bootstrap",
					fontAwesomeClassname: "logos:bootstrap",
				},
				{
					skillName: "ReactJS",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
			]
		},
		{
			name: 'Database',
			techs: [
				{
					skillName: "SQL",
					fontAwesomeClassname: "vscode-icons:file-type-sql",
				},
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos:mysql",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "vscode-icons:file-type-mongo",
				},
				{
					skillName: "Redis",
					fontAwesomeClassname: "logos:redis",
				},
			]
		},
		{
			name: 'DevOps',
			techs: [
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Kubernetes",
					fontAwesomeClassname: "logos:kubernetes",
				},
				{
					skillName: "Jenkins",
					fontAwesomeClassname: "vscode-icons:file-type-jenkins",
				},
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
			]
		},
		{
			name: 'Source Version Control',
			techs: [
				{
					skillName: "GitHub",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "GitLab",
					fontAwesomeClassname: "logos:gitlab",
				},
				{
					skillName: "BitBucket",
					fontAwesomeClassname: "logos-bitbucket",
				}
			]
		},
		{
			name: 'Others',
			techs: [
				{
					skillName: "Java",
					fontAwesomeClassname: "logos-spring-icon",
				},
				{
					skillName: "ASP",
					fontAwesomeClassname: "logos-c-sharp",
				}
			]
		}
	]
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Information Technology",
		subHeader: "Computer Engineering",
		duration: "September 2015 - May 2017"
	},
	{
		schoolName: "University of Science",
		subHeader: "Computer Science",
		duration: "December 2020 - Present"
	}
];

export const experience = [
	{
		role: "Senior Software Engineer",
		company: "TP&P Technology",
		companyColor: '#10aae1',
		companyTextColor: 'text-white',
		companylogo: './companies/tpp.png',
		date: "June 2021 – Present",
		descBullets: [
			`Working with foreign team to develop booking system for medical industry.`,
			`Implement backend services to help clinicians and patients can easily work with each other.`,
			`Integrate with UX/UI in web, mobile platform`
		],
	},
	{
		role: "Software Engineer",
		company: "VDC",
		companyColor: '#b22227',
		companyTextColor: 'text-white',
		companylogo: './companies/vdc.jpg',
		date: "April 2021 – June 2021",
		descBullets: [
			`Participate in developing services for applications in banking.`,
			`Building feature called Simple Home Loan to help clients loan money to buy their house.`,
			`Discuss to make the best solution and strategy for developing robust application.`
		],
	},
	{
		role: "Software Engineer",
		company: "VinBrain",
		companyColor: '#dedede',
		companyTextColor: '',
		companylogo: './companies/vinbrain.png',
		date: "February 2021 – April 2021",
		descBullets: [
			`Build UI web page to support the website text to speech
			with multiple voices, languages.`,
			`Research and implement the bot to help patient to
			detect their sickness. Has been rolled out to VinMec and
			widely used in future by VinBrain's partner.
			`
		],
	},
	{
		role: "Software Engineer",
		company: "ELAgenra",
		companyColor: '#23479e',
		companyTextColor: 'text-white',
		companylogo: './companies/elagenra.jpg',
		date: "July 2017 – September 2020",
		descBullets: [
			`Developing Web Application, API service (provide API
				service for web, mobile)				
			`,
			`Creating back-end services for Billing System,
			UserSystem, Authentication, Guard, Deposit, Withdraw,
			Transfer, History, Logs, Captcha, OTP, Events...`,
		],
	}
];