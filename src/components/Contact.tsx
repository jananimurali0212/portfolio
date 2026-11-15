import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  AlertCircle,
  Check,
  Copy,
  Info,
  Linkedin,
  Mail,
  Send,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { Tilt3D } from './Tilt3D';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMessage, setSubmittedMessage] = useState<FormState | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = 'Please enter your full name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim() || form.subject.trim().length < 3) {
      next.subject = 'Please include a clear subject line.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Please enter a message of at least 10 characters.';
    }
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setSubmittedMessage(null);
      return;
    }
    setSubmittedMessage({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  const handleCopyPreparedMessage = async () => {
    if (!submittedMessage) return;
    const text = `To: ${PROFILE.email}\nFrom: ${submittedMessage.name} (${submittedMessage.email})\nSubject: ${submittedMessage.subject}\n\n${submittedMessage.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPayload(true);
      window.setTimeout(() => setCopiedPayload(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  const buildMailtoHref = (payload: FormState) => {
    const body = `Hi Janani,\n\n${payload.message}\n\nBest regards,\n${payload.name} (${payload.email})`;
    return `mailto:${PROFILE.email}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
        >
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#0D9488]">Contact</p>
            <h2 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Connect for internships &amp; roles
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-[#334155] sm:text-base">
              Open to software development, Artificial Intelligence, Python, full-stack, and
              testing/QA internship opportunities as well as collaborative engineering projects.
            </p>

            <div className="mt-6 space-y-3.5">
              {/* Email */}
              <Tilt3D maxTilt={7} scaleOnHover={1.015}>
                <div className="flex items-center justify-between gap-3 rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs transition-colors hover:border-[#2563EB]">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div
                      style={{ transform: 'translateZ(16px)' }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#2563EB]"
                    >
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#64748B]">Email</p>
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="block truncate text-sm font-semibold text-[#0F172A] hover:text-[#2563EB]"
                      >
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3 text-xs font-medium text-[#334155] whitespace-nowrap transition-colors hover:border-[#2563EB] hover:text-[#0F172A]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#0D9488]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </Tilt3D>

              {/* LinkedIn */}
              <Tilt3D maxTilt={7} scaleOnHover={1.015}>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs transition-colors hover:border-[#2563EB]"
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div
                      style={{ transform: 'translateZ(16px)' }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#2563EB]"
                    >
                      <Linkedin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#64748B]">LinkedIn</p>
                      <p className="truncate text-sm font-semibold text-[#0F172A]">
                        linkedin.com/in/janani-murali0212
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-[#2563EB]">Open</span>
                </a>
              </Tilt3D>

              {/* GitHub */}
              <Tilt3D maxTilt={7} scaleOnHover={1.015}>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs transition-colors hover:border-[#2563EB]"
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div
                      style={{ transform: 'translateZ(16px)' }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#0F172A]"
                    >
                      <TechIcon id="github" className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#64748B]">GitHub</p>
                      <p className="truncate text-sm font-semibold text-[#0F172A]">
                        github.com/jananimurali0212
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-[#2563EB]">Open</span>
                </a>
              </Tilt3D>
            </div>
          </div>

          {/* Right Column: Validated Contact Form with Honest Backend Notice */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-xs sm:p-6">
              <h3 className="font-display text-xl font-bold text-[#0F172A]">Send a Message</h3>
              <p className="mt-1 text-xs text-[#64748B]">
                Validated contact composer. Direct server delivery requires configuring an email API
                or form endpoint; validated messages can be dispatched immediately via your mail
                client.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-3.5">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[#0F172A]"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, name: e.target.value }));
                        if (errors.name) setErrors((err) => ({ ...err, name: undefined }));
                      }}
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                      className="mt-1 h-10 w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-rose-600">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[#0F172A]"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, email: e.target.value }));
                        if (errors.email) setErrors((err) => ({ ...err, email: undefined }));
                      }}
                      placeholder="you@company.com"
                      aria-invalid={Boolean(errors.email)}
                      className="mt-1 h-10 w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-rose-600">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-[#0F172A]"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, subject: e.target.value }));
                      if (errors.subject) setErrors((err) => ({ ...err, subject: undefined }));
                    }}
                    placeholder="Internship opportunity / Technical discussion"
                    aria-invalid={Boolean(errors.subject)}
                    className="mt-1 h-10 w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                  />
                  {errors.subject && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-rose-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[#0F172A]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, message: e.target.value }));
                      if (errors.message) setErrors((err) => ({ ...err, message: undefined }));
                    }}
                    placeholder="Share role details, interview availability, or project context..."
                    aria-invalid={Boolean(errors.message)}
                    className="mt-1 w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] p-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-rose-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-0.5">
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#2563EB] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Prepare &amp; Validate Message</span>
                  </button>
                </div>
              </form>

              {/* Honest Backend Integration Notice + Working Mailto / Copy Fallback */}
              {submittedMessage && (
                <div
                  role="status"
                  className="mt-4 rounded-xl border border-[#0D9488]/35 bg-[#F0FDFA] p-4"
                >
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#0D9488]" aria-hidden="true" />
                    <div className="space-y-2 text-xs leading-relaxed text-[#334155]">
                      <p className="font-semibold text-[#0F172A]">
                        Input validated — Backend email service not configured yet
                      </p>
                      <p>
                        This static portfolio does not run a live SMTP or third-party form backend
                        (such as Formspree, EmailJS, or a{' '}
                        <code className="font-mono font-semibold text-[#0D9488]">
                          POST /api/contact
                        </code>{' '}
                        server route with{' '}
                        <code className="font-mono font-semibold text-[#0D9488]">SMTP_*</code>{' '}
                        credentials). To send your validated message now, launch your email client
                        or copy the formatted note below:
                      </p>

                      <div className="flex flex-wrap items-center gap-2.5 pt-1">
                        <a
                          href={buildMailtoHref(submittedMessage)}
                          className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#2563EB] px-3.5 text-xs font-semibold text-white hover:bg-[#1D4ED8]"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span>Open in Email Client</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyPreparedMessage}
                          className="inline-flex h-9 items-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-3.5 text-xs font-medium text-[#0F172A] hover:border-[#0D9488]"
                        >
                          {copiedPayload ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-[#0D9488]" />
                              <span>Copied Message</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy Formatted Message</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
