"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLang } from "@/context/language-context";
import { CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const schema = z.object({
  name: z.string().min(2, "Obrigatório"),
  email: z.email("Email inválido"),
  phone: z.string().min(9, "Obrigatório"),
  company: z.string().min(2, "Obrigatória"),
  sector: z.string().min(1, "Obrigatório"),
  size: z.string().min(1, "Obrigatório"),
  revenue: z.string().min(1, "Obrigatória"),
  challenge: z.string().min(1, "Obrigatório"),
  timeline: z.string().min(1, "Obrigatório"),
  source: z.string().min(1, "Obrigatória"),
  current_tools: z.string().optional(),
  context: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const STEP_FIELDS = [
  ["name", "email", "phone", "company"],
  ["sector", "size", "revenue"],
  ["challenge", "timeline", "source", "current_tools", "context"],
];

// Animated dots for the processing state
function ProcessingDots() {
  return (
    <span className="inline-flex gap-1 ml-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-white inline-block"
          animate={{ opacity: [0.2, 1, 0.2], y: [0, -4, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
        />
      ))}
    </span>
  );
}

// Animated grid lines for the processing overlay
function ProcessingOverlay() {
  const STAGES = [
    { label: "Encriptando dados", duration: 0.0 },
    { label: "Estabelecendo ligação segura", duration: 0.8 },
    { label: "Registando lead", duration: 1.8 },
    { label: "Confirmando envio", duration: 2.8 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 z-20 flex flex-col items-center justify-center"
      style={{ background: "oklch(0.05 0.012 260 / 0.97)", backdropFilter: "blur(12px)" }}
    >
      {/* Animated scan line */}
      <motion.div
        className="absolute inset-x-0 h-px bg-white/20"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner brackets */}
      {[
        "top-6 left-6 border-t border-l",
        "top-6 right-6 border-t border-r",
        "bottom-6 left-6 border-b border-l",
        "bottom-6 right-6 border-b border-r",
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-6 h-6 border-white/30 ${cls}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
        />
      ))}

      <div className="flex flex-col items-center gap-8 px-8 max-w-sm w-full">
        {/* Pulsing ring */}
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute w-20 h-20 rounded-full border border-white/20"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-14 h-14 rounded-full border border-white/30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.div
            className="w-8 h-8 rounded-full bg-white/10 border border-white/50 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-2 h-2 rounded-full bg-white" />
          </motion.div>
        </div>

        {/* Stage labels */}
        <div className="w-full space-y-3">
          {STAGES.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: stage.duration, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: stage.duration + 0.2, duration: 0.3, type: "spring" }}
                className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"
              />
              <span className="font-mono text-[10px] tracking-widest uppercase text-white/60">
                {stage.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full h-px bg-white/10 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
        </div>

        <p className="font-mono text-[10px] tracking-widest uppercase text-white/40 text-center">
          A processar candidatura<ProcessingDots />
        </p>
      </div>
    </motion.div>
  );
}

function BrutalistInput({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}: {
  label: string;
  name: keyof FormData;
  type?: string;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  error?: string;
}) {
  return (
    <div className="relative group w-full">
      <div className="flex items-baseline justify-between mb-2">
        <label className="font-mono text-[10px] font-bold tracking-widest uppercase text-neutral-500 group-focus-within:text-white transition-colors">
          {label}
        </label>
        {error && <span className="font-mono text-[10px] text-red-500 uppercase tracking-widest">{error}</span>}
      </div>
      {type === "textarea" ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          rows={3}
          className="w-full bg-transparent border-b border-white/10 group-focus-within:border-white/40 pb-4 text-lg md:text-xl text-white placeholder:text-neutral-700 focus:outline-none transition-colors resize-none drop-shadow-md"
        />
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-white/10 group-focus-within:border-white/40 pb-4 text-lg md:text-xl text-white placeholder:text-neutral-700 focus:outline-none transition-colors drop-shadow-md"
        />
      )}
    </div>
  );
}

function BrutalistSelect({
  label,
  name,
  options,
  register,
  error,
}: {
  label: string;
  name: keyof FormData;
  options: readonly { readonly value: string; readonly label: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  error?: string;
}) {
  return (
    <div className="relative group w-full">
      <div className="flex items-baseline justify-between mb-2">
        <label className="font-mono text-[10px] font-bold tracking-widest uppercase text-neutral-500 group-focus-within:text-white transition-colors">
          {label}
        </label>
        {error && <span className="font-mono text-[10px] text-red-500 uppercase tracking-widest">{error}</span>}
      </div>
      <select
        {...register(name)}
        className="w-full bg-transparent border-b border-white/10 group-focus-within:border-white/40 pb-4 text-lg md:text-xl text-white appearance-none focus:outline-none transition-colors cursor-pointer drop-shadow-md"
      >
        <option value="" style={{ background: "oklch(0.07 0.012 260)", color: "#737373" }}>Selecionar...</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} style={{ background: "oklch(0.07 0.012 260)", color: "white" }}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function QualificationForm() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const f = t.form.fields;

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    setIsProcessing(true);

    try {
      // Minimum display time so the animation feels intentional (not a flash)
      const [res] = await Promise.all([
        fetch("/api/submit-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }),
        new Promise((r) => setTimeout(r, 3800)), // let the animation breathe
      ]);

      if (!res.ok) throw new Error("Server error");

      setSubmitted(true);
    } catch {
      setSubmitError("Ocorreu um erro ao enviar. Por favor tente novamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  const nextStep = async () => {
    const fieldsToValidate = STEP_FIELDS[step] as (keyof FormData)[];
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 2));
      window.scrollTo({ top: document.getElementById("qualificacao")?.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} id="qualificacao" className="relative py-32 md:py-48 px-6 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">

        {/* LEFT: Context */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="sticky top-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <div className="w-12 h-1 bg-white mb-10" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-[1.05] drop-shadow-xl">
                {t.form.headline}
              </h2>
              <p className="text-lg md:text-xl text-neutral-300 font-medium leading-relaxed max-w-md mb-12 drop-shadow-md">
                {t.form.sub}
              </p>

              {!submitted && (
                <div className="flex flex-col gap-6">
                  {[0, 1, 2].map((idx) => (
                    <div key={idx} className={`flex items-center gap-4 transition-opacity duration-500 ${step === idx ? "opacity-100" : "opacity-30"}`}>
                      <span className="font-mono text-sm font-bold tracking-widest text-white">{`0${idx + 1}`}</span>
                      <div className={`h-px transition-all duration-700 ${step === idx ? "w-12 bg-white" : "w-4 bg-white/50"}`} />
                      <span className="font-mono text-xs font-bold tracking-widest uppercase text-white drop-shadow-sm">
                        {idx === 0 && "Identidade"}
                        {idx === 1 && "Métricas"}
                        {idx === 2 && "Arquitetura"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="lg:col-span-7 relative">
          
          {/* Processing overlay — sits on top of the form */}
          <AnimatePresence>
            {isProcessing && <ProcessingOverlay />}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex flex-col h-full justify-center pt-10"
              >
                <CheckCircle2 size={48} className="text-white mb-8" />
                <h3 className="text-4xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
                  {t.form.success.title}
                </h3>
                <p className="text-xl text-neutral-300 leading-relaxed mb-8 max-w-lg drop-shadow-sm">
                  {t.form.success.desc}
                </p>
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400">
                  {t.form.success.note}
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="pt-2">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, position: "absolute" }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="space-y-12 md:space-y-16"
                >
                  {step === 0 && (
                    <>
                      <BrutalistInput label={f.name} name="name" placeholder="John Doe" register={register} error={errors.name?.message} />
                      <BrutalistInput label={f.email} name="email" type="email" placeholder="john@empresa.com" register={register} error={errors.email?.message} />
                      <BrutalistInput label={f.phone} name="phone" placeholder="+351 912 345 678" register={register} error={errors.phone?.message} />
                      <BrutalistInput label={f.company} name="company" placeholder="Empresa S.A." register={register} error={errors.company?.message} />
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <BrutalistSelect label={f.sector} name="sector" options={f.sector_options || []} register={register} error={errors.sector?.message} />
                      <BrutalistSelect label={f.size} name="size" options={f.size_options || []} register={register} error={errors.size?.message} />
                      <BrutalistSelect label={f.revenue} name="revenue" options={f.revenue_options || []} register={register} error={errors.revenue?.message} />
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <BrutalistSelect label={f.challenge} name="challenge" options={f.challenge_options || []} register={register} error={errors.challenge?.message} />
                      <BrutalistSelect label={f.timeline} name="timeline" options={f.timeline_options || []} register={register} error={errors.timeline?.message} />
                      <BrutalistSelect label={f.source} name="source" options={f.source_options || []} register={register} error={errors.source?.message} />
                      <BrutalistInput label={f.current_tools} name="current_tools" placeholder={f.current_tools_placeholder} register={register} />
                      <BrutalistInput label={f.context} name="context" type="textarea" placeholder={f.context_placeholder} register={register} />
                    </>
                  )}
                </motion.div>

                {/* Error message */}
                <AnimatePresence>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-8 flex items-center gap-3 text-red-400"
                    >
                      <AlertCircle size={16} />
                      <span className="font-mono text-xs tracking-widest uppercase">{submitError}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Actions */}
                <div className="mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6">
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => setStep((p) => p - 1)}
                      className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
                    >
                      Voltar
                    </button>
                  )}

                  {step < 2 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="group flex items-center justify-between sm:justify-center gap-4 bg-white/5 backdrop-blur-md border border-white/20 text-white w-full sm:w-auto px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Continuar
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="group flex items-center justify-between sm:justify-center gap-4 bg-white text-black w-full sm:w-auto px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors disabled:opacity-50"
                    >
                      {isProcessing ? "A processar..." : f.submit}
                    </button>
                  )}
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}