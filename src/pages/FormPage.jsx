import React, { useState } from 'react'
import Form1 from '../components/Forms/Form1'
import Form2 from '../components/Forms/Form2'
import Form3 from '../components/Forms/Form3'
import Form4 from '../components/Forms/Form4'
import Form5 from '../components/Forms/Form5'
import { useForm } from 'react-hook-form'


function FormPage() {
  const methods = useForm() ;
  const [step, setStep] = useState(1);
  

const submitHandler = (data)=>{
  console.log(data); 
}
 



  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const handleNextStep = async () => {
    const result = await methods.trigger(); // Trigger validation for the current step
    if (result) {
      nextStep();
    }
  };

  const onSubmit = (data) => {
    console.log('Final Form Data:', data);
  };


  return (
    <form onSubmit={methods.handleSubmit(submitHandler)} className='w-full  h-full flex flex-col'>
      
      {step === 1 && <Form1 methods = {methods }  />}
        {step === 2 && <Form2 methods={methods}  />}
        {step === 3 && <Form3 methods = {methods} />}
        {step === 4 && <Form4 methods = {methods} />}
        {step === 5 && <Form5 methods = {methods} />}
        


        <div className='flex gap-8 justify-end items-center m-10 '>
        {step >1 && <button type="button" onClick={prevStep}>Previous</button>}
        { step <5 && <button className='w-fit self-end' type="button" onClick={handleNextStep}>Save and Continue</button>}
        {step == 5 && <button type="submit" className='w-fit self-end'  onClick={handleNextStep}>Submit</button>}
        </div>
    </form>
  )
}

export default FormPage
