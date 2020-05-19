export const fetchResponse = () => {
  return fetch('http://poegram.herokuapp.com/api/v1/poegrams/random')
    .then(res => { 
      if(!res.ok) throw Error(res.statusText);
      else return res;
    })
    .then(res => res.json());
};
