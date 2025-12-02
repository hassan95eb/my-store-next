import axios from "axios";
import React from "react";

interface IData {
  id: string;
  title: string;
  views: number;
}
async function About() {
  const res = await axios.get("http://localhost:8000/posts");
  const data = await res.data;
  console.log(data);
  return (
    <div>
      {data.map((item: IData) => {
        return (
          <div className="bg-amber-200 my-2 text-black" key={item.id}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
export default About;
