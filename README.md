# Fitness Project

## Description

This fitness project is a web application designed to help users plan and track their daily workouts. It was completed during a one-week sprint as part of the coding bootcamp. The project focuses on providing users with a seamless experience for creating, managing, and completing their daily workout routines. The tech stack includes React for the front end, Node.js and Express for the back end, and MongoDB for the database.

## Deployment Link

The project is deployed and can be accessed at [Fitness App](https://fitnomenal-workouts.vercel/). 

## Getting Started/Code Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/AishaA14/fitnomenal.git`
2. Navigate to the project directory: `cd fitnomenal`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to `http://localhost:3000/`

## Timeframe & Working Team

This project was completed in a group of three within a one-week timeframe.

## Technologies Used

- Front End: React
- Back End: Node.js, Express
- Database: MongoDB
- Development Tools: Git, VS Code, npm

## Brief

Create a fitness application that allows users to plan and track their daily workouts. The app should have user authentication, a user-friendly interface for adding and completing workouts, and a history feature to track past workouts.

## Planning

During the planning stage, I took the following steps:

1. **Sketches**: We created rough sketches of the app's layout to visualize the user interface.
2. **Wireframes**: Designed wireframes for the front end and UI to plan the app's structure.
3. **ERDs**: Developed Entity Relationship Diagrams to define the relationships between different entities.
4. **Project Management**: Used Trello for project management, creating tickets, and allocating responsibilities in a sprint timeline.
5. **Pseudocode**: Outlined pseudocode to plan the logic and flow of the application.

*Images of sketches, wireframes, and Trello board can be found in the [Planning](#planning) section below.*

## Build/Code Process

### Code Snippet 1: User Authentication

```javascript
// Server-side code for user authentication using Passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  async function(username, password, done) {
    const user = await User.findOne({ username });

    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user);
  }
));
```

*This code snippet demonstrates the use of Passport.js for local authentication.*

### Code Snippet 2: React Component for Workout Form

```jsx
// React component for adding a new workout
import React, { useState } from 'react';

const AddWorkoutForm = () => {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  const handleAddExercise = () => {
    // Logic to add exercise to the workout
  };

  return (
    <div>
      <input type="text" placeholder="Exercise" onChange={(e) => setExercise(e.target.value)} />
      <input type="number" placeholder="Sets" onChange={(e) => setSets(e.target.value)} />
      <input type="number" placeholder="Reps" onChange={(e) => setReps(e.target.value)} />
      <button onClick={handleAddExercise}>Add Exercise</button>
    </div>
  );
};

export default AddWorkoutForm;
```

*This code snippet showcases a React component for adding a new workout to the user's plan.*

### Code Snippet 3: Express Route for Workout History

```javascript
// Express route for retrieving workout history
router.get('/workout-history', async (req, res) => {
  try {
    const history = await WorkoutHistory.find({ userId: req.user._id });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving workout history' });
  }
});
```

*This code snippet demonstrates an Express route for retrieving workout history based on the user's ID.*

## Challenges

- **Technical Challenges**: Implementing user authentication and securing routes posed challenges due to the complexity of Passport.js.
- **Team Dynamics/Project Management**: As it was a solo project, managing time effectively and prioritizing tasks was crucial.

## Wins

- Successfully implemented user authentication and secured routes.
- Achieved a clean and responsive user interface using React.
- Effectively used Git for version control and collaboration with future contributors.

## Key Learnings/Takeaways

- Gained proficiency in using React for front-end development.
- Improved project management skills through effective use of Trello.
- Enhanced understanding of user authentication and authorization.

## Bugs

No known bugs at the time of

 deployment.

## Future Improvements

- Implement a feature to track user progress over time.
- Enhance the visual design for a more engaging user experience.
