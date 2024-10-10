import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}
export const BulkOrder: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const formErrors: Partial<FormData> = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="bg-lightGray px-4 md:px-10 xl:px-24">
        <h1 className="text-3xl">Bulk Order</h1>
        <p className="font-semibold mt-2 text-xl text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum delectus
          voluptates qui Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Atque ratione aut natus saepe neque a necessitatibus sunt
          obcaecati corrupti vitae.{' '}
        </p>
        <form onSubmit={handleSubmit} className="w-full  mt-8">
          <div className="md:flex md:flex-row md:justify-between md:items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-[24px] font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`shadow appearance-none border xl:w-[500px] md:w-[300px]  lg:w-[400px] ${
                  errors.name ? 'border-red-500' : ''
                } rounded w-full py-2 px-3 text-gray-700`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-[24px] font-bold mb-2"
                htmlFor="email"
              >
                Email id
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`shadow appearance-none border xl:w-[500px] md:w-[300px] lg:w-[400px]  ${
                  errors.email ? 'border-red-500' : ''
                } rounded w-full py-2 px-3 text-gray-700`}
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-[24px] font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`shadow appearance-none border ${
                errors.message ? 'border-red-500' : ''
              } rounded w-full py-2 px-3 text-gray-700`}
              placeholder="Your Message"
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex items-center justify-center ">
            <button
              type="submit"
              className="bg-goldenSand  text-white text-2xl py-2 px-14 focus:outline-none font-semibold focus:shadow-outline rounded-full hover:bg-midnightBlue"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
