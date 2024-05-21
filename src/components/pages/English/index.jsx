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
      leftP="Year1:  Children will have a phonics screening assessment.
            I can help your child to reach the expected standards that they
            do not have to repeat the screening the following year."
      leftP2="KS1: Children are assesed for theie reading, grammar aand punctuation.
            I will help to prepare for these benchmark assessments.
            I will also focus on the skills that are required and use KS1 practice
            assessments to tutor tthe areas that need developing."
      rightH2="KS2 Learning"
      rightP="KS2: The national SAT's assess children to see if they have
            reached the required standard for reading, spelling, grammar and punctuation.
            The SAT's assessments are particulary important as these will be used at secondary school
            to set targets and inform teaching groups. If you are in Lewisham or the immediate surrounding area 
            I will tutor your child from the comfort of your own home."
      thirdLeftH2="KS1 Resources"
      thirdLeftP="If you need any resources click the link bellow, or contact me for more information"
      thirdRightH2="KS2 Resources"
      thirdRightP="If you need any resources click the link bellow, or contact me for more information"
    />
  );
};

export default English;
