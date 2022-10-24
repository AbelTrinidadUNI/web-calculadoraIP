import React, { useEffect, useState } from 'react'

const InputBinary = (props) => {
    
    return (
        <div>
            <input className='inputBit' type="number" min={0} max={1} disabled={!props.editable} style={{width:"30px"}} value={props.binarios.b0} onChange={(e) => {props.setOcteto({...props.binarios, b0: parseInt(e.target.value)})}}/>
            <input className='inputBit' type="number" min={0} max={1} disabled={!props.editable} style={{width:"30px"}} value={props.binarios.b1} onChange={(e) => {props.setOcteto({...props.binarios, b1: parseInt(e.target.value)})}}/>
            <input className='inputBit' type="number" min={0} max={1} disabled={!props.editable} style={{width:"30px"}} value={props.binarios.b2} onChange={(e) => {props.setOcteto({...props.binarios, b2: parseInt(e.target.value)})}}/>
            <input className='inputBit' type="number" min={0} max={1} disabled={!props.editable} style={{width:"30px"}} value={props.binarios.b3} onChange={(e) => {props.setOcteto({...props.binarios, b3: parseInt(e.target.value)})}}/>
            <input className='inputBit' type="number" min={0} max={1} disabled={!props.editable} style={{width:"30px"}} value={props.binarios.b4} onChange={(e) => {props.setOcteto({...props.binarios, b4: parseInt(e.target.value)})}}/>
            <input className='inputBit' type="number" min={0} max={1} disabled={!props.editable} style={{width:"30px"}} value={props.binarios.b5} onChange={(e) => {props.setOcteto({...props.binarios, b5: parseInt(e.target.value)})}}/>
            <input className='inputBit' type="number" min={0} max={1} disabled={!props.editable} style={{width:"30px"}} value={props.binarios.b6} onChange={(e) => {props.setOcteto({...props.binarios, b6: parseInt(e.target.value)})}}/>
            <input className='inputBit' type="number" min={0} max={1} disabled={!props.editable} style={{width:"30px"}} value={props.binarios.b7} onChange={(e) => {props.setOcteto({...props.binarios, b7: parseInt(e.target.value)})}}/>
        </div>
    )
}

export default InputBinary