import SceneLoader from "@/components/Scene3D/SceneLoader";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col m-10">
        <h2 className="flex justify-center text-xl  lg:2xl:text-4xl"> Welcome To My Portfolio! </h2>
        <SceneLoader />
      </div>
   
    </div>
  );
}
