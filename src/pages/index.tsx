import SceneLoader from "@/components/Scene3D/SceneLoader";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col px-10 py-15 ">
        <h2 className="flex justify-center  text-4xl"> Three js Section </h2>
        <SceneLoader />
      </div>
   
    </div>
  );
}
