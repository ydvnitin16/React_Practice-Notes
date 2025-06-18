// 🔥 Why React Hook Form?
// ✅ Minimal re-renders
// ✅ Easy validation
// ✅ Built-in support for schema validation (like Yup, Zod)
// ✅ Great performance
// ✅ Simple API

// 🔥 REACT FORM HOOK
// npm install react-hook-form

// import { useForm } from 'react-hook-form';

// export default function App() {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         reset,
//         formState: { errors },
//     } = useForm({
//         defaultValues: {
//             username: 'ydvnitin16',
//             name: 'Nitin',
//         },
//     });
//     // For Validations :- Use ZOD(TS ) or YUP(JS )

//     const onSubmit = (data) => {
//         console.log('data', data);
//         reset(); // if(default) then setted to default values so be carefull
//     };

//     // We can watch them in real-time using watch()
//     console.log(watch()); // we can pass the name of register to watch on particular

//     // Register is used in place of name and passed as argument to the onSubmit funtion passed in the handleSubmit
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input
//                 {...register('username', {
//                     required: true,
//                     pattern: {
//                         value: /^\S+@\S+$/i,
//                         message: 'Invalid Email Format',
//                     },
//                 })}
//                 placeholder="username"
//             />
//             <input
//                 {...register('name', { required: true })}
//                 placeholder="name"
//             />
//             <select {...register('city', { required: true })}>
//                 <option value="gurugram">Gurugram</option>
//                 <option value="mumbai">Mumbai</option>
//                 <option value="chandigarh">Chandigarh</option>
//             </select>
//             <input type="radio" value="yes" {...register('subscribe')} /> Yes
//             <input type="radio" value="no" {...register('subscribe')} /> No
//             <input type="checkbox" {...register('agree')} /> I agree
//             {errors.username && <span>{errors.username.message}</span>}
//             <input type="submit" />
//         </form>
//     );
// }

// 🔥 PRACTICE PROBLEM
import { useForm } from 'react-hook-form';

// const App = () => {
//     const { register, watch, handleSubmit, reset, formState: {errors}} = useForm();

//     const onSubmit = ( data) => {
//       console.log(data);
//     };

//     const name = watch('full_name')
//     const email = watch('email')
//     const phone = watch('phone')
//     const position = watch('position')
//     const cover_letter = watch('cover_letter')
//     const terms = watch('terms')

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Job Application Form</h2>
//       <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

//         {/* Full Name */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Full Name</label>
//           <input {...register('full_name', {required: 'Name is required'})}
//             type="text"
//             placeholder='John Doe'
//             className="mt-1 px-3 py-3  block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//           { errors.full_name && <p className='text-red-500 font-medium pl-3 pt-1'>{errors.full_name.message}</p>}
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input {...register('email', {required: 'Email is Required', pattern: {value: /^\S+@\S+$/i, message: 'Invalid Email Format'}})}
//             type="text"
//             placeholder='johndoe@gmail.com'
//             className="mt-1 px-3 py-3  block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//           { errors.email && <p className='text-red-500 font-medium pl-3 pt-1'>{errors.email.message}</p>}
//         </div>

//         {/* Phone Number */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Phone Number (optional)*</label>
//           <input {...register('phone')}
//             type="tel"
//             placeholder='+91 9898987787'
//             className="mt-1 px-3 py-3  block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Position Applied */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Position Applied</label>
//           <select {...register('position', {validate: (value) => (value === 'frontend' || value === 'backend' || value === 'fullstack') || 'Please select a position' } )}
//             className="mt-1 px-3 py-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option value="">Select Position</option>
//             <option value="frontend">Frontend Developer</option>
//             <option value="backend">Backend Developer</option>
//             <option value="fullstack">Full Stack Developer</option>
//           </select>
//           { errors.position && <p className='text-red-500 font-medium pl-3 pt-1'>{errors.position.message}</p>}
//         </div>

//         {/* Cover Letter */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Cover Letter (optional)*</label>
//           <textarea {...register('cover_letter', )}
//             rows="4"
//             placeholder='You can tell here about yourself.'
//             className="mt-1 px-3 py-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           ></textarea>
//         </div>

//         {/* Terms Checkbox */}
//         <div className="flex items-start">
//           <div className="flex items-center h-5">
//             <input {...register('terms', {required: 'Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'})}
//               id="terms"
//               type="checkbox"
//               className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//             />

