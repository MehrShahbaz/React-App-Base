import { FC, useState } from "react";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/authSlice";

const Login: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("helloworld123@hello.com");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(email));
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded-2xl shadow-md w-full max-w-sm space-y-4'
      >
        <h2 className='text-2xl font-semibold text-gray-800 text-center'>
          Login
        </h2>

        <div className='flex flex-col'>
          <label htmlFor='email' className='mb-1 text-sm text-gray-600'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='you@example.com'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Login;
