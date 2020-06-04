import client from '../client';

export let projectsData = null;
export let languagesData = null;

async function getProjects() {
  projectsData = await client.fetch('*[_type == "project"]');
}

async function getLanguages() {
  languagesData = await client.fetch('*[_type == "language"]');
}

export function initData() {
  return Promise.all([getProjects(), getLanguages()]);
}
