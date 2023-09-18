import React from 'react'
import Navbar from './components/Navbar'
import Topinstitutes from './components/Topinstitutes'
import MeetMentor from './components/MeetMentor'
import BiologyMentors from './data/mentors';
import MentorAdvisor from './components/MentorAdvisor';

const App = () => {

  const commonTitle = "Meet Your Mentors"
  return <>
    <Navbar />
    <Topinstitutes />

    {/* Chnage the data and title acording to component  */}
      <MeetMentor mentors={BiologyMentors} title="Biology" heading={commonTitle}/> 
      <MeetMentor mentors={BiologyMentors} title="Physics" />
      <MeetMentor mentors={BiologyMentors} title="Mathematics" />
      <MeetMentor mentors={BiologyMentors} title="Chemistry"/>
    <MentorAdvisor />
  </>


}

export default App