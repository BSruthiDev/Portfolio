
import nodemailer from 'nodemailer';
import { config } from 'dotenv';
config(); 

export const resolvers = {
    Query: {
        resume: (_, __, { req }) => {
            const baseUrl = `${req.protocol}://${req.get('host')}`;
            console.log('Generated base URL:', baseUrl);
            return `${baseUrl}/sruthi-resume.pdf`; 
        }
      },

   Mutation:{
    sendEmail: async (_, { input }) => {
        const { name, email, message } = input;
        
        try {
 
            const transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                  user: process.env.EMAIL_USER,
                  pass: process.env.EMAIL_PASSWORD,  
                },
              });

              
          // Use a mail service like nodemailer to send the email
          await transporter.sendMail({
            from: `${email}`,
            to: 'bandisruthi1991@gmail.com',
            subject: `Contact Form Submission from ${name}`,
            text: `
              Message: ${message}
            `,
          });
  
          return {
            success: true,
            message: 'Email sent successfully!',
          };
        } catch (error) {
          console.error('Error sending email:', error);
          return {
            success: false,
            message: 'Failed to send the email.',
          };
        }
   }
  }
}
