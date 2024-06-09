import React, { useState } from 'react';
import { Steps, Form, Input, Button, Space } from 'antd';
import { CheckCircleOutlined, LoginOutlined, MinusCircleOutlined, PlusCircleOutlined, ProfileOutlined } from '@ant-design/icons';

const StepForm = () => {

    const [current, setCurrent] = useState(0)
    const [category, setCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)

    const concate = [{...subCategory, category} ]
    console.log(concate);

    
    const onFinishLoginForm = (values) =>{
        setCategory(values)
        setCurrent(1)
    }

    const onFinishProfileForm = (values) =>{
        setSubCategory(values)
        setCurrent(2)
    }

    const onFinishForm = () =>{
        setCurrent(0)
    }

    const forms=[
        <CreateCategory onFinish={onFinishLoginForm} initialValues={category}/>,
        <SubCategory onFinish={onFinishProfileForm} initialValues={subCategory} />,
        <FinishForm onFinish={onFinishForm} />
    ]

    const isStepDisabled =(stepNumber)=>{
        if(stepNumber === 0){
            return false
        }
        if(stepNumber === 1){
            return category === null
        }
        if(stepNumber === 2){
            return category === null || subCategory === null
        }
    }

  return (
    <div style={{maxWidth:"1200px", margin:"50px"}}>
        <div className="" style={{margin:"20px"}}>
            <Steps onChange={setCurrent} current={current}>
                <Steps.Step disabled={isStepDisabled(0)} title={"Category"} icon={<LoginOutlined/>}  ></Steps.Step>
                <Steps.Step disabled={isStepDisabled(1)} title={"Sub-Category"} icon={<ProfileOutlined/>} ></Steps.Step>
                <Steps.Step disabled={isStepDisabled(2)} title={"Finish"} icon={<CheckCircleOutlined/>} ></Steps.Step>
            </Steps>     
        </div>
      {forms[current]}
    </div>
  );
}

const CreateCategory =({onFinish, initialValues}) =>{
    return(
        <Form onFinish={onFinish} initialValues={initialValues}>
            <Form.Item label='Create Category' name={"category"} rules={[{
                required:true,
                message:"please enter your category"
            }]}  >
                <Input />
            </Form.Item>
            <Button type='primary' htmlType='submit'>Continue</Button>
        </Form>
    )
}

const SubCategory = ({onFinish, initialValues}) =>{
    return (
        <Form onFinish={onFinish} initialValues={initialValues} style={{display:"flex", flexDirection:"column"}}>
            <div className="">
            <Form.Item label='Sub-Category Name' name={"subcategory_name"} rules={[{
                required:true,
                message:"please enter sub-category name"
            }]} >
                <Input/>
            </Form.Item>
            <div className="">
            <Form.List name={"subCategory"}>
                {(fields, {add, remove})=>(
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <Button onClick={()=>{add()}} type='primary' style={{width:"100px" , marginBottom:"20px"}}><PlusCircleOutlined/> Add Field</Button>
                        {fields.map((field, index)=>{
                            return(
                                <Space key={field.key}  >
                                    <Form.Item 
                                        label='Product Name'
                                        name={[field.name,"productName"]}
                                        rules={[{
                                            required:true,
                                            message:"please enter product name"
                                        }]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item 
                                        label="Links"
                                        name={[field.name,"links"]}
                                        rules={[{
                                            required:true,
                                            message:"please enter product link"
                                        }]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button onClick={()=>{remove(field.name)}}><MinusCircleOutlined/></Button>
                                    </Form.Item>
                                </Space>
                            )
                        })}
                    </div>
                )}
            </Form.List>
            <Space>
                <Form.Item 
                    label='Product Name'
                    name={"productname"}
                    rules={[{
                        required:true,
                        message:"please enter product name"
                    }]}

                    >
                    <Input/>
                </Form.Item>
                <Form.Item 
                    label='Link'
                    name={"link"}
                    rules={[{
                        required:true,
                        message:"please enter product link"
                    }]}
                >
                    <Input/>
                </Form.Item>
            </Space>
            </div>
            </div>
            <Button type='primary' htmlType='submit' style={{width:"100px"}}>submit</Button>
        </Form>
    )
}

const FinishForm =({onFinish})=>{
       return(
        <>
            <h2 style={{marginBottom:"20px"}}>you have all done</h2>
            <Button type='primary' onClick={onFinish} >Finish</Button>
        </>
       )
}

export default StepForm;
