'use client'
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input, Button } from "@nextui-org/react";
import toast from 'react-hot-toast';


const Subscribe = () => {
    const [value, setValue] = useState("");



    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (value === "") return false;

        return validateEmail(value) ? false : true;
    }, [value]);

    async function handleSubscribe() {

        if (!isInvalid) {
            const res = await fetch(`/api/subscriber`, {

                method: "POST",

                body: JSON.stringify({
                    email: value
                }),

                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            if (res.status == 406) {
                toast.error("Somthing Wrong Or Already Subscribed!");
            } else {
                toast.success("Request Successful");
            }


        } else {
            toast.error("Invalid Email !");
        }


    }
    return (

        <Card className="max-w-[400px] p-2">
            <CardHeader className="flex gap-3 ">
                <h1 className='text-center bg-danger-500 w-full p-2 block items-center rounded-lg font-semibold text-3xl'>GO TO THE NEXT LEVEL</h1>
            </CardHeader>
            <Divider />
            <CardBody>
                <div className=" text-xl">
                    <Input
                        value={value}
                        type="email"
                        label="Email"
                        variant="bordered"
                        isInvalid={isInvalid}
                        color={isInvalid ? "danger" : "success"}
                        errorMessage={isInvalid && "Please enter a valid email"}
                        onValueChange={setValue}
                        className=" w-full"
                        placeholder='example@gmail.com'
                    />
                </div>
            </CardBody>
            <Divider />
            <CardFooter className=' justify-center'>
                <Button onClick={handleSubscribe} className=' w-full text-lg font-bold' color="danger" variant="bordered" >
                    SUBSCRIBE
                </Button>
            </CardFooter>
        </Card>

    )
}

export default Subscribe
