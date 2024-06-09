import React, { useState } from "react";
import { Form, Space, Input, Button } from "antd";
import {MinusCircleOutlined, PlusCircleOutlined} from "@ant-design/icons"

const FinalTesting = () => {

    const [showPopup, setShowPopup] = useState(false)

    const onFinish = (value) => {
        console.log(value);
    };

    const initialValues = {
        ulList:[
            {menu:"frontend-developer"}
        ]
    }

  return (
    <div>
      <Form 
        initialValues={initialValues}
        onFinish={onFinish}>
        {/* <Form.Item name={"username"}>
          <Input placeholder="username" />
        </Form.Item> */}
        <Form.List name={"ulList"}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => {
                return (
                    <>
                  <Space key={field.key} direction="horizontal">
                    <Form.Item
                      name={[field.name, "menu"]}
                      rules={[{required:true, message:"this field is required"}]}
                      >
                      <Input placeholder="add field" />
                    </Form.Item>
                    <MinusCircleOutlined style={{marginBottom:"25px",marginRight:"10px", color:"red"}} onClick={()=>{remove(field.name)}} />
                  </Space>
                    </>
                );
              })}
              <Form.Item>
                <Button onClick={()=>{add()}}><PlusCircleOutlined/> Add Field</Button>
              </Form.Item>

            </>
          )}
        </Form.List>
        <Button htmlType="submit" type="primary">
          submit
        </Button>
      </Form>
    </div>
  );
};

export default FinalTesting;
