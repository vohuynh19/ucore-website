import axios from "axios";
import { useState } from "react";

type SearchParam = {
  sort?: string;
  price?: string;
  category?: string;
};

type Course = {
  id: string;
  name: string;
  rating: number;
};

const mockData = [
  {
    id: "12321",
    name: "",
    rating: 5,
  },
];

const useCourseList = () => {
  const [courseList, setCourseList] = useState<Course[]>(mockData);

  const fetchData = (params?: any) => {
    const response = [
      {
        _id: "12321",
        courseName: "",
        courseRating: 5,
        createdAt: "...",
      },
    ];

    setCourseList(
      response.map((res) => ({
        id: res._id,
        name: res.courseName,
        rating: res.courseRating,
      }))
    );
  };

  const searchText = (text: string) => {
    fetchData({ text });
  };

  const searchWithFilter = (params: SearchParam) => {
    fetchData(params);
  };

  return { courseList, searchText, searchWithFilter };
};

export default useCourseList;
