import { useEffect } from 'react';

import { useSessionStorage } from '../use-session-storage';
import { fetchList } from './fetchList'

export const useGithubIssuesList = initialState => {
  const [ list, setList ] = useSessionStorage("github-issue-list", initialState);

  useEffect(() => {
    async function fetchData() {
      setList(await fetchList())
    }
    if (list === initialState) {
      fetchData();
    }
  }, [ setList, list, initialState ])

  return list;
}
