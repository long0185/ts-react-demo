import React, { ReactElement, useState, Component } from 'react'
import axios from 'axios'

import { Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import { UploadFile } from 'antd/lib/upload/interface';
import Axios from 'axios';
type IImageUoloaderProps = {
    curImgUrl?: string,
    onChange(data:string):void
}
class index extends Component<IImageUoloaderProps>{
    private getFileList(): UploadFile[] {
        if (this.props.curImgUrl) {
            return [
                {
                    uid: this.props.curImgUrl,
                    name: this.props.curImgUrl,
                    url: this.props.curImgUrl
                }
            ]
        } else {
            return []
        }
    } 
    private handleRequest = async (p: any) => {
        let formData = new FormData()
        formData.append(p.filename,p.file)
        const resp = await axios.post(p.action,formData)
        try{
            this.props.onChange(resp.data.data)
        }catch{
            message.error("上传失败")
        }
    }

    render() {
        return (
            <Upload
                action='/api/upload'
                name="imgfile"
                accept='.jpg,.png,webp,.gif'
                fileList={this.getFileList()}
                customRequest={this.handleRequest}
                listType="picture-card"
                onRemove={()=>{
                    this.props.onChange("")
                    console.log(this.props.curImgUrl)
                    return true
                }}
            >{!this.props.curImgUrl &&'+ 点击上传'}</Upload>
        )
    }
}
export default index