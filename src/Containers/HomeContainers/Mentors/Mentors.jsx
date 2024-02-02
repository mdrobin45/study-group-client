import axios from "axios";
import { useState } from "react";
import Container from "../../../Components/Container/Container";
import MentorCard from "../../../Components/MentorCard/MentorCard";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const Mentors = () => {
   const [mentors, setMentors] = useState([]);

   // Fetch mentors
   axios
      .get("/mentors.json")
      .then((res) => setMentors(res.data))
      .catch((err) => {
         console.log(err);
      });
   return (
      <Container>
         <SectionHeader title="Our Mentors" subtitle="Learn from experts" />
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
               <MentorCard key={index} mentor={mentor} />
            ))}
         </div>
      </Container>
   );
};

export default Mentors;
