import { useQuery } from "react-query";

export const useApi = (url : string , index : number | string  = ""  ) =>
{
        const getApi = async () => await fetch(url + index).then(rse => rse.json());
        return useQuery("dog" , getApi ,{ refetchOnWindowFocus: false,})

}