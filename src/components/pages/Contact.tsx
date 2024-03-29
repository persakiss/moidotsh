// Contact.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    body: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [placeholders, setPlaceholders] = useState({
    name: 'Name',
    email: 'Email',
    body: 'Body',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name) return 'Name required';
    if (!formData.email || !formData.email.includes('@')) return 'Valid email required';
    if (!formData.body || formData.body.length < 20) return 'Body too short';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const text = await res.text();  // convert to plain text

      let data;
      try {
        data = JSON.parse(text);  // parse it to json
      } catch (e) {
        console.error("Couldn't parse JSON: ", text);
        setError('Error parsing server response');
        return;
      }

      if (res.status === 200) {
        console.log('Email sent successfully', data);
        setSuccess('Email sent successfully');
        setPlaceholders(formData);  // Set placeholders to the last submitted data
        setFormData({ name: '', email: '', body: '' });  // Clear the form

      } else {
        console.log('Error sending email', data);
        setError('Error sending email');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Error sending request');
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 h-full pr-2 pl-2 pt-2 bg-gray-100">
      <div className="col-span-2 bg-white p-2 rounded-lg flex flex-col items-center justify-center">
        <h4 className="text-2xl font-bold text-gray-800 -mt-2">Contact Me</h4>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            name="name"
            placeholder={placeholders.name}
            value={formData.name}
            onChange={handleChange}
            className="p-2 rounded mb-2 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder={placeholders.email}
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded mb-2 w-full"
          />
          <textarea
            name="body"
            placeholder={placeholders.body}
            value={formData.body}
            onChange={handleChange}
            className="p-2 rounded mb-2 w-full"
          />
          <div className="flex justify-between items-center">
            <span className="text-red-500">{error}</span>
            <span className="text-green-500">{!error && success}</span>
            <button type="submit" className="p-2 rounded bg-gray-500 text-white">
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
