import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.BREVO_USER,
                pass: process.env.BREVO_SMTP_KEY,
            },
        });

        const mailOptions = {
            from: '"Vanige Contact Form" <info@vanigedev.com.co>', // Verified company email for SPF/DKIM compliance
            to: 'vanigedevops@gmail.com', // Receiver
            replyTo: email, // Client's email for reply
            subject: `📩 Nuevo Formulario de Contacto: ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
            html: `
        <div style="font-family: 'Open Sans', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            
            <div style="background-color: #0d2f4d; padding: 20px; text-align: center;">
                <img src="https://raw.githubusercontent.com/vanigesas/vanige-website/de1caf2eb0ecc8b3db5c4287d77bc52afabffc77/src/assets/images/logo.png" alt="Vanige Logo" style="max-width: 150px; height: auto; display: block; margin: 0 auto;">
            </div>

            <div style="background-color: #1a4970; color: white; padding: 15px 20px; text-align: center;">
                <h2 style="margin: 0; font-size: 24px;">¡Nueva Solicitud de Contacto!</h2>
            </div>

            <div style="padding: 25px;">
                <p style="font-size: 16px;">Se ha recibido un nuevo mensaje a través del formulario de contacto de tu sitio web.</p>
                
                <div style="background-color: #f0f7ff; padding: 20px; border-radius: 8px; border-left: 6px solid #1a4970; margin-top: 20px;">
                    <h3 style="margin-top: 0; color: #0d2f4d; font-size: 18px;">Datos del Cliente</h3>
                    <p style="margin: 8px 0;"><strong>👤 Nombre:</strong> ${name}</p>
                    <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #1a4970; text-decoration: none;">${email}</a></p>
                </div>
                
                <h3 style="margin-top: 30px; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px; color: #0d2f4d; font-size: 18px;">Mensaje</h3>
                <p style="white-space: pre-wrap; background-color: #ffffff; padding: 15px; border: 1px dashed #cccccc; border-radius: 8px; font-style: italic;">${message}</p>
            </div>

            <div style="text-align: center; padding: 20px; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0; background-color: #f8f8f8;">
                Este mensaje fue enviado automáticamente desde tu formulario de contacto de <a href="https://vanigedev.com.co/" style="color: #1a4970; text-decoration: none;">VanigeDev</a>.
            </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        // Return the specific error message to the client for easier debugging
        return res.status(500).json({ message: error.message || 'Failed to send email' });
    }
}
