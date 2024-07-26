// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { toast } from 'react-toastify';

// // // // // const Donate = () => {
// // // // //     const [title, setTitle] = useState({title:" "});
// // // // //     const [amount, setAmount] = useState('');
// // // // //     const navigate = useNavigate();

// // // // // useEffect(() => {
// // // // //     const fetchTitle = async () =>{
// // // // //         try{
// // // // //             const response = await fetch('/api/donate', {
// // // // //                 method: 'GET',
// // // // //           credentials: 'include', // Include credentials to send cookies
// // // // //           headers: {
// // // // //             'Content-Type': 'application/json'
// // // // //           }
// // // // //             });
// // // // //             console.log("res",response)
// // // // //             if (response.ok) {
// // // // //               const data = await response.json();
// // // // //               setTitle({ title: data.title});
// // // // //             } else {
// // // // //               console.error('Failed to fetch project title');
// // // // //             }
// // // // //           } catch (error) {
// // // // //             console.error('Error:', error);
// // // // //           }
// // // // //         };
// // // // //     fetchTitle();
// // // // // });
// // // // //     const submitDonation = async (e) => {
// // // // //         e.preventDefault();
// // // // //         const newDonation = {
// // // // //             title: title.title,
// // // // //             amount,
// // // // //         };

// // // // //         const res = await addDonation(newDonation);
// // // // //         if (res.ok) {
// // // // //             toast.success('Donation successful');
// // // // //             navigate('/thank-you'); // Redirect to a thank you page
// // // // //         } else {
// // // // //             toast.error('Failed to donate');
// // // // //         }
// // // // //     };

// // // // //     const addDonation = async (formData) => {
// // // // //         const res = await fetch('/api/donate', {
// // // // //             method: 'POST',
// // // // //             headers: {
// // // // //                 'Content-Type': 'application/json',
// // // // //             },
// // // // //             body: JSON.stringify(formData)
// // // // //         });
// // // // //         return res;
// // // // //     };

// // // // //     return (
// // // // //         <div className='h-screen'>
// // // // //             <form onSubmit={submitDonation}>
// // // // //                 <div className="mt-6">
// // // // //                     <h1 className='text-3xl text-center font-semibold'>Donate for the Dream</h1>
// // // // //                     <div className='w-[700px] rounded-2xl shadow-2xl shadow-stone-950 mx-auto mt-6 p-4'>
// // // // //                         <div className='mt-4'>
// // // // //                             <label className='text-xl font-medium'>Title</label>
// // // // //                             <span id='title'>{title.title}</span>
// // // // //                         </div>

// // // // //                         <div className='mt-4'>
// // // // //                             <label className='text-xl font-medium'>Donation Amount</label>
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 id="amount"
// // // // //                                 name="amount"
// // // // //                                 className="border rounded w-full py-2 px-3 mb-2"
// // // // //                                 placeholder="Enter Your Donation"
// // // // //                                 required
// // // // //                                 value={amount}
// // // // //                                 onChange={(e) => setAmount(e.target.value)}
// // // // //                             />
// // // // //                         </div>

// // // // //                     </div>
// // // // //                 </div>

// // // // //                 <div className="w-[200px] mx-auto">
// // // // //                     <button
// // // // //                         type="submit"
// // // // //                         className="w-[200px] bg-green-300 p-2 rounded-lg mt-[30px] hover:bg-green-500"
// // // // //                     >
// // // // //                         Donate
// // // // //                     </button>
// // // // //                 </div>
// // // // //             </form>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default Donate;

// // // import React, { useEffect, useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { toast } from 'react-toastify';
// // // import { useParams } from 'react-router-dom';

// // // // //     const { id } = useParams()

// // // // //     const [title, setTitle] = useState('');
// // // // //     const [amount, setAmount] = useState('');
// // // // //     const navigate = useNavigate();

// // // // //     useEffect(() => {
// // // // //         const fetchTitle = async () => {
// // // // //             try {
// // // // //                 const response = await fetch('/api/project/${id}', {
// // // // //                     method: 'GET',
// // // // //                     credentials: 'include',
// // // // //                     headers: {
// // // // //                         'Content-Type': 'application/json'
// // // // //                     }
// // // // //                 });
// // // // //                 if (response.ok) {
// // // // //                     const data = await response.json();
// // // // //                     setTitle(data.title);
// // // // //                 } else {
// // // // //                     console.error('Failed to fetch project title');
// // // // //                 }
// // // // //             } catch (error) {
// // // // //                 console.error('Error:', error);
// // // // //             }
// // // // //         };
// // // // //         fetchTitle();
// // // // //     }, []);

// // // // //     const submitDonation = async (e) => {
// // // // //         e.preventDefault();
// // // // //         const newDonation = {
// // // // //             title,
// // // // //             amount,
// // // // //         };

