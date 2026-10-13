import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useCounterStore } from '@/store/counter-store'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const navigate = useNavigate()
  const [ searchState,setSearchState ] = useState<string>('')
  const search = (e: React.FormEvent) =>{
        e.preventDefault() 
      navigate(`/cafeList?query=${searchState}`)

  }
  const clickHash =(e:string)=>{
    console.log(e,'hash')
    navigate(`/cafeList?query=${e}`)
  }


  return (
    <div>
      <div className="main_banner">
        <div className="main_banner_inner">
          
            <div className="banner_content">
              <div className="banner_content_badge">
                STUDY CAFE
                <svg
                  width="22"
                  height="22"
                  viewBox="-11 -11 22 22"
                  className="banner_content_badge_deco"
                  aria-hidden="true"
                >
                  <path
                    d="M0 -10 C1 -2 2 -1 10 0 C2 1 1 2 0 10 C-1 2 -2 1 -10 0 C-2 -1 -1 -2 0 -10 Z"
                    fill="#2A2420"
                  />
                </svg>
              </div>
              <h1 className="banner_content_title">
                <span className="banner_content_title_sub">
                  조용히 집중하고 싶은 날,
                </span>
                <span className="banner_content_title_main">
                  공부하기 좋은 카페
                </span>
              </h1>
              <p className="banner_content_desc">
                콘센트, 와이파이, 소음까지 — 직접 앉아보고 기록한 카공 카페 지도
              </p>
              <form  className="banner_content_search" onSubmit={search}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5E5347"
                  strokeWidth={2}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20 L16 16" />
                </svg>
                <label htmlFor="qB" className="sr_only">
                  동네 또는 역 이름
                </label>
                <input
                  id="qB"
                  type="search"
                  placeholder="동네나 역 이름으로 찾아보세요 (예: 성수, 합정)"
                  className="banner_content_search_input"
                  onChange={(e)=>setSearchState(e.target.value)}
                />
                <button 
                  type="button" 
                  className="banner_content_search_btn"
                >
                  카페 찾기
                </button>
              </form>
              <div className="banner_content_tags">
                <button
                  onClick={()=>clickHash('홍대')} type="button" className="banner_content_tag"
                >
                  홍대
                </button>
                <button 
                  onClick={()=>clickHash('조용한 분위기')} type="button" className="banner_content_tag"
                >
                  조용한 분위기
                </button>
                <button 
                  onClick={()=>clickHash('빠른 와이파이')} type="button" className="banner_content_tag"
                  >
                  빠른 와이파이
                </button>
                <button 
                  onClick={()=>clickHash('늦게까지 영업')} type="button" className="banner_content_tag"
                >
                  늦게까지 영업
                </button>
              </div>
            </div>
          
          <img
            className="main_banner_img"
            src="/images/illust-light.png
            "
            alt="배너"
          />
        </div>
      </div>
    </div>
  )
}
