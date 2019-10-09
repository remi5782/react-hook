import React,{useState, useReducer, useEffect, memo} from 'react';
import {Exception} from 'handlebars';
const initialState={
    components:[]
};
const reducer = (state, action)=> {
    switch(action.type){
        case 'CREATE':
            return {
                ...state, payloadStatus: 'Created Successfully'
            }
        case 'GET':
            return {
                ...state, components: [
                    ...state.components,action.payload
                ], payloadStatus: 'Content got successfully'
            }
        case 'UPDATE':
            return {
                ...state, components:[...state.components, action.payload], payloadStatus: 'Updated Successfully'
            }
        case 'DELETE':
            return {
                ...state, payloadStatus: 'Deleted Success'
            }
            default:
                throw new Exception('action are defoned for this one ')
    }
}
function Sample (){
    const [heading, setHeading] = useState('Welcome to React Hook');
    useEffect(()=>{
        document.title ='React Hooks'
    })
    return (
        <div>
            <h1>{heading}</h1>
            </div>
    )
}
export default memo(Sample);