import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        What kind of workout are you looking for? Strength training, cardio, flexibility, or something else? Let me know your goals and preferences!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        For a gym website featuring bootcamps, you might want to include the following sections:
        </p>
        <div className="bootcamps">
          <div>
            <h4>A brief description of what bootcamps are and how they can benefit participants.</h4>
            <p>
            A calendar or list of scheduled bootcamps with details like date, time, duration, and location.
            </p>
          </div>
          <div>
            <h4>Bootcamp Categories:</h4>
            <p>
            Different types of bootcamps (e.g., strength, cardio, mixed) with descriptions and objectives.
            </p>
          </div>
          <div>
            <h4>Trainer Profiles:</h4>
            <p>
              Information about the trainers leading the bootcamps, including their qualifications and experience.
            </p>
          </div>
          <div>
            <h4>Registration:</h4>
            <p>
            A system for users to sign up for bootcamps, possibly with payment options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;