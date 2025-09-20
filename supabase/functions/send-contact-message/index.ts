import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactRequest = await req.json();

    console.log("Processing contact form submission:", { name, email, subject });

    // Save message to database
    const { error: dbError } = await supabase
      .from('message')
      .insert({
        name,
        email,
        message: `Subject: ${subject}\n\n${message}`
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save message");
    }

    // Send confirmation email to visitor with warm greeting
    const confirmationEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}! 🌟</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
          <p style="font-size: 18px; color: #333; margin-bottom: 15px;">
            <strong>Your message has been delivered successfully! ✅</strong>
          </p>
          
          <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 15px;">
            I'm genuinely excited to connect with you and learn more about your project or opportunity. 
            Your message means a lot to me, and I truly appreciate you taking the time to reach out! 😊
          </p>
          
          <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 15px;">
            I'll personally review your message and get back to you within 24-48 hours. In the meantime, 
            feel free to explore my portfolio and connect with me on social media! 🚀
          </p>
          
          <div style="background: #e3f2fd; padding: 15px; border-left: 4px solid #2196f3; border-radius: 4px;">
            <p style="margin: 0; color: #1976d2; font-weight: 500;">
              💡 Quick Tip: Follow me on LinkedIn and GitHub to stay updated with my latest projects and tech insights!
            </p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e9ecef;">
          <p style="font-size: 16px; color: #333; margin-bottom: 15px;">
            <strong>Let's stay connected! 🤝</strong>
          </p>
          
          <div style="margin-bottom: 20px;">
            <a href="https://www.linkedin.com/in/gyanesh-dwivedi-698604254/" style="display: inline-block; margin: 5px 10px; padding: 10px 20px; background: #0077b5; color: white; text-decoration: none; border-radius: 5px;">
              LinkedIn 💼
            </a>
            <a href="https://github.com/iotiangyanu/" style="display: inline-block; margin: 5px 10px; padding: 10px 20px; background: #333; color: white; text-decoration: none; border-radius: 5px;">
              GitHub 💻
            </a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
          <p style="color: #666; font-size: 14px; margin: 0;">
            Looking forward to our conversation! 🎯<br>
            <strong>Gyanesh Dwivedi</strong><br>
            IoT Engineer & Tech Enthusiast
          </p>
        </div>
      </div>
    `;

    const confirmationResponse = await resend.emails.send({
      from: "Gyanesh Dwivedi <onboarding@resend.dev>",
      to: [email],
      subject: `Thanks for reaching out, ${name}! 🌟`,
      html: confirmationEmailHtml,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    // Send notification email to your personal email
    const notificationEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #28a745;">
          <h2 style="color: #28a745; margin-top: 0;">📧 New Message from Your Website</h2>
          
          <div style="background: white; padding: 20px; border-radius: 6px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 6px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 6px;">
            <p style="margin: 0; color: #1976d2; font-size: 14px;">
              <strong>Quick Actions:</strong><br>
              • Reply directly to ${email}<br>
              • Check your LinkedIn for connection requests<br>
              • Review their social profiles if mentioned
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
          <p style="color: #666; font-size: 12px; margin: 0;">
            This message was sent by a visitor of your website.
          </p>
        </div>
      </div>
    `;

    const notificationResponse = await resend.emails.send({
      from: "Website Contact Form <onboarding@resend.dev>",
      to: ["g.dwivedi8924@gmail.com"],
      subject: `💼 New Contact: ${name} - ${subject}`,
      html: notificationEmailHtml,
    });

    console.log("Notification email sent:", notificationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message sent successfully! Check your email for confirmation. 📧✨" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-contact-message function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send message. Please try again later.", 
        details: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);