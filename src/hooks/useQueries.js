import {useState} from 'react';
import { useQuery } from 'react-query';
import { getPostsLogin } from '../api/posts';

const useQueries = (email, pass) => {
  const [success, setSuccess] = useState()
  const [isError, setIsError] = useState()

  const PostLogin = (email, pass) => {
    return useQuery({
      queryKey: ["login"],
      queryFn: () => getPostsLogin(email, pass),
    })
  }

  return {

  }
};

export default useQueries;