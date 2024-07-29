import SceneLoader from "@/components/Scene3D/SceneLoader";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col px-10 py-15 ">
        <h2 className="flex justify-center  text-4xl"> Three js Section </h2>
        <div className="flex justify-center">
          ThreeJS stuff here
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="flex justify-center text-4xl">Projects:</h2>
        <div className="grid grid-cols-2 gap-4 p-20">
          <p className="size-full bg-green-400">Project 1</p>
          <p className="size-full bg-green-400">Project 2</p>
          <p className="size-full bg-green-400">Project 3</p>
          <p className="size-full bg-green-400">Project 4</p>
        </div>
      </div>
    </div>
  );
}
