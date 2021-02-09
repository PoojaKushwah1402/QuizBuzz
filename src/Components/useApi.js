import axios from "axios";

const getQuestions = async url => {

   if(url) {

      const fetchQuestion = await axios.get(url);

      const questions = fetchQuestion.data.results;
   
      return  questions;

   }

   return ;


}

export default getQuestions;