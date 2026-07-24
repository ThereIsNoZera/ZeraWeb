import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ArchiveButton } from "./ActionButtons";

export interface VisitCardFormData {
  name: string;
  role: string;
  handle: string;
  comment: string;
}

interface VisitCardOverlayProps {
  onClose: () => void;
  onCreate?: (data: VisitCardFormData) => void;
}

interface FieldErrors {
  name?: string;
}

interface InputFieldProps {
  id: string;
  label: string;
  sublabel: string;
  value: string;
  maxLength: number;
  error?: string;
  autoFocus?: boolean;
  onChange: (value: string) => void;
}

function InputField({
  id,
  label,
  sublabel,
  value,
  maxLength,
  error,
  autoFocus,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex w-full flex-col items-start">
      <label
        className="mb-[6px] font-clash leading-none tracking-[0.64px] text-black"
        htmlFor={id}
      >
        <span className="text-[16px]">{label} </span>

        <span className="text-[12px] text-black/60">{sublabel}</span>
      </label>

      <input
        autoFocus={autoFocus}
        className={[
          "h-[34px] w-full rounded-[4px] border-2 bg-[#d9d9d9]",
          "px-[10px] py-[5px] font-clash text-[16px]",
          "tracking-[0.64px] text-black outline-none",
          "transition-colors duration-150",
          "focus:border-[#ffd300]",
          error ? "border-[#c0392b]" : "border-[rgba(0,0,0,0.8)]",
        ].join(" ")}
        id={id}
        maxLength={maxLength}
        onChange={(event) => onChange(event.target.value)}
        type="text"
        value={value}
      />

      {error && (
        <p className="mb-0 mt-[4px] font-clash text-[11px] tracking-[0.4px] text-[#c0392b]">
          {error}
        </p>
      )}
    </div>
  );
}

export function VisitCardOverlay({ onClose, onCreate }: VisitCardOverlayProps) {
  const [form, setForm] = useState<VisitCardFormData>({
    name: "",
    role: "",
    handle: "",
    comment: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const scrollPosition = window.scrollY;

    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyLeft = document.body.style.left;
    const previousBodyRight = document.body.style.right;
    const previousBodyWidth = document.body.style.width;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.left = previousBodyLeft;
      document.body.style.right = previousBodyRight;
      document.body.style.width = previousBodyWidth;
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;

      window.removeEventListener("keydown", handleKeyDown);

      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: "auto",
      });
    };
  }, [onClose]);

  const updateField = (field: keyof VisitCardFormData) => (value: string) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));

    if (field === "name" && errors.name) {
      setErrors({});
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim()) {
      setErrors({
        name: "Name is required.",
      });

      return;
    }

    const cleanedForm: VisitCardFormData = {
      name: form.name.trim(),
      role: form.role.trim(),
      handle: form.handle.trim(),
      comment: form.comment.trim(),
    };

    onCreate?.(cleanedForm);
    setSubmitted(true);
  };

  return createPortal(
    <div
      aria-labelledby="visit-card-dialog-title"
      aria-modal="true"
      className="fixed inset-0 z-[6000] flex items-center justify-center overflow-y-auto bg-[rgba(0,0,0,0.75)] p-[32px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
    >
      <div
        className="relative w-full max-w-[480px] rounded-[12px] bg-[#f5f3eb] shadow-[4px_4px_0_0_rgba(0,0,0,0.15)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Close visit-card form"
          className="absolute right-[16px] top-[12px] z-10 border-0 bg-transparent p-[6px] font-clash text-[28px] font-normal leading-none text-black"
          data-cursor="pointer"
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        {submitted ? (
          <div className="flex min-h-[300px] w-full flex-col items-center justify-center gap-[24px] px-[32px] py-[36px]">
            <h2
              className="m-0 text-center font-clash text-[24px] font-medium tracking-[0.8px] text-black"
              id="visit-card-dialog-title"
            >
              Card created!
            </h2>

            <p className="m-0 text-center font-clash text-[15px] tracking-[0.5px] text-black/60">
              {form.name}
              {form.role && ` · ${form.role}`}
            </p>

            <ArchiveButton label="Done" onClick={onClose} />
          </div>
        ) : (
          <form
            className="flex w-full flex-col items-center gap-[18px] px-[32px] py-[24px]"
            onSubmit={handleSubmit}
          >
            <h2 className="sr-only" id="visit-card-dialog-title">
              Leave a visit card
            </h2>

            <div className="flex w-full flex-col items-start gap-[16px]">
              <InputField
                autoFocus
                error={errors.name}
                id="visit-card-name"
                label="*Name"
                maxLength={30}
                onChange={updateField("name")}
                sublabel="(max: 30)"
                value={form.name}
              />

              <InputField
                id="visit-card-role"
                label="Role"
                maxLength={60}
                onChange={updateField("role")}
                sublabel="(optional, max: 60)"
                value={form.role}
              />

              <InputField
                id="visit-card-handle"
                label="Where can you be found?"
                maxLength={60}
                onChange={updateField("handle")}
                sublabel="(optional, max: 60)"
                value={form.handle}
              />

              <div className="flex w-full flex-col items-start">
                <label
                  className="mb-[6px] font-clash leading-none tracking-[0.64px] text-black"
                  htmlFor="visit-card-comment"
                >
                  <span className="text-[16px]">Leave a comment </span>

                  <span className="text-[12px] text-black/60">
                    (optional, max: 200)
                  </span>
                </label>

                <textarea
                  className="h-[95px] w-full resize-none rounded-[4px] border-2 border-[rgba(0,0,0,0.8)] bg-[#d9d9d9] px-[10px] py-[5px] font-clash text-[16px] tracking-[0.64px] text-black outline-none transition-colors duration-150 focus:border-[#ffd300]"
                  id="visit-card-comment"
                  maxLength={200}
                  onChange={(event) =>
                    updateField("comment")(event.target.value)
                  }
                  value={form.comment}
                />
              </div>
            </div>

            <div className="mt-[2px]">
              <ArchiveButton label="Create!" type="submit" />
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body,
  );
}