// // // // //         try {
// // // // //             const res = await addDonation(newDonation);
// // // // //             if (res.ok) {
// // // // //                 toast.success('Donation successful');
// // // // //                 navigate('/thank-you');
// // // // //             } else {
// // // // //                 toast.error('Failed to donate');
// // // // //             }
// // // // //         } catch (error) {
// // // // //             console.error('Error:', error);
// // // // //             toast.error('Failed to donate');
// // // // //         }
// // // // //     };

// // // // //     const addDonation = async (formData) => {
// // // // //         const res = await fetch('/api/donate', {
// // // // //             method: 'POST',
// // // // //             headers: {
// // // // //                 'Content-Type': 'application/json',
// // // // //             },
// // // // //             body: JSON.stringify(formData)
// // // // //         });
// // // // //         return res;
// // // // //     };

// // // // //     return (
// // // // //         <div className='h-screen'>
// // // // //             <form onSubmit={submitDonation}>
// // // // //                 <div className="mt-6">
// // // // //                     <h1 className='text-3xl text-center font-semibold'>Donate for the Dream</h1>
// // // // //                     <div className='w-[700px] rounded-2xl shadow-2xl shadow-stone-950 mx-auto mt-6 p-4'>
// // // // //                         <div className='mt-4'>
// // // // //                             <label className='text-xl font-medium'>Title</label>
// // // // //                             <span id='title'>{title}</span>
// // // // //                         </div>

// // // // //                         <div className='mt-4'>
// // // // //                             <label className='text-xl font-medium'>Donation Amount</label>
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 id="amount"
// // // // //                                 name="amount"
// // // // //                                 className="border rounded w-full py-2 px-3 mb-2"
// // // // //                                 placeholder="Enter Your Donation"
// // // // //                                 required
// // // // //                                 value={amount}
// // // // //                                 onChange={(e) => setAmount(e.target.value)}
// // // // //                             />
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 <div className="w-[200px] mx-auto">
// // // // //                     <button
// // // // //                         type="submit"
// // // // //                         className="w-[200px] bg-green-300 p-2 rounded-lg mt-[30px] hover:bg-green-500"
// // // // //                     >
// // // // //                         Donate
// // // // //                     </button>
// // // // //                 </div>
// // // // //             </form>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // const Donate = () => {
// // //     const [title, setTitle] = useState('');
// // //     const [amount, setAmount] = useState('');
// // //     const navigate = useNavigate();
// // //     const { id } = useParams(); // Get the project ID from the URL

// // //     useEffect(() => {
// // //         const fetchTitle = async () => {
// // //             try {
// // //                 const response = await fetch(`/api/donate`, {
// // //                     method: 'GET',
// // //                     credentials: 'include',
// // //                     headers: {
// // //                         'Content-Type': 'application/json'
// // //                     }
// // //                 });
// // //                 if (response.ok) {
// // //                     const data = await response.json();
// // //                     setTitle(data.title);
// // //                 } else {
// // //                     console.error('Failed to fetch project title');
// // //                 }
// // //             } catch (error) {
// // //                 console.error('Error:', error);
// // //             }
// // //         };
// // //         fetchTitle();
// // //     }, [id]); // Dependency on id to refetch if it changes

// // //     const submitDonation = async (e) => {
// // //         e.preventDefault();
// // //         const newDonation = {
// // //             title,
// // //             amount,
// // //         };

// // //         try {
// // //             const res = await addDonation(newDonation);
// // //             if (res.ok) {
// // //                 toast.success('Donation successful');
// // //                 navigate('/thank-you');
// // //             } else {
// // //                 toast.error('Failed to donate');
// // //             }
// // //         } catch (error) {
// // //             console.error('Error:', error);
// // //             toast.error('Failed to donate');
// // //         }
// // //     };

// // //     const addDonation = async (formData) => {
// // //         const res = await fetch('/api/donate', {
// // //             method: 'POST',
// // //             headers: {
// // //                 'Content-Type': 'application/json',
// // //             },
// // //             body: JSON.stringify(formData)
// // //         });
// // //         return res;
// // //     };

// // //     return (
// // //         <div className='h-screen'>
// // //             <form onSubmit={submitDonation}>
// // //                 <div className="mt-6">
// // //                     <h1 className='text-3xl text-center font-semibold'>Donate for the Dream</h1>
// // //                     <div className='w-[700px] rounded-2xl shadow-2xl shadow-stone-950 mx-auto mt-6 p-4'>
// // //                         <div className='mt-4'>
// // //                             <label className='text-xl font-medium'>Title</label>
// // //                             <span id='title'>{title}</span>
// // //                         </div>

