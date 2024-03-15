import axios from "axios";
import MyModal from "./src/components/molecules/Modal/Modal";
import HomePageCard from "./src/components/molecules/Card/HomePageCard";
import { Post } from "@/type";

const getAllTodo = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  } catch (error) {
    console.error("Error fetching todo", error);
  }
};

export default async function Home() {
  //array
  const allTodo: Post[] = await getAllTodo();

  return (
    <main>
      <div className="flex flex-col gap-2 justify-center items-center ">
        <MyModal />
        {allTodo.map((item) => (
          <HomePageCard
            key={item.id}
            title={item.title}
            body={item.body}
            id={item.id}
          />
        ))}
      </div>
    </main>
  );
}
