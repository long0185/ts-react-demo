import React, { ReactElement, Component, useState } from 'react'
import { connect } from "dva"
import { ConnectState } from "../../models/connect"
import { Table, InputNumber, Input, Form, Popconfirm } from "antd"
import { mallStateType } from "../../models/mall"
import "./index.css"
import {Goods} from "../../models/mall"

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '品名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
        title: '库存',
        dataIndex: 'stock',
        key: 'stock',
      },
      {
        title: '产地',
        dataIndex: 'area',
        key: 'area',
      },
      {
        title: '类别',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: '海报',
        dataIndex: 'poster',
        key: 'poster',
      },
  ];
 function index(props:any):ReactElement{
    return (
        <Table dataSource={props.mall.data} columns={columns} />
    )
}  


export default connect(({ mall }: ConnectState) => ({ mall }))(index)
