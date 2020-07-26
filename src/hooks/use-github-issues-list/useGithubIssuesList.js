import { useEffect } from 'react';

import { useSessionStorage } from '../use-session-storage';

export const useGithubIssuesList = initialState => {
  const [ list, setList ] = useSessionStorage("github-issue-list", initialState);

  useEffect(() => {
    async function fetchList() {
      const data = await fetch("https://api.github.com/repos/facebook/react/issues?per_page=100");
      const list = await data.json()

      setList(list);
    }
    if (list === initialState) {
      fetchList();
    }
  }, [ setList, list, initialState ])

  return list;
}
