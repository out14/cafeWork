import axios from "axios"
import type { CafeData } from "@/types/cafe"

interface KakaoLocalResponse {
  documents: CafeData[]
  meta: {
    total_count: number
    pageable_count: number
    is_end: boolean
  }
}

export const MapAxios = (el:string|null) => 
    axios.get<KakaoLocalResponse>(`${import.meta.env.VITE_API_URL}/api/map/get`,
        {
            params:{
                query:el
            }
        }
    )
.then(function (response){
    // console.log(response)

    return response.data
})

