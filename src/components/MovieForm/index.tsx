import { Form, Input, InputNumber, Button, message } from 'antd';
import React, { useState } from 'react';
import Upload from "../../components/Upload"
import { MallService } from "../../service/MallService"
const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Demo = () => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const [imgUrl, setimgUrl] = useState("")
  const onFinish = async (values: any) => {
    const resp = await MallService.saveGoods(values.goods)
    if (resp.data.status == "200") {
      onReset()
      setimgUrl("")
      message.success("上传成功")
    } else {
      message.error("上传失败")
    }
  };

  return (
    <Form
      {...layout} name="nest-messages"
      onFinish={onFinish}
      form={form}

    >
      <Form.Item name={['goods', 'name']} label="品名" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['goods', 'poster']} label="海报" >
        <Upload onChange={(val) => {
          if (val) {
            setimgUrl("http://localhost:3000" + val)
          } else {
            setimgUrl("")
          }
        }} curImgUrl={imgUrl}></Upload>
      </Form.Item>
      <Form.Item name={['goods', 'price']} label="价格" rules={[{ required: true }]} >
        <Input />
      </Form.Item>
      <Form.Item name={['goods', 'stock']} label="数量" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['goods', 'area']} label="地区" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['goods', 'category']} label="分类" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['goods', 'link']} label="连接" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['goods', 'description']} label="描述" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} rules={[{ required: true }]}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Demo
