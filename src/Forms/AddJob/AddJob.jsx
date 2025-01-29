import { useState } from "react";

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    logo: "",
    salary: "",
    location: "",
    type: "Full-Time",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Data Submitted:", formData);

    setFormData({
      title: "",
      company: "",
      logo: "",
      salary: "",
      location: "",
      type: "Full-Time",
      description: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="logo"
          placeholder="Company Logo"
          value={formData.logo}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="number"
          name="salary"
          placeholder="salary range"
          value={formData.salary}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Contract">Contract</option>
        </select>
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
