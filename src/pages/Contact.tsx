import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import personalInfo from '../data/personalInfo.json';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'success',
          text: 'Your message has been sent successfully!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage(null);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 md:pl-24">
      <h2 className="section-title" data-aos="fade-right">Contact Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-7xl">
        {/* Contact Information */}
        <div data-aos="fade-right" data-aos-delay="200">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <p className="text-gray-300 mb-8">
            Feel free to reach out to me for any questions, collaboration opportunities,
            or project inquiries. I'm always open to discussing new ideas and challenges.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 bg-primary/20 text-primary rounded-lg mr-4">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-medium text-white">Phone</h4>
                <p className="text-gray-400">{personalInfo.personalInfo.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 bg-primary/20 text-primary rounded-lg mr-4">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-medium text-white">Email</h4>
                <p className="text-gray-400">{personalInfo.personalInfo.email}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 bg-primary/20 text-primary rounded-lg mr-4">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-medium text-white">Location</h4>
                <p className="text-gray-400">{personalInfo.personalInfo.address}</p>
              </div>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-12">
            <h4 className="font-medium text-white mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {personalInfo.socialLinks.map(social => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-100 text-gray-400 hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="text-lg">{social.icon.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div 
          className="glassmorphism p-8 rounded-lg"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          
          {submitMessage && (
            <div className={`p-4 rounded-lg mb-6 ${
              submitMessage.type === 'success' ? 'bg-success/20 text-success' : 'bg-error/20 text-error'
            }`}>
              {submitMessage.text}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`input-field ${errors.name ? 'border-error' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={`input-field ${errors.email ? 'border-error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={`input-field ${errors.subject ? 'border-error' : ''}`}
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p className="text-error text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className={`input-field resize-none ${errors.message ? 'border-error' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-error text-sm mt-1">{errors.message}</p>}
              </div>
              
              <div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;