import { sanityClient } from "./sanity";

const QuestionsFields = `
question,answer,'imageUrl': imageUrl.asset->url`;

export async function getAllQuestions() {
  const query = `*[_type=="questions"]{${QuestionsFields}}`;
  return sanityClient.fetch(query);
}
