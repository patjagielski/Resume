import { FinishedProj, InProgressProj, Project } from "./ProjectsData";

const MyProjects = () => {
    const finishedProjects: Project[] = FinishedProj;
    const inProgressProjects: Project[] = InProgressProj;

    return (
        <>
            <div>
                <p className="flex text-4xl pb-5 my-5 shadow-line shadow-white"> In Progress:</p>
                <div className="grid grid-cols-3 gap-8 p-20">
                    {inProgressProjects.map((project) => (
                        <a href={project.link}>
                            <div className="size-full bg-slate-600 rounded-lg p-4">
                                <p className="flex justify-center text-3xl p-2">{project.title}</p>
                                <div className="flex justify-center p-2">
                                    <img className="w-64 rounded-lg" src="/filler.jpg" />
                                </div>
                                <p className="flex justify-center text-l p-2">{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div>
                <p className="flex text-4xl pb-5 my-5 shadow-line shadow-white"> Done:</p>
                <div className="grid grid-cols-3 gap-8 p-20">
                    {finishedProjects.map((project) => (
                        <a href={project.link}>
                            <div className="size-full bg-slate-600 rounded-lg p-4">
                                <p className="flex justify-center text-3xl p-2">{project.title}</p>
                                <div className="flex justify-center p-2">
                                    <img className="w-64 rounded-lg" src="/filler.jpg" />
                                </div>
                                <p className="flex justify-center text-l p-2">{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MyProjects;