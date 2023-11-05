const TextField = ({ label, name, value, onChange }) => {
   return (
      <div className="my-3">
         <label
            htmlFor={name}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
         </label>
         <input
            onChange={onChange}
            type="text"
            name={name}
            value={value}
            id={name}
            className="bg-gray-50 border-gray-300 border-2 text-gray-900 text-sm rounded-lg focus:border-secondary focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
         />
      </div>
   );
};

export default TextField;
