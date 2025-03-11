import { sanityClient } from "./sanity";

const QuestionsFields = `_id,
question,answer,wrongAnswers,'imageUrl': imageUrl.asset->url,description`;

export async function getAllQuestions() {
  const query = `*[_type=="questions"]{${QuestionsFields}}`;
  return sanityClient.fetch(query);
}