// // //                         <div className='mt-4'>
// // //                             <label className='text-xl font-medium'>Donation Amount</label>
// // //                             <input
// // //                                 type="text"
// // //                                 id="amount"
// // //                                 name="amount"
// // //                                 className="border rounded w-full py-2 px-3 mb-2"
// // //                                 placeholder="Enter Your Donation"
// // //                                 required
// // //                                 value={amount}
// // //                                 onChange={(e) => setAmount(e.target.value)}
// // //                             />
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 <div className="w-[200px] mx-auto">
// // //                     <button
// // //                         type="submit"
// // //                         className="w-[200px] bg-green-300 p-2 rounded-lg mt-[30px] hover:bg-green-500"
// // //                     >
// // //                         Donate
// // //                     </button>
// // //                 </div>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default Donate;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { useParams } from 'react-router-dom';

// // // // const Donate = () => {
// // // //   const { projectId } = useParams();
// // // //   const [project, setProject] = useState(null);
// // // //   const [pledgeAmount, setPledgeAmount] = useState('');

// // // //   useEffect(() => {
// // // //     fetch(`/api/projects/${projectId}`)
// // // //       .then(response => response.json())
// // // //       .then(data => setProject(data))
// // // //       .catch(error => console.error('Error fetching project:', error));
// // // //   }, [projectId]);

// // // //   const handlePledge = () => {
// // // //     fetch(`/api/projects/${projectId}/pledge`, {
// // // //       method: 'POST',
// // // //       headers: {
// // // //         'Content-Type': 'application/json'
// // // //       },
// // // //       body: JSON.stringify({ pledgedAmount: Number(pledgeAmount) })
// // // //     })
// // // //       .then(response => response.json())
// // // //       .then(data => {
// // // //         console.log('Pledge successful:', data);
// // // //         setProject(prevProject => ({
// // // //           ...prevProject,
// // // //           pledgedAmount: prevProject.pledgedAmount + Number(pledgeAmount)
// // // //         }));
// // // //         setPledgeAmount('');
// // // //       })
// // // //       .catch(error => console.error('Error making pledge:', error));
// // // //   };

// // // //   if (!project) return <div>Loading...</div>;

// // // //   return (
// // // //     <div className='bg-white rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
// // // //       <h2 className='font-bold text-lg text-black '>{project.title}</h2>
// // // //       <p className='text-black my-2 mx-5'>{project.description}</p>
// // // //       <p className='text-black my-2 mx-5'>Target: {project.targetAmount}</p>
// // // //       <p className='text-black my-2 mx-5'>Raised: {project.pledgedAmount}</p>
// // // //       <input
// // // //         type='number'
// // // //         value={pledgeAmount}
// // // //         onChange={(e) => setPledgeAmount(e.target.value)}
// // // //         placeholder='Enter pledge amount'
// // // //         className='my-2 mx-5 p-2 border'
// // // //       />
// // // //       <button onClick={handlePledge} className="w-[200px] border-2 bg-green-300 p-2 rounded-lg drop-shadow-lg hover:bg-green-500">
// // // //         Pledge
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Donate;


// // import React, { useState, useEffect } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import { toast } from 'react-toastify';

// // const Donate = () => {
// //     const [title, setTitle] = useState('');
// //     const [amount, setAmount] = useState('');
// //     const navigate = useNavigate();
// //     const { id } = useParams(); // Get the project ID from the URL

// //     useEffect(() => {
// //         const fetchTitle = async () => {
// //             try {
// //                 const response = await fetch(`/api/projects/${id}`, {
// //                     method: 'GET',
// //                     credentials: 'include',
// //                     headers: {
// //                         'Content-Type': 'application/json'
// //                     }
// //                 });
// //                 if (response.ok) {
// //                     const data = await response.json();
// //                     setTitle(data.title);
// //                 } else {
// //                     console.error('Failed to fetch project title');
// //                 }
// //             } catch (error) {
// //                 console.error('Error:', error);
// //             }
// //         };
// //         fetchTitle();
// //     }, [id]); // Dependency on id to refetch if it changes

// //     const submitDonation = async (e) => {
// //         e.preventDefault();
// //         const newDonation = {
// //             title,
// //             amount: parseFloat(amount),
// //         };

// //         try {
// //             const res = await addDonation(newDonation);
// //             if (res.ok) {
// //                 toast.success('Donation successful');
// //                 navigate('/thank-you');
// //             } else {
// //                 toast.error('Failed to donate');
// //             }
// //         } catch (error) {
// //             console.error('Error:', error);
// //             toast.error('Failed to donate');
// //         }
// //     };

// //     const addDonation = async (formData) => {
// //         const res = await fetch('/api/donate', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(formData)
// //         });
// //         return res;
// //     };

