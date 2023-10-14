12 Oct 2023.

Abstract.
App is an educational/competitive game where user can visit 63 national parks on a map of the U.S. and play a minigame to earn a card for that park. User’s total points on winning minigame depend on time, right number of answers, mouse/arrow key skills, popularity of park, etc. Cards are kept in user’s unique collection and a leaderboard shows initials of players with the most cards. Player has the option to open encyclopedia (but not during gameplay) to research park info, attraction(s), etc. in order to preview potential answers/hints for games.

Games are re-usable components that use the same park object but deploy that object’s data differently depending on the game. When a user visits a park, a randomly generated game component appears with questions/activity specific to that park.

Potential Games.
Quiz. user answers a few questions about the park’s features, wildlife, history, etc.
Wildlife Memory. User plays a memory game with tiles featuring images of flora and fauna local to that park.
	Stretch goal – when a user gets the match, tile remains displayed, with a wildlife fact.
Hangman/Word Game. Game uses a word or words in the park object and plays a hangman, jumble, etc. style word game with them.
Stay on the Trail. Game displays a backdrop for each park above a gameboard where a user has to use arrow keys or cursor to remain between shifting parallel lines.

Properties to have in park object.
parkObj: {
	name
	year
	location
	image
	attraction(s): []?
	link
	visitors
	pointValue
	wildlife: {}?
	quizQuestions: {‘question1’: ‘answer1’}
}
	
