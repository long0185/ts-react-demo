import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import "./index.css"
import { withRouter } from "dva/router"
const Demo = (props: any) => {
    const onFinish = async (values: any) => {
        const { username, password } = values
        const result = await props.dispatch({ type: "login/login", payload: { loginId: username, loginPwd: password } })
        if (result) {
                props.history.push("/")
        } else {
            window.alert("帐号密码错误，请重新登录！")
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="帐号"
                name="username"
                rules={[{ required: true, message: '请输入你的帐号!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入你的密码!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    登录
        </Button>
            </Form.Item>
        </Form>
    );
};
export default withRouter(Demo)