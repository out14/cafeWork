import { callBookMark, delBookMark } from "@/api/BookMarkApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BookMark = () => {

    const [localList, setLocalList] = useState(()=>callBookMark());
    const navigate = useNavigate()

    const delBook =(id:string|undefined)=>{
        if(confirm('이 북마크를 제거 하시겠습니까?')){
            delBookMark(id)
            setLocalList(callBookMark())
        }
    }

    return (
        <div className="bookmark">
            <div className="bookmark_inner">
                <div className="bookmark_head">
                    <h2 className="bookmark_head_title">내가 찜한 카페</h2>
                    <p className="bookmark_head_count">총 <strong>{localList?.length}</strong>곳</p>
                </div>

                <ul className="bookmark_list">
                    {localList.map((e)=>(
                         <li className="bookmark_list_item">
                            <div className="bookmark_list_item_info">
                                <h3 className="bookmark_list_item_name">{e.place_name}</h3>
                                <p className="bookmark_list_item_address">{e.address_name}</p>
                                <p className="bookmark_list_item_phone">{e.phone}</p>
                            </div>
                            <div className="bookmark_list_item_btns">
                                <button type="button" className="bookmark_list_item_btn">상세보기</button>
                                <button 
                                    type="button" 
                                    className="bookmark_list_item_btn bookmark_list_item_btn--delete"
                                    onClick={()=>delBook(e.id)}
                                >삭제</button>
                            </div>
                        </li>      
                    ))}
                </ul>

                {/* 북마크가 없을 때 */}
                {localList?.length===0&&(
                <div className="bookmark_empty">
                    <p className="bookmark_empty_text">아직 찜한 카페가 없습니다.</p>
                    <button 
                        onClick={()=>navigate('/cafeList')}
                        type="button" className="banner_content_search_btn"
                    >카페 찾으러 가기</button>
                </div>
                )}
            </div>
        </div>
    );
};
