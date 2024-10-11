import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactMethod: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactMethod: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: '',
      contactMethod: ''
    };
    let valid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      valid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required.';
      valid = false;
    }
    if (!formData.contactMethod) {
      newErrors.contactMethod = 'Please select a contact method.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid, proceed with form submission (e.g., send data to server)
      console.log('Form submitted:', formData);
      // Reset form and errors
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactMethod: ''
      });
      setErrors({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactMethod: ''
      });
    }
  };

  return (
    <div className="px-4 md:px-10 xl:px-24 pt-10 pb-20">
      <h2 className="text-2xl font-semibold text-center mb-8">Send Message</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Map Section */}
        <div className="lg:w-1/2 h-64 lg:h-auto bg-gray-200 rounded-lg overflow-hidden order-2 lg:order-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30267.82417648975!2d73.73104986837488!3d18.507288331762393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bd8b7b31f3e3%3A0xf609f1317bd3b53f!2sAdhipa%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1728623068876!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 flex flex-col gap-4 order-1 lg:order-2"
        >
          {/* Name */}
          <div>
            <label className="block font-medium">Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email ID */}
          <div>
            <label className="block font-medium">Email ID*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-medium">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium">Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              rows={4}
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block font-medium">
              Preferred Contact Method*
            </label>
            <div className="flex items-center gap-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === 'email'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Email
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === 'phone'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Phone
              </label>
            </div>
            {errors.contactMethod && (
              <p className="text-red-500 text-sm">{errors.contactMethod}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-[120px] rounded-full mt-4 p-2 bg-goldenSand text-white font-semibold hover:bg-midnightBlue transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
