import fetch from 'node-fetch';

// data = fetch('http://localhost:8080/orgs')
//   .then(response => response.json())
//   .then(json => json);

const funn = async () =>{
  const res = await fetch('http://localhost:8080/orgs');
  return await res.json();
}

const postss = async (dataArr) =>{
  const res = await fetch('http://localhost:8080/orgs', {
    method: "post",
    body: dataArr,
    headers:{
      "Content-Type":"application/json",
    }
  });
  return await res.json();
}

export {postss}

export default funn

// console.log(data);
// export default data;