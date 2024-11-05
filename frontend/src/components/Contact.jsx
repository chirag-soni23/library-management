import React from 'react'

const Contact = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <div className='mt-20 flex flex-col items-center justify-center'>
      <h1 className={`text-white uppercase text-2xl font-bold`}>
        Contact <span className='text-[#08D665]'>Us</span>
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col mt-10 gap-4 items-center justify-center w-full max-w-md'>
        <input 
          name="name"
          className={`bg-black w-full border border-white text-white  p-2 outline-none focus:border-[#08D665]`}
          type="text"
          placeholder='Name'
          required
        />
        <div className='flex w-full gap-4'>
          <input 
            name="email"
            className={`bg-black w-full border border-white text-white  p-2 outline-none focus:border-[#08D665]`}
            type="email"
            placeholder='Email'
            required
          />
          <input 
            name="subject"
            className={`bg-black w-full border border-white text-white  p-2 outline-none focus:border-[#08D665]`}
            type="text"
            placeholder='Subject'
            required
          />
        </div>
        <textarea 
          name="message"
          className={`bg-black w-full border border-white text-white  p-2 outline-none focus:border-[#08D665]`}
          placeholder='Your Message'
          required
        ></textarea>
        <button 
          type="submit"
          className='text-center bg-[#08D665] text-white rounded-full p-2 px-6'
        >
         Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact