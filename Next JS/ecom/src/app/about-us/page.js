// app/about/page.jsx  (for Next.js 13+ with App Router)
// or pages/about.js   (for Next.js 12 or if using Pages Router)

"use client"

import { useState } from "react";

export default function About() {

  let [modal, setModal] = useState()

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20">

      <button onClick={() => setModal(!modal)}>Open Modal</button>
      {modal && <div>
        Welcome
      </div>}


      <h1 className="text-[40px] font-bold">Welcome to About Page</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
    </div>
  );
}
