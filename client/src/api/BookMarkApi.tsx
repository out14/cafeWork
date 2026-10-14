import { useQuery } from '@tanstack/react-query';
import React from 'react';


interface BookType {
    address_name:string|undefined,
    id: string|undefined, 
    phone: string|undefined, 
    place_name:string|undefined ,
    place_url: string|undefined, 
}

// export function callBookMark(){
//     const getLocal = localStorage.getItem('book');
//     const localList = getLocal? JSON.parse(getLocal): [];

//     return { localList }
// }


export function callBookMark(): BookType[] {
    const getLocal = localStorage.getItem('book')
    return getLocal ? JSON.parse(getLocal) : []
}


export function saveBookMark (
    { address_name, id, phone, place_name, place_url }:BookType
){
    const list = callBookMark();

    if(list.find(e=>e.id===id)){
        alert('이미 북마크에 존재하는 카페입니다.')
        return false
    }
    const saveLocal = JSON.stringify([
            ...list,{
            address_name:address_name,
            id:id, 
            place_name:place_name,
            phone:phone,
            place_url:place_url
        }]
    );
    const setLocal = localStorage.setItem(
        'book',saveLocal
    );
   
    return setLocal 
}


export function delBookMark(
    id: string | undefined
) {
    const newList = callBookMark().filter(item => item.id !== id)
    localStorage.setItem('book', JSON.stringify(newList))
    return newList
}




export function delBookAllMark (){
    localStorage.removeItem('book')
}
