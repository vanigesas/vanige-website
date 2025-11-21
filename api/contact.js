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
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #007bff; color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0;">¡Nueva Solicitud de Contacto!</h2>
            </div>
            <div style="padding: 20px;">
                <p>Se ha recibido un nuevo mensaje a través del formulario de contacto de tu sitio web.</p>
                
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 5px solid #007bff;">
                    <h3 style="margin-top: 0; color: #007bff;">Datos del Cliente</h3>
                    <p style="margin: 5px 0;"><strong>👤 Nombre:</strong> ${name}</p>
                    <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
                </div>
                
                <h3 style="margin-top: 25px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Mensaje</h3>
                <p style="white-space: pre-wrap; background-color: #fff; padding: 10px; border: 1px dashed #ccc; border-radius: 5px;">${message}</p>
            </div>
            <div style="text-align: center; padding: 15px; font-size: 12px; color: #777; border-top: 1px solid #eee;">
                Este mensaje fue enviado automáticamente desde tu formulario de contacto.
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
