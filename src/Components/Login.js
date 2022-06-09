
import { Checkbox, Col, Form, Input, Row } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
const Login = () => {
    const [status, setStatus] = useState("")
    const onFinish = (data) => {
        axios.post("https://reqres.in/api/login", data)
            .then(res => setStatus(`Token : ${res.data.token}`))
            .catch(err => {
                setStatus(`Failed With Code : ${err.code}`)
            }
            )
    };


    return (
        <div data-form>

            <Row>
                <Col span={8}>
                    <Form
                        name="basic"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}>
                        <div className="titles">
                            <h1>Welcome Back</h1>
                            <p>Please login  MR. {"user"}</p>
                        </div>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email Address*!',
                                },
                            ]}
                        >
                            <Input className='input' name="email" placeholder="Email Address*" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input className='input'
                                type="password"
                                placeholder="Password*"
                            />


                        </Form.Item>

                        <button className="btn__main btn">Login</button>
                        <Form.Item>
                            <div className="remember">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </div>
                        </Form.Item>
                        <p>{status}</p>
                    </Form>
                </Col>
                <Col span={16}>
                    <div className="bg-img"></div>
                </Col>
            </Row>


        </div >
    );
};

export default Login;