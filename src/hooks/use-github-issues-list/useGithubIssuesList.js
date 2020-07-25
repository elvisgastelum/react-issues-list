import { useState, useEffect } from 'react';

export const useGithubIssuesList = (initialState) => {
  const [list, setList] = useState(initialState)

  useEffect(() => {
    async function fetchList() {
      const data = await fetch("https://api.github.com/repos/facebook/react/issues?per_page=100");
      const list = await data.json()

      setList(list);
    }
    fetchList();
  }, [])

  return list;
}
