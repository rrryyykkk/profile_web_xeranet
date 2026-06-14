import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().min(10, "Nomor HP tidak valid").optional().or(z.literal("")),
  service: z.enum(["it-solutions", "networking", "konsultasi", "lainnya"]),
  message: z.string().min(20, "Pesan minimal 20 karakter"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export default contactSchema;