// //     return (
// //         <div className='h-screen'>
// //             <form onSubmit={submitDonation}>
// //                 <div className="mt-6">
// //                     <h1 className='text-3xl text-center font-semibold'>Donate for the Dream</h1>
// //                     <div className='w-[700px] rounded-2xl shadow-2xl shadow-stone-950 mx-auto mt-6 p-4'>
// //                         <div className='mt-4'>
// //                             <label className='text-xl font-medium'>Title</label>
// //                             <span id='title'>{title}</span>
// //                         </div>

// //                         <div className='mt-4'>
// //                             <label className='text-xl font-medium'>Donation Amount</label>
// //                             <input
// //                                 type="text"
// //                                 id="amount"
// //                                 name="amount"
// //                                 className="border rounded w-full py-2 px-3 mb-2"
// //                                 placeholder="Enter Your Donation"
// //                                 required
// //                                 value={amount}
// //                                 onChange={(e) => setAmount(e.target.value)}
// //                             />
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="w-[200px] mx-auto">
// //                     <button
// //                         type="submit"
// //                         className="w-[200px] bg-green-300 p-2 rounded-lg mt-[30px] hover:bg-green-500"
// //                     >
// //                         Donate
// //                     </button>
// //                 </div>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Donate;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Donate = () => {
//   const [title, setTitle] = useState('');
//   const [amount, setAmount] = useState('');
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchTitle = async () => {
//       try {
//         const response = await fetch(`/api/projects/${id}`, {
//           method: 'GET',
//           credentials: 'include',
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setTitle(data.title);
//         } else {
//           console.error('Failed to fetch project title');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };
//     fetchTitle();
//   }, [id]);

//   const submitDonation = async (e) => {
//     e.preventDefault();
//     const newDonation = {
//       title,
//       amount: parseFloat(amount),
//     };

//     try {
//       const res = await addDonation(newDonation);
//       if (res.ok) {
//         toast.success('Donation successful');
//         navigate('/thank-you');
//       } else {
//         toast.error('Failed to donate');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error('Failed to donate');
//     }
//   };

//   const addDonation = async (formData) => {
//     const res = await fetch('/api/donate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData)
//     });
//     return res;
//   };

//   return (
//     <div className='h-screen'>
//       <form onSubmit={submitDonation}>
//         <div className="mt-6">
//           <h1 className='text-3xl text-center font-semibold'>Donate for the Dream</h1>
//           <div className='w-[700px] rounded-2xl shadow-2xl shadow-stone-950 mx-auto mt-6 p-4'>
//             <div className='mt-4'>
//               <label className='text-xl font-medium'>Title</label>
//               <span id='title'>{title}</span>
//             </div>

//             <div className='mt-4'>
//               <label className='text-xl font-medium'>Donation Amount</label>
//               <input
//                 type="text"
//                 id="amount"
//                 name="amount"
//                 className="border rounded w-full py-2 px-3 mb-2"
//                 placeholder="Enter Your Donation"
//                 required
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="w-[200px] mx-auto">
//           <button
//             type="submit"
//             className="w-[200px] bg-green-300 p-2 rounded-lg mt-[30px] hover:bg-green-500"
//           >
//             Donate
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Donate;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Donate = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          const data = await response.json();
          setTitle(data.title);
        } else {
          console.error('Failed to fetch project title');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchTitle();
  }, [id]);

  const submitDonation = async (e) => {
    e.preventDefault();
    const newDonation = {
      title,
      amount: parseFloat(amount),
    };

    try {
      const res = await addDonation(newDonation);
      if (res.ok) {
        const data = await res.json();
        toast.success('Donation successful');
        // navigate('/payment');   //working code never delete
        navigate('/payment', { state: { title: data.project.title, amount: data.project.amount }});
      } else {
        toast.error('Failed to donate');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to donate');
    }
  };

  const addDonation = async (formData) => {
    const res = await fetch('/api/donate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    return res;
  };

  return (
    <div className='h-screen'>
      <form onSubmit={submitDonation}>
        <div className="mt-6">
          <h1 className='text-3xl text-center font-semibold'>Donate for the Dream</h1>
          <div className='w-[700px] rounded-2xl shadow-2xl shadow-stone-950 mx-auto mt-6 p-4'>
            <div className='mt-4'>
              <label className='text-xl font-medium'>Title</label>
              <span id='title'>{title}</span>
            </div>

            <div className='mt-4'>
              <label className='text-xl font-medium'>Donation Amount</label>
              <input
                type="text"
                id="amount"
                name="amount"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter Your Donation"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="w-[200px] mx-auto">
          <button
            type="submit"
            className="w-[200px] bg-green-300 p-2 rounded-lg mt-[30px] hover:bg-green-500"
          >
            Donate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Donate;