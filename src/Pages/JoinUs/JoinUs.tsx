import React, { useState } from "react";

const JoinUs = () => {
  const [form, setForm] = useState({
    organization: "",
    type: "",
    website: "",
    industry: "",
    code: "",
    contact: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const requiredValid =
    form.organization.trim().length > 0 &&
    form.type.trim().length > 0 &&
    form.industry.trim().length > 0 &&
    emailRegex.test(form.contact.trim());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!requiredValid) return;

    const lines = [
      `Organization Name: ${form.organization}`,
      `Organization Type: ${form.type}`,
      `Website URL: ${form.website}`,
      `Industry: ${form.industry}`,
      `Code Repository URL: ${form.code}`,
      `Contact Email: ${form.contact}`,
    ];

    const subject = encodeURIComponent("Alliance Application");
    const body = encodeURIComponent(lines.join("\n"));
    const mailto = `mailto:apply@payto.onl?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Join Alliance
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            We are always looking for new members to join our alliance. If you are interested in joining, please fill out the form below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-1 md:grid-cols-2"
        >
          {[
            { label: "Organization Name *", name: "organization", type: "text" },
            { label: "Organization Type *", name: "type", type: "text", placeholder: "LLC, Inc., etc." },
            { label: "Website URL", name: "website", type: "text" },
            { label: "Industry *", name: "industry", type: "text" },
            { label: "Code Repository URL", name: "code", type: "text" },
            { label: "Contact Email *", name: "contact", type: "email" },
          ].map((field, index) => (
            <div key={index} className="md:col-span-1">
              <label
                htmlFor={field.name}
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type as React.HTMLInputTypeAttribute}
                value={(form as any)[field.name]}
                onChange={handleChange}
                className="w-full rounded border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                placeholder={field.placeholder}
                required={["organization", "type", "industry", "contact"].includes(field.name)}
              />
            </div>
          ))}

          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              disabled={!requiredValid}
              className="w-full inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send Request via Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
