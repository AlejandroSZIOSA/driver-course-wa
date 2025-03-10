import { sanityClient } from "./sanity";

const QuestionsFields = `
question,answer,wrongAnswers,'imageUrl': imageUrl.asset->url,description`;

export async function getAllQuestions() {
  const query = `*[_type=="questions"]{${QuestionsFields}}`;
  return sanityClient.fetch(query);
}
