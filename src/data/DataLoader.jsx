
const projectsLoader = async () => {
  const resp = await fetch(`/api/projects`);
  const data = await resp.json();
  return data;
};

const projectLoader = async ({ params }) => {
  const resp = await fetch(`/api/projects/${params.id}`);
  const data = await resp.json();
  return data;
};

export { projectsLoader, projectLoader };
