import MyModal from "./src/components/molecules/Modal/Modal";

export default function Home() {
  return (
    <main>
      <div className="h-[90vh] flex flex-col gap-2 justify-center items-center ">
        <MyModal />
      </div>
    </main>
  );
}
