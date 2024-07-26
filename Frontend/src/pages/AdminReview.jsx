import React from 'react'

const AdminReview = () => {
  return (
    <>
    <div className="mt-[40px] flex">
        <div className="w-[25%] border-2 h-screen ">
            <div className="border-b-2 p-2 bg-green-300">
                Admin Dashboard
            </div>
            <div className="border-b-2 p-2">
                <a href="/admin/all-users">View Users</a>
            </div>
        </div>
        <div className="w-[75%] text-center mt-4">
            <div className="text-xl font-bold">
                <p>USER #</p>

                        <div className="border-t-2">
                            <div className="border-b-2 bg-green-100 text-left p-2">
                                <span className=" h-[40px] text-lg font-semibold">#User Name</span>
                                <div>
                                    <span id="users" className="text-lg font-semibold">Project Details</span>
                                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.</article>
                                </div>
                                <div>
                                    <button
                                        className="border-2 w-[100px] rounded-lg bg-green-300 hover:bg-green-500 p-1">Approve</button>
                                </div>

                                <div>
                                    <button
                                        className="border-2 w-[100px] rounded-lg bg-green-300 hover:bg-green-500 p-1">Delete</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
    </>
    )
}

export default AdminReview