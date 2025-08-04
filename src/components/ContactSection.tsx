'use client'

import { useState } from 'react'
import ResponsiveBadge from './ResponsiveBadge'

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', form)
    }

    return (
        <section className="flex flex-col bg-white dark:bg-black px-6 py-8 gap-10 opacity-100 

                    md:px-10 md:py-12 
                    lg:px-14 lg:py-16  
                    xl:px-16 xl:py-20">

            <ResponsiveBadge label="Conatct Us" />

            <div className="flex flex-col lg:flex-row justify-between gap-10 opacity-100">
                {/* Left - Text */}
                <h2
                    className="h-[128px] opacity-100 
                        md:h-[176px] lg:h-[288px] lg:max-w-[396px] 
                        lg:w-1/2 xl:h-[360px] xl:max-w-[572px]
                        text-[#110C22] dark:text-white font-manrope font-semibold 
                        text-[52px] leading-[64px] tracking-[-0.01em]
                        md:text-[76px] md:leading-[88px] md:tracking-normal md:font-bold 
                        lg:text-[88px] lg:leading-[96px] lg:font-bold  
                        xl:text-[104px] xl:leading-[120px] xl:font-bold"
                >
                    {/* Default + small: inline layout */}
                    <span className="block lg:hidden gap-2">
                        Let’s
                        <span className="text-[#0084FF] dark:text-[#71BBFF]">Get in</span> <br />
                        <span className="text-[#0BAA60] dark:text-[#6FDAA6]">touch</span>
                    </span>

                    {/* Medium and above: broken layout */}
                    <span className="hidden lg:block">
                        Let’s <br />
                        <span className="text-[#0084FF] dark:text-[#71BBFF]">Get in</span> <br />
                        <span className="text-[#0BAA60] dark:text-[#6FDAA6]">Touch</span>
                    </span>
                </h2>

                {/* Right - Form */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full h-fit bg-[#F8F8F8] dark:bg-[#161616] rounded-[32px] p-6 space-y-6 opacity-100 shadow-sm 
      md:rounded-[48px] md:p-8
      lg:w-1/2"
                >
                    <div className="w-full h-fit opacity-100 space-y-6">
                        <div className="w-full h-fit opacity-100 space-y-1">
                            <label className="w-full h-fit pl-1 text-[12px] leading-4 font-manrope font-semibold text-[#110C22] dark:text-white">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full px-[12px] py-[8px] rounded-[12px] border border-[#D9D8DC] dark:border-[#3D3D3D] dark:bg-neutral-800 text-[#110C22] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9D8DC] dark:focus:ring-[#3D3D3D] text-[14px] leading-[24px] font-medium font-manrope placeholder-[#8D8A95] dark:placeholder-[#7A7A7A]"
                                required
                            />
                        </div>

                        <div className="w-full h-fit opacity-100 space-y-1">
                            <label className="w-full h-fit pl-1 text-[12px] leading-4 font-manrope font-semibold text-[#110C22] dark:text-white">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="yourname@example.com"
                                className="w-full px-[12px] py-[8px] rounded-[12px] border border-[#D9D8DC] dark:border-[#3D3D3D] dark:bg-neutral-800 text-[#110C22] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9D8DC] dark:focus:ring-[#3D3D3D] text-[14px] leading-[24px] font-medium font-manrope placeholder-[#8D8A95] dark:placeholder-[#7A7A7A]"
                                required
                            />
                        </div>

                        <div>
                            <label className="w-full h-fit pl-1 text-[12px] leading-4 font-manrope font-semibold text-[#110C22] dark:text-white">Your Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Excited about your work.."
                                rows={2}
                                className="w-full h-full px-3 py-2 rounded-[16px] border border-gray-300 dark:border-gray-600  dark:bg-neutral-800 text-[14px] leading-6 font-manrope font-medium text-[#110C22] dark:text-white outline-1 outline-[#D9D8DC] dark:outline-[#3D3D3D] focus:outline-2 focus:outline-[#D9D8DC] dark:focus:outline-[#3D3D3D] resize-none placeholder-[#8D8A95] dark:placeholder-[#7A7A7A]"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>


        </section>
    )
}
