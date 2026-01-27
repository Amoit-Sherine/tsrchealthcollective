"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import Button from "@/components/ui/Button";

type ContactFormData = {
  name: string;
  organization: string;
  email: string;
  topic: string;
  message: string;
  website: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialFormData: ContactFormData = {
  name: "",
  organization: "",
  email: "",
  topic: "General inquiry",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isSubmitting = status === "submitting";

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || "Unable to send your inquiry right now.");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your inquiry right now."
      );
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-olive" htmlFor="name">
            Full name
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-muted/20 bg-white px-4 py-3 text-[1.05rem] text-olive shadow-sm"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-olive" htmlFor="organization">
            Organization
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-muted/20 bg-white px-4 py-3 text-[1.05rem] text-olive shadow-sm"
            id="organization"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-olive" htmlFor="email">
            Email
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-muted/20 bg-white px-4 py-3 text-[1.05rem] text-olive shadow-sm"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-olive" htmlFor="topic">
            Topic
          </label>
          <select
            className="mt-2 w-full rounded-xl border border-muted/20 bg-white px-4 py-3 text-[1.05rem] text-olive shadow-sm"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option>General inquiry</option>
            <option>Government and institutional</option>
            <option>Partnerships</option>
            <option>Careers</option>
          </select>
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-olive" htmlFor="message">
          Message
        </label>
        <textarea
          className="mt-2 w-full rounded-xl border border-muted/20 bg-white px-4 py-3 text-[1.05rem] text-olive shadow-sm"
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" size="lg" loading={isSubmitting}>
          Submit inquiry
        </Button>
        {status === "success" ? (
          <p className="text-sm font-semibold text-olive" role="status">
            Thank you. Your inquiry has been sent.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-semibold text-red-700" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
