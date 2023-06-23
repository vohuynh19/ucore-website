const prefix = "/bot";

export const QUESTION_API = {
  GET_QUESTIONS: `${prefix}/questions`,
  GET_QUESTIONS_BY_CHANNEL: (channelID: string) => `${prefix}/questions/${channelID}`,
  ANSWER_QUESTION: `${prefix}/answer`,
};
