import React from 'react'

const HomeBlogs = ({ darkMode }) => {
    return (
        <div>

            <h1 className='heading'>Blogs </h1>
            <h1 className='subHeading'>Recently Published Blogs
            </h1>
            <div className="md:grid grid-cols-3 gap-5">

                {/* part 1 */}

                <div className={`glassyEffect m-2 hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>

                    <img src="https://miro.medium.com/v2/resize:fit:900/1*uC7iO6jKhsJl7zVJ54c_ag.png" alt="" />
                    <div className="px-5">
                        <h1 className="text-2xl py-3 font-semibold hover:underline hover:text-[#00b58b]">What is HTTP?</h1>
                        <h1 className="text-sm py-1">Sep 10 2023  10 Comments</h1>
                        <p className="py-2">HTTP stands for HyperText Transfer Protocol. It is an application protocol that allows for the transfer of data. HTTP enables the retrieval of resources..</p>
                        <button className="hover:underline text-[#00b58b] py-3">Read More ..</button>
                    </div>
                </div>
                {/* part 2 */}

                <div className={`glassyEffect m-2 hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>

                    <img src="https://www.webcodzing.com/wp-content/uploads/2021/06/CSS-Flex-box-Complete.webp" alt="" />
                    <div className="px-5">
                        <h1 className="text-2xl py-3 font-semibold hover:underline hover:text-[#00b58b]">What is flexbox?</h1>
                        <h1 className="text-sm py-1">Sep 12 2023  10 Comments</h1>
                        <p className="py-2">Flexbox is a layout module that provides a flexible way to arrange and align elements within a container. It allows for easy manipulation of the size
                            ...</p>
                        <button className="hover:underline text-[#00b58b] py-3">Read More ..</button>
                    </div>
                </div>
                {/* part 3 */}

                <div className={`glassyEffect m-2 hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>

                    <img src="https://blog.hubspot.com/hs-fs/hubfs/dom-2.png?width=595&height=400&name=dom-2.png" alt="" />
                    <div className="px-5">
                        <h1 className="text-2xl py-3 font-semibold hover:underline hover:text-[#00b58b]"> What is the DOM?</h1>
                        <h1 className="text-sm py-1">Oct 5 2023  10 Comments</h1>
                        <p className="py-2">DOM stands for Document Object Model. It is a representation of an HTML document as a tree of tags ....</p>
                        <button className="hover:underline text-[#00b58b] py-3">Read More ..</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeBlogs