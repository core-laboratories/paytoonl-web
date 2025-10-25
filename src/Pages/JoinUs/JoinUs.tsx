import React, { useState } from "react";
import { isValid } from "@blockchainhub/ican";

const JoinUs = () => {
  const [form, setForm] = useState({
    organization: "",
    type: "",
    website: "",
    industry: "",
    code: "",
    contact: "",
    core: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const coreIdValid = form.core.trim().length > 0 ? isValid(form.core.trim(), true) : true;
  const emailValid = form.contact.trim().length > 0 ? emailRegex.test(form.contact.trim()) : true;

  const urlRegex = /^https?:\/\/.+/;
  const websiteValid = form.website.trim().length > 0 ? urlRegex.test(form.website.trim()) : true;
  const codeValid = form.code.trim().length > 0 ? urlRegex.test(form.code.trim()) : true;

  const requiredValid =
    form.organization.trim().length > 0 &&
    form.type.trim().length > 0 &&
    form.industry.trim().length > 0 &&
    emailValid &&
    form.core.trim().length > 0 &&
    coreIdValid &&
    websiteValid &&
    codeValid;

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
      `Core ID: ${form.core}`,
    ];

    const subject = encodeURIComponent("Alliance Application");
    const body = encodeURIComponent(lines.join("\n"));
    const mailto = `mailto:application@payto.onl?subject=${subject}&body=${body}`;

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
            If you are interested in joining the Alliance, please fill out the form below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto grid max-w-screen-md gap-4 grid-cols-1 sm:grid-cols-2"
        >
          {[
            { label: "Organization Name *", name: "organization", type: "text", span: "col-span-1" },
            { label: "Organization Type *", name: "type", type: "text", placeholder: "LLC, Inc., etc.", span: "col-span-1" },
            { label: "Industry *", name: "industry", type: "text", span: "col-span-1" },
            { label: "Website URL", name: "website", type: "text", required: false, span: "col-span-1", validation: websiteValid },
            { label: "Code Repository URL", name: "code", type: "text", required: false, span: "col-span-1", validation: codeValid },
            { label: "Contact Email *", name: "contact", type: "email", span: "col-span-1", validation: emailValid },
            { label: "Core ID *", name: "core", type: "text", placeholder: "CB…", span: "col-span-1 sm:col-span-2", validation: coreIdValid },
          ].map((field, index) => (
            <div key={index} className={`${field.span} grid grid-cols-1 gap-1`}>
              <label
                htmlFor={field.name}
                className="text-sm font-medium text-gray-800"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type as React.HTMLInputTypeAttribute}
                value={(form as any)[field.name]}
                onChange={handleChange}
                className={`w-full rounded border px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring resize-none ${
                  field.validation === false
                    ? 'border-rose-300 bg-rose-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
                placeholder={field.placeholder}
                required={field.required === false ? false : true}
              />
              {field.validation === false && field.name === 'core' && (
                <p className="text-sm text-rose-600">Please enter a valid Core ID (CorePass Application)</p>
              )}
              {field.name === 'core' && (
                <p className="text-xs text-gray-500 mt-1 text-center sm:text-left">
                  Get your Core ID from{' '}
                  <a
                    href="https://corepass.net"
                    target="_blank"
                    rel="noopener"
                    className="text-indigo-600 hover:text-indigo-700 underline"
                  >
                    CorePass
                  </a>
                </p>
              )}
              {field.validation === false && field.name === 'contact' && (
                <p className="text-sm text-rose-600">Please enter a valid email address</p>
              )}
              {field.validation === false && field.name === 'website' && (
                <p className="text-sm text-rose-600">Please enter a valid URL (https://…)</p>
              )}
              {field.validation === false && field.name === 'code' && (
                <p className="text-sm text-rose-600">Please enter a valid URL (https://…)</p>
              )}
            </div>
          ))}

          <div className="col-span-1 sm:col-span-2 mt-2">
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
