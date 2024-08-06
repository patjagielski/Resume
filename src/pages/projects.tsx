import MyProjects from "@/components/MyProjects/MyProjects";
import { FinishedProj, InProgressProj, Project } from "@/components/MyProjects/ProjectsData";

const Projects = () => {
    const finishedProjects: Project[] = FinishedProj;
    const inProgressProjects: Project[] = InProgressProj;
    return (
        <div className="flex flex-col m-10">
            <h2 className="flex justify-center text-2xl lg:text-4xl">Projects & Courses:</h2>
            <MyProjects title={"Done"} projectList={finishedProjects} />
            <MyProjects title={"In Progress"} projectList={inProgressProjects} />
        </div>
    );
}

export default Projects;