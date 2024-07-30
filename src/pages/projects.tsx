const Projects = () => {    
    return(
        <div className="flex flex-col">
            <h2 className="flex justify-center text-4xl">Projects:</h2>
            <div className="grid grid-cols-2 gap-4 p-20">
                <p className="size-full bg-green-400">Project 1</p>
                <p className="size-full bg-green-400">Project 2</p>
                <p className="size-full bg-green-400">Project 3</p>
                <p className="size-full bg-green-400">Project 4</p>
            </div>
        </div>
    )
}

export default Projects;