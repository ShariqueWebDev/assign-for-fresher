import React, { useState } from "react";
import { Form, Input, Button, Space, Select } from "antd";

const Navbar = () => {
    const [data, setData] = useState([])
    const onFinish = (value) => {
        console.log({value});
        setData(value)
    }
    console.log("user data: " + data);
  return (
    <div>
      <Form onFinish={onFinish} >
        <Form.Item name={"teacher"} label={"Teacher Name: "}>
          <Input placeholder="teacher name" />
        </Form.Item>
        <Form.Item name={"class"} label={"Class Name: "}>
          <Input placeholder="class name" />
        </Form.Item>
        <Form.List name={"students"}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => {
                 return (
                  <Space key={field.key} direction="horizontal">
                    <Form.Item
                      name={[field.name, "first"]}
                      label={`${index + 1}-Student`}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item key={field.key} name={[field.name, "last"]}>
                      <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item name={[field.name, "gender"]}>
                      <Select placeholder={"gender"}  >
                        {["Male", "Female"].map((gender) => {
                          return (
                            <Select.Option value={gender} key={gender} >
                              {gender}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  block
                  onClick={() => {
                    add();
                  }}
                >
                  +
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
          <Button htmlType="submit" type="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default Navbar;
