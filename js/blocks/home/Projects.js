import ProjectList from "../../components/ProjectList.js";

export default (t, t2) => {
    return /*html*/ `
        <div class="projects">
            <div class="projects__header">
                <h2 class="h2">${t.title}</h2>
                <a href="/projects">${t.button} ~~></a>
            </div>
            ${ProjectList({ limit: 3 }, t2)}
        </div>
    `;
};
