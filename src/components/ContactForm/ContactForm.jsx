import * as React from "react"
import Socials from "../Socials/Socials"

const ContactForm = () => {
  return (
    <div className="bg-white p-6" id="contact">
      <div className="mx-auto lg:flex flex-row max-w-screen-2xl items-center justify-between bg-gray-950 rounded-large">
        <div className="text-left grid grid-rows-1 gap-y-6 lg:w-2/4 py-20 p-6 lg:px-16 ">
          <form
            action="https://getform.io/f/4a6adcbe-1f77-4cd6-a6dc-c81b91d5e52a"
            method="POST"
          >
            <div className="relative mb-3 w-full" data-te-input-wrapper-init>
              <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.50rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-500 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="emailInput"
                placeholder="Email"
                name="email"
              />
              <label
                htmlFor="emailInput"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-700 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-700 dark:peer-focus:text-gray-700"
              >
                Email
              </label>
            </div>

            <div className="relative mb-3 w-full" data-te-input-wrapper-init>
              <textarea
                className="peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-700 dark:peer-focus:text-gray-700 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder="Message"
                name="message"
              ></textarea>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-700 dark:peer-focus:text-gray-700"
              >
                Message
              </label>
            </div>

            <div className="lg:text-right">
              <button
                type="submit"
                className="inline-block rounded bg-yellow-orange px-7 pt-3 pb-2.5 text-sm font-bold uppercase leading-normal text-gray-950 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Let's Talk
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-2/4 py-5">
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default ContactForm
