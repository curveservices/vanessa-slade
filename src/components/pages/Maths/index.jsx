import SingleSubject from "../singleSubject";
import maths from "../../../assets/images/ks3.png";


const Maths = () => {
  return (
    <SingleSubject
      heroH1="Maths Tuition"
      heroP="Maths tuition, as with English tuition, is one of the most sought after subjects when parents are considering tutoring for their child. 
            Maths encourages logical reasoning and the numeracy skills learned can be applied to other subjects, such as Science, Engineering, and even Art. 
            Research has shown that those students who perform well in Maths have greater volume of grey matter in the parts of the brain that are used for decision making and attention."
      src={maths}
      leftH2="KS1 Maths"
      leftP="I will work with your child to ensure mental fluency with whole numbers, counting and place value. Towards the end of this key stage, 
            your child should know the number bonds to 20. I will ensure that these foundations are in place so that your child will feel confident 
            with their National Maths test."
      rightH2="KS2 Maths"
      rightP="KS2: Your child will be required to sit a multiplication tables check at the beginning of this key stage.
            I will focus on this area before moving on to prepare your child for the National SAT test at the end of the key stage. The SAT assessment is 
            particularly important as it will be used at secondary school to set targets and inform teaching groups.  If you are in Lewisham or the immediate surrounding area 
            I will tutor your child from the comfort of your own home."
      thirdLeftH2="KS1 Resources"
      thirdLeftP="If you need any resources click the link bellow, or contact me for more information"
      thirdRightH2="KS2 Resources"
      thirdRightP="If you need any resources click the link bellow, or contact me for more information"
    />
  );
};

export default Maths;
