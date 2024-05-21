import SingleSubject from "../singleSubject";
import gcse from "../../../assets/images/gcse.png";

const ElevenPlus = () => {
  return (
    <>
      <SingleSubject
        heroH1="11 Plus"
        heroP="I specialise in 11 Plus. I have an excellent student pass rate and will work
            with your child to develop the academic skills needed to pass the exam,
            as well as giving them confidence, exam technique and resilience needed to stand out amongst the rest. 
            I will assess your child and tailor the scheme of learning to ensure success. 
            While most independent schools write and mark their own common entrance exams, 11+ entrance exams are based on GL and CEM syllabi. 
            I will tailor the learning for the specific local requirements. "
        src={gcse}
        leftH2="How many exams will my child have to take?"
        leftP="The 11+ exam is a selective entrance test taken at the start of Year 6 in a primary or prep school, usually in September. It is used as part of the admissions process for Year 7 in UK grammar schools and some fee-paying independent schools."
        leftP2="There are over 160 Grammar schools in the UK. The exam consists of questions in English, Maths, Verbal Reasoning, and Non-verbal Reasoning, and usually lasts between 45-60 minutes. Students will usually sit two or three 11+ exams."
        rightH2="How are 11+ Maths &amp; English exams different from KS2 SATs Maths &amp; English?"
        rightP="The KS2 Maths syllabus is used in both the SATs and 11+ exams. However, the SATs include questions at all levels, while the 11 plus has only questions at the higher level. 
            This is because the government sets a standard benchmark for Year 6 children to reach. It is an average standard.
            Your child will need to perform above average in the exams."
        rightP2="You must consider that the 11+ exams are taken at the beginning of year 6 so your child will not have covered all of the standard KS2 content by then either. 
            This is where I will help. I will accelerate the learning for your child so that they cover content that has not been covered at school."
        thirdLeftH2="Non Verbal Reasoning"
        thirdLeftP="Like Verbal Reasoning, this tests your child’s ability to reason and apply their skills and intelligence rather than learning subject content. 
            It is seen as a true test of intelligence which does not rely on learned vocabulary. It tests a pupil’s visual acuity, speed of perception, and their capacity to identify and manipulate objects. 
            Your child will be asked to identify mirror shapes, rotated shapes and sequences of shapes."
        thirdLeftP2="I will work with your child to ensure that the required mathematical and geometrical knowledge is in place. I'll use practice tests to train your child’s brain to approach this test with accuracy and confidence."
        thirdRightH2="Verbal Reasoning"
        thirdRightP="Verbal Reasoning is skills rather than knowledge based. The GL Verbal Reasoning exam will test your child’s ability to process verbal information, recognise similarities and differences between words, 
            apply logical thinking and problem-solving skills, identify patterns, and demonstrate an understanding of the rules and meaning of language."
        thirdRightP2="For example, they may be asked to crack codes through words and numbers, as well as finding words within words or completing a sequence of words. 
            I will help your child to extend their vocabulary and substitute a wide range of words with synonyms and antonyms."
      />
    </>
  );
};

export default ElevenPlus;
