export default async function getProjects(): Promise<any> {
    let projects: any;
    await fetch("./json/projects.json")
        .then(response => response.json())
        .then(data => {
            console.log("DATA", data);
            projects = data;
        });

    return projects;
}

