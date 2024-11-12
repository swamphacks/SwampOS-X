export interface QA {
	question: string;
	answer: string;
}

export const faq: Record<string, QA[]> = {
	General: [
		{
			question: 'What is SwampHacks',
			answer:
				'SwampHacks is a 24-hour event where people collaborate to create technology solutions, typically in the form of software or hardware projects. Participants can work in teams or individually to build something innovative.'
		},
		{
			question: 'Who can participate?',
			answer:
				"Only students aged 18 or older and from the University of Florida or Santa Fe College are eligible to participate.  This hackathon welcomes students from all academic backgrounds—not just computer science majors. Regardless of your experience level, whether you're a beginner or an advanced coder, we encourage you to join and make the most of this event!"
		},
		{
			question: 'What happens after the Hackathon ends?',
			answer:
				"After the 24-hour hacking period, teams will present their projects to judges. Awards will be given, and you'll have a chance to showcase your hard work."
		},
		{
			question: 'How can I prepare for the hackathon?',
			answer:
				'You can prepare by familiarizing yourself with coding languages or tools you might use, brushing up on project management skills, and forming a team in advance. However, everything you need will also be available during the hackathon.'
		}
	],
	'Event Logistics': [
		{
			question: 'What facilities will be available?',
			answer:
				'The hackathon will be held on campus with Wi-Fi, power outlets, and workspaces provided. There will also be quiet areas for resting and a designated sleeping area for those who want to take a break. The specific location of the main venue has not been released.'
		},
		{
			question: 'Can I leave and come back',
			answer:
				'Yes, you are allowed to leave and return during the hackathon. However, it’s recommended to stay for the full experience to maximize your time with mentors, teammates, and the community.'
		},
		{
			question: 'Where can I sleep',
			answer:
				'If you would like to keep working on your project throughout the night, we will have a venue open to continue your collaboration and work. However, if you plan on sleeping through the night, we recommend that you head back to your place of residence.'
		}
	],
	'Requirements and What to Bring': [
		{
			question: 'What do I need to bring?',
			answer:
				"You should bring your laptop, charger, and any hardware you might need for your project. Don't forget to pack personal essentials like snacks, a water bottle, comfortable clothes, and toiletries for the overnight portion of the event."
		},
		{
			question: 'Can I bring my own hardware?',
			answer:
				'Absolutely! You are encouraged to bring any hardware components you plan to use for your project, such as Raspberry Pis, Arduinos, or sensors.'
		}
	],
	'Support & Resources': [
		{
			question: 'Will food and drinks be provided?',
			answer:
				'Yes! Meals, snacks, and drinks will be provided throughout the event to keep you energized.'
		},
		{
			question: 'Do I need a team?',
			answer:
				'You can come with a team or form one at the event. There will be plenty of opportunities to network and find team members before hacking begins on Saturday at 10am.'
		},
		{
			question: 'What if I get stuck or need help during the hackathon',
			answer:
				"Mentors from various technical fields and prominent companies will be available to assist you throughout the event. They'll help with troubleshooting, brainstorming, and coding."
		},
		{
			question: 'Will there be workshops and socials?',
			answer:
				'Yes, we’ll be hosting various workshops throughout the event on topics like coding, design, and prototyping to help you build your project. We will also have socials during the event to give you a break from coding and help you connect with other hackers.'
		},
		{
			question: 'Will there be networking opportunities?',
			answer:
				'Yes, you’ll have plenty of opportunities to network with peers, industry professionals, and sponsors before, during, and after -the event.'
		}
	]
};
