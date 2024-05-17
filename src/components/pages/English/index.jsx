import SingleSubject from "../singleSubject";
import home from "../../../assets/images/home-img.jpg";

const English = () => {
    return (
        <SingleSubject
            heroH1="English Tuition"
            heroP="English tuition can be seen as the most important for a number of reasons. 
                    As well as helping students to achieve their English qualifications, 
                    the teaching of English and literacy skills are transferable to all subjects. 
                    English is the language of communication, expression, analysis, and creativity. 
                    It is the communication of ideas for all subjects."
            src={home}
            leftH2="KS1 and Phonics"
            leftP="Year1:  Children will have a phonics screening assessmen.
            I can help your child to reach the expected standard s that they
            do not have to repeat the screening the following year."
            leftP2="KS1: Children are assesed for theie reading, grammar aand punctuation.
            I will help tpo prepare for these benchmark assessments.
            I will also focus on the skills that sre required and use KS1 practice
            assessments to tutor tthe areas that need developing."
            rightH2="KS2 Learning"
            rightP="KS2: The national SAT's asseess children to see if they have
            reached the required standard for reading, spelling, grammar and punctuation.
            The SAT's assessments are particulary important as these will be used at secondary school
            to set targets and inform teaching groups. If you are in Lewisham or the immediate surrounding area 
            I will tutor your child from the comfort of your own home."

        />
    );
}

export default English;