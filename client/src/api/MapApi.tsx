import { MapAxios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";



export function  useMapApi(el:string|null) {
    return useQuery({
        queryKey:['key' , el],
        queryFn: ()=>MapAxios(el)
    })
}
