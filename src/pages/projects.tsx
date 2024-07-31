import MyProjects from "@/components/MyProjects/MyProjects";

const Projects = () => {
    return (
        <div className="flex flex-col m-10">
            <h2 className="flex justify-center text-4xl">Projects & Courses:</h2>
            <MyProjects />
        </div>
    );
}

export default Projects;