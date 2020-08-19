import React, { ReactElement } from 'react'
import {NavLink} from "dva/router"

interface Props {
    
}

export default function index({}: Props): ReactElement {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/list">商品列表</NavLink>
                </li>
                <li>
                    <NavLink to="/add">添加商品</NavLink>
                </li>
                <li>
                    <NavLink to="/personal">个人中心</NavLink>
                </li>
                <li>
                    <NavLink to="/setup">更多设置</NavLink>
                </li>
            </ul>
        </div>
    )
}
