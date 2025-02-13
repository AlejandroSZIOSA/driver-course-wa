import { sanityClient } from "./sanity";

export async function getAllQuestions() {
  const query = `*[_type=="questions"]`;
  return sanityClient.fetch(query);
}
