import { instructorsMock } from "../entities/instructor/instructor.mock";

const InstructorService = {
  getInstructors: (): Promise<Instructor[]> =>
    new Promise((resolve) => {
      resolve(instructorsMock);
    }),
};

export default InstructorService;
