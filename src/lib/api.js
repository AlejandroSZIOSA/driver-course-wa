import { sanityClient } from "./sanity";

const QuestionsFields = `answer: answer.current,
description: description.current, imageUrl: imageUrl.asset->url`;

export async function getAllQuestions() {
  const query = `*[_type=="questions"]`;
  return sanityClient.fetch(query);
}
