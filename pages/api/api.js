const url = 'https://www.boredapi.com/api/activity';

export default function fetchActivity(type) {
  return fetch(`${url}?type=${type}`).then((res) => res.json());
}
