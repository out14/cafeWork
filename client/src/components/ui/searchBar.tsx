
import * as React from 'react'
import { Input } from "./input";

interface SearchBarProps {
  keyWord: string | null,
//   changeKeyWord: React.Dispatch<React.SetStateAction<string | null>>,
  changeKeyWord: any,
  defaultValue:string | null,
  onClick: (e: React.FormEvent<HTMLFormElement>) => void,
  
}

export function SearchBar({
    ...props

}:SearchBarProps) {

  return (
    
    <form onSubmit={props.onClick} className="banner_content_search">
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
        {/* <input
        id="qB"
        type="search"
        placeholder="동네나 역 이름으로 찾아보세요 (예: 성수, 합정)"
        className="banner_content_search_input"
        /> */}
        <Input 
            type="search"
            placeholder="동네나 역 이름으로 찾아보세요 (예: 성수, 합정)"
            className="banner_content_search_input"
            onChange={(e)=>props.changeKeyWord(e.target.value)}
            defaultValue={props.defaultValue?props.defaultValue : ''}
        />
        <button
            type="submit"
            className="banner_content_search_btn"
        >
        카페 찾기
        </button>
    </form>
  )
}
