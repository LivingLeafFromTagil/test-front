import { $authHost, $host } from ".";

export const addOrg = async(org) => {
  const {data} = await $authHost.post('api/org/newOrg', {name: org.name, tin: org.tin, info: org.info});
  return data;
}

export const getOrgList = async() => {
  const {data} = await $host.get('api/org/orgs');
  console.log(data);
  return data;
}

export const getOrg = async(id) => {
  const {data} = await $host.get('api/org/orgs/' + id);
  return data;
}

export const deleteOrg = async(id) => {
  const {data} = await $authHost.delete('api/org/orgs/' + id);
  return data;
}