//           </div>
//           <div className="ml-2 text-sm">
//             <label htmlFor="terms" className="font-medium text-gray-700">
//               I agree to the terms and conditions
//             </label>
//             { errors.terms && <p className='text-red-500 font-medium pl-3 pt-1'>{errors.terms.message}</p>}

//           </div>

//         </div>

//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Submit Application
//           </button>
//         </div>

//       </form>

//        {/* Preview Section */}
//       <div className="mt-10 p-4 border-t border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">Preview:</h3>
//         <p><strong>Full Name:</strong> { name }</p>
//         <p><strong>Email:</strong> { email }</p>
//         <p><strong>Phone:</strong> { phone }</p>
//         <p><strong>Position:</strong> { position }</p>
//         <p><strong>Cover Letter:</strong> { cover_letter }</p>
//         <p><strong>Agreed to Terms:</strong> { terms ? 'True' : 'False' }</p>
//       </div>
//     </div>
//   )
// }

// export default App;

// 🔰 What is Yup?
// Yup is a JavaScript schema validation library.
// It lets you define rules for your data (like required, pattern, min, etc.) in a clean and readable way.
// npm install yup @hookform/resolvers

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const App = () => {
  // design a schema
    const schema = yup.object({
        full_name: yup.string().trim().required('Name is required'),
        email: yup.string().email('Invalid Email Format').required('Email is required'),
        position: yup.string()
            .oneOf(
                ['frontend', 'backend', 'fullstack'],
                'Please select valid position'
            )
            .required(''),
        phone: yup.string().matches(/^[0-9]{10}$/, "Phone must be 10 digits"),
        terms: yup.bool().oneOf([true], 'You must agree to terms'),
    });

    // resolve the schema in the useForm
    const {
        register,
        watch,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log(data);
        reset()
    };

    const name = watch('full_name');
    const email = watch('email');
    const phone = watch('phone');
    const position = watch('position');
    const cover_letter = watch('cover_letter');
    const terms = watch('terms');

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Job Application Form
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        {...register('full_name')}
                        type="text"
                        placeholder="John Doe"
                        className="mt-1 px-3 py-3  block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.full_name && (
                        <p className="text-red-500 font-medium pl-3 pt-1">
                            {errors.full_name.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        {...register('email')}
                        type="text"
                        placeholder="johndoe@gmail.com"
                        className="mt-1 px-3 py-3  block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.email && (
                        <p className="text-red-500 font-medium pl-3 pt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Phone Number (optional)*
                    </label>
                    <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+91 9898987787"
                        className="mt-1 px-3 py-3  block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.phone && (
                        <p className="text-red-500 font-medium pl-3 pt-1">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                {/* Position Applied */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Position Applied
                    </label>
                    <select
                        {...register('position')}
                        className="mt-1 px-3 py-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select Position</option>
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="fullstack">Full Stack Developer</option>
                    </select>
                    {errors.position && (
                        <p className="text-red-500 font-medium pl-3 pt-1">
                            {errors.position.message}
                        </p>
                    )}
                </div>

                {/* Cover Letter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Cover Letter (optional)*
                    </label>
                    <textarea
                        {...register('cover_letter')}
                        rows="4"
                        placeholder="You can tell here about yourself."
                        className="mt-1 px-3 py-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            {...register('terms')}
                            id="terms"
                            type="checkbox"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                    </div>
                    <div className="ml-2 text-sm">
                        <label
                            htmlFor="terms"
                            className="font-medium text-gray-700"
                        >
                            I agree to the terms and conditions
                        </label>
                        {errors.terms && (
                            <p className="text-red-500 font-medium pl-3 pt-1">
                                {errors.terms.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit Application
                    </button>
                </div>
            </form>

            {/* Preview Section */}
            <div className="mt-10 p-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Preview:
                </h3>
                <p>
                    <strong>Full Name:</strong> {name}
                </p>
                <p>
                    <strong>Email:</strong> {email}
                </p>
                <p>
                    <strong>Phone:</strong> {phone}
                </p>
                <p>
                    <strong>Position:</strong> {position}
                </p>
                <p>
                    <strong>Cover Letter:</strong> {cover_letter}
                </p>
                <p>
                    <strong>Agreed to Terms:</strong> {terms ? 'True' : 'False'}
                </p>
            </div>
        </div>
    );
};

export default App;
