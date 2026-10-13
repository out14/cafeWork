import type { CafeData } from '@/types/cafe';
import React from 'react';

export const List = (
    {data,
        // modalState,
    // setModalState ,
    onClick
    }:{data:any,
        // modalState:any,
        // setModalState:any
        onClick:(id:string)=>void
    }
) => {


   
    return (
        <>
            {data?.map((cafe:CafeData) => (
                <div 
                    className="kakaoMap_list_item" 
                    key={cafe.id}
                    // 
                >
                    <button onClick={()=>onClick(cafe.id)}>
                        <h3>{cafe.place_name}</h3>
                    </button>
                    <p>{cafe.road_address_name}</p>
                    <p>{cafe.phone}</p>
                </div>
            ))}
        </>
    );
};

