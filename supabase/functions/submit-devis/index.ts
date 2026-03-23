import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, services, budget, message } = await req.json();

    // Validate required fields
    if (!name || !email || !services || services.length === 0) {
      return new Response(
        JSON.stringify({ error: "Nom, email et services sont requis" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Format d'email invalide" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("devis_requests").insert({
      name: name.trim().slice(0, 200),
      email: email.trim().slice(0, 255),
      phone: phone?.trim().slice(0, 20) || null,
      company: company?.trim().slice(0, 200) || null,
      services,
      budget: budget || null,
      message: message?.trim().slice(0, 2000) || null,
    });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "Erreur lors de l'enregistrement" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email notification via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const servicesList = services.join(", ");
      const emailBody = `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
        ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ""}
        <p><strong>Services :</strong> ${servicesList}</p>
        ${budget ? `<p><strong>Budget :</strong> ${budget}</p>` : ""}
        ${message ? `<p><strong>Message :</strong> ${message}</p>` : ""}
        <hr>
        <p style="color: #666; font-size: 12px;">Envoyé depuis le site MoovConseils</p>
      `;

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "MoovConseils <onboarding@resend.dev>",
          to: ["contact@moovconseils.com"],
          subject: `Nouveau devis - ${name} | ${servicesList}`,
          html: emailBody,
          reply_to: email,
        }),
      });

      if (!resendRes.ok) {
        console.error("Resend error:", await resendRes.text());
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Erreur serveur" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
