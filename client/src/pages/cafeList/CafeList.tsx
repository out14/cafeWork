import { useMapApi } from "@/api/MapApi"
import { Map,MapMarker ,useKakaoLoader } from 'react-kakao-maps-sdk'
import type { CafeData } from "@/types/cafe"
import { SearchBar } from "@/components/ui/searchBar"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"


export const CafeList =()=>{

    const [ searchParams ] = useSearchParams();
    const query = searchParams.get('query')
    
    const [searchState , setSearchState]=useState<string|null>(query ?? '서울')
    const [insertState, setInsertState] = useState<string|null>(searchState?searchState:query)
    const [ loading, error  ] = useKakaoLoader({
        appkey: import.meta.env.VITE_KAKAO_JS_KEY,
        libraries: ['services']
    })

    const { data, isPending } = useMapApi(query?query:searchState)
    const firstCafe = data?.documents[0]

    const btnState = (e:React.FormEvent<HTMLFormElement>)=>{
        console.log(insertState,"insertState")
        e.preventDefault()
        setSearchState(insertState)
        
    }

    if(error){
        console.log('카카오맵 로드 실패',error)
        return <p>지도를 불러오지 못했습니다 ㅠ</p>
    }

    if(loading || isPending){
        return <p>로딩 중 입니다</p>
    }


    return (
        <div className="kakaoMap">
            {data && firstCafe && (
                <Map
                    center={{ lat: Number(firstCafe.y), lng: Number(firstCafe.x) }}
                    style={{ width: '100%', height: '100%' }}
                >


                    {data.documents.map((cafe:CafeData) => (
                        <MapMarker
                            key={cafe.id}
                            position={{ lat: Number(cafe.y), lng: Number(cafe.x) }}
                        />
                        ))}

                    <div className="kakaoMap_list">
                        {data?.documents.map((cafe:CafeData) => (
                            <div className="kakaoMap_list_item" key={cafe.id}>
                                <h3>{cafe.place_name}</h3>
                                <p>{cafe.road_address_name}</p>
                                <p>{cafe.phone}</p>
                            </div>
                        ))}
                    </div>

                    <div className="kakaoMap_search">
                        <SearchBar
                            keyWord={insertState}
                            changeKeyWord={setInsertState}
                            onClick={btnState}
                            defaultValue={insertState}
                        />
                        
                    </div>
                </Map>
            )}
        </div>     
    )
}