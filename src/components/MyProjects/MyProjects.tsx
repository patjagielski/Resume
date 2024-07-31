import { FinishedProj, InProgressProj } from "./ProjectsData";

const MyProjects = () => {
    const finishedProjects: Project[] = FinishedProj;
    const inProgressProjects: Project[] = InProgressProj;

    return (
        <>
            <div>
                <p className="flex text-4xl pb-5 my-5 shadow-line shadow-white"> In Progress:</p>
                <div className="grid grid-cols-2 gap-4 p-20">
                {inProgressProjects.map((project) => (
                    <div className="size-full bg-green-400">
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                        <button><a href={project.link}> To Project </a></button>
                    </div>
                ))}
                </div>
            </div>
            <div>
                <p className="flex text-4xl pb-5 my-5 shadow-line shadow-white"> Done:</p>
                <div className="grid grid-cols-2 gap-4 p-20">
                {finishedProjects.map((project) => (
                    <div className="size-full bg-green-400">
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                        <button><a href={project.link}> To Project </a></button>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default MyProjects;