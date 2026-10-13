import { useMapApi } from "@/api/MapApi"
import { Map,MapMarker ,useKakaoLoader } from 'react-kakao-maps-sdk'
import type { CafeData } from "@/types/cafe"
import { SearchBar } from "@/components/ui/searchBar"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { List } from "@/components/layout/List"
import { Modal } from "@/components/layout/Modal"


export const CafeList =()=>{
    const [ searchParams, setSearchParams ] = useSearchParams();
    const query = searchParams.get('query') ?? '서울'

    const [insertState, setInsertState] = useState<string>(query)
    const [ modalState, setModalState ] = useState<any>('')
    const [ loading, error  ] = useKakaoLoader({
        appkey: import.meta.env.VITE_KAKAO_JS_KEY,
        libraries: ['services']
    })
    // const { data, isPending } = useMapApi(query?query:searchState)
    const { data, isPending } = useMapApi(query)


    const firstCafe = data?.documents[0]

    const btnState = (e:React.FormEvent<HTMLFormElement>)=>{
        console.log(insertState,"insertState")
        e.preventDefault()
        setSearchParams({ query: insertState })
    }
    const viewModal = (e:string)=>{
        setModalState(e)
    }
    const closeModal = ()=>{
        setModalState('')
    }
    const refreshSearch =()=>{
        setSearchParams({})
        setInsertState('서울') 
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
            {modalState&&
                <Modal onClose={closeModal}>
                    <iframe 
                        title={data?.documents.find(e=>e.id===modalState)?.place_name}
                        src={data?.documents.find(e=>e.id===modalState)?.place_url}
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                    />
                </Modal> 
            }
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
                        <List 
                            data= {data?.documents}
                            // state={modalState}
                            onClick={viewModal}
                            // setState={setModalState}
                        />
                        
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
            {data?.documents?.length===0&&(
                <div className="nonResearch">
                    검색어가 존재 하지 않습니다.    
                    <button
                        type="button" 
                        onClick={()=>refreshSearch()}
                        className="banner_content_search_btn"
                    >재검색</button>
                </div>
            )}
        </div>     
    )
}