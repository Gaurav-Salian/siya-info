
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section 
      id="contact"
      className="py-20 relative"
      style={{ background: 'linear-gradient(180deg, #131B2F 0%, #0A101D 100%)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid-bg bg-tech-grid opacity-10 z-0"></div>
      <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tech-purple/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute right-1/3 bottom-1/2 transform translate-x-1/2 translate-y-1/2 w-80 h-80 bg-tech-blue/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="inline-block text-sm text-tech-purple uppercase tracking-wider mb-2 font-medium bg-tech-purple/20 px-3 py-1 rounded-full">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Let's Start a Conversation</h3>
          <p className="text-white/70">
            Have a project in mind? Contact us today for a free consultation and let's discuss how we can help you achieve your business goals.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info - Left */}
          <div className="lg:col-span-2 space-y-8">
            {/* Card */}
            <div className="bg-navy/70 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-tech-purple/20 p-3 rounded-full mr-4">
                    <svg className="w-5 h-5 text-tech-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">Phone</h5>
                    <p className="text-white/60 mt-1">+91 8652429808</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tech-blue/20 p-3 rounded-full mr-4">
                    <svg className="w-5 h-5 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">Email</h5>
                    <p className="text-white/60 mt-1">info@siyajewelsinfotech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tech-pink/20 p-3 rounded-full mr-4">
                    <svg className="w-5 h-5 text-tech-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">Location</h5>
                    <p className="text-white/60 mt-1">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              
              {/* Social links */}
              <div className="mt-8">
                <h5 className="font-medium mb-4">Connect with us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-tech-purple/20 flex items-center justify-center transition-colors border border-white/10">
                    <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-tech-purple/20 flex items-center justify-center transition-colors border border-white/10">
                    <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8.24999C15.34 8.24999 14.8 8.78999 14.8 9.44999C14.8 10.11 15.34 10.65 16 10.65C16.66 10.65 17.2 10.11 17.2 9.44999C17.2 8.78999 16.66 8.24999 16 8.24999Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.284 2 8.944 2.01 7.877 2.06C6.813 2.11 6.086 2.277 5.45 2.525C4.78218 2.77056 4.17732 3.1417 3.678 3.622C3.19726 4.12136 2.82615 4.72634 2.581 5.395C2.331 6.031 2.164 6.758 2.116 7.822C2.063 8.889 2.05 9.229 2.05 11.945V12.055C2.05 14.771 2.06 15.111 2.11 16.178C2.16 17.242 2.327 17.969 2.575 18.605C2.825 19.279 3.155 19.816 3.675 20.336C4.195 20.856 4.732 21.186 5.406 21.436C6.042 21.686 6.769 21.853 7.833 21.901C8.9 21.954 9.24 21.967 11.956 21.967H12.044C14.76 21.967 15.1 21.957 16.167 21.907C17.231 21.857 17.958 21.69 18.594 21.442C19.2675 21.1969 19.8723 20.8262 20.372 20.347C20.8413 19.8501 21.2078 19.2498 21.451 18.589C21.701 17.953 21.868 17.226 21.916 16.162C21.969 15.095 21.982 14.755 21.982 12.039V11.961C21.982 9.245 21.972 8.905 21.922 7.838C21.872 6.774 21.705 6.047 21.457 5.411C21.2085 4.73216 20.842 4.12343 20.352 3.632C19.8571 3.15921 19.2519 2.79579 18.584 2.551C17.948 2.301 17.221 2.134 16.157 2.086C15.09 2.033 14.75 2.02 12.034 2.02L12 2ZM11.955 4.066H12.045C14.7069 4.06618 15.0313 4.07715 16.0809 4.12732C17.0576 4.17359 17.5931 4.33276 17.9439 4.47419C18.3376 4.62669 18.6695 4.86696 18.9884 5.18589C19.3074 5.50486 19.5476 5.83666 19.7001 6.23033C19.8415 6.5811 20.0007 7.11659 20.047 8.09329C20.0972 9.14294 20.1082 9.46731 20.1084 12.1292V12.1308C20.1084 14.7927 20.0972 15.1171 20.047 16.1667C20.0007 17.1434 19.8415 17.6789 19.7001 18.0297C19.5476 18.4234 19.3074 18.7552 18.9884 19.0741C18.6694 19.3931 18.3376 19.6334 17.9439 19.7859C17.5931 19.9273 17.0576 20.0865 16.0809 20.1328C15.0313 20.183 14.7069 20.1939 12.045 20.1941H11.9549C9.29308 20.1941 8.96865 20.183 7.91895 20.1328C6.94225 20.0865 6.40676 19.9273 6.05599 19.7859C5.66232 19.6334 5.33052 19.3931 5.01159 19.0741C4.69266 18.7552 4.45239 18.4234 4.29989 18.0297C4.1585 17.6789 3.99929 17.1434 3.95302 16.1667C3.90285 15.1171 3.89192 14.7927 3.89166 12.1308V12.1292C3.89166 9.46731 3.90285 9.14294 3.95302 8.09329C3.99933 7.11659 4.1585 6.5811 4.29989 6.23033C4.45239 5.83666 4.69266 5.50486 5.01159 5.18589C5.33052 4.86696 5.66232 4.62669 6.05599 4.47419C6.40676 4.33276 6.94225 4.17359 7.91895 4.12732C8.96859 4.07715 9.29296 4.06618 11.955 4.066ZM12 7.37333C11.1698 7.37336 10.3497 7.55877 9.60389 7.91382C8.85813 8.26888 8.20566 8.78516 7.70064 9.42249C7.19561 10.0598 6.85254 10.7997 6.70119 11.5858C6.54985 12.372 6.59498 13.1814 6.83309 13.9433C7.07119 14.7052 7.49481 15.3973 8.06627 15.9613C8.63774 16.5253 9.34088 16.9393 10.1089 17.1669C10.877 17.3944 11.6905 17.4281 12.4766 17.2658C13.2628 17.1034 13.9994 16.75 14.6307 16.2365C15.2782 15.7086 15.78 15.01 16.1085 14.2177C16.437 13.4254 16.5809 12.56 16.5268 11.695C16.4726 10.8301 16.222 9.99071 15.7982 9.24609C15.3745 8.50147 14.7905 7.87481 14.0936 7.42388C13.3966 6.97294 12.607 6.71344 11.8 6.67001C11.8667 6.66668 11.9334 6.66668 12 6.67001V7.37333ZM12 15.3333C10.1591 15.3333 8.66668 13.8409 8.66668 12C8.66668 10.1591 10.1591 8.66668 12 8.66668C13.8409 8.66668 15.3333 10.1591 15.3333 12C15.3333 13.8409 13.8409 15.3333 12 15.3333Z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-tech-purple/20 flex items-center justify-center transition-colors border border-white/10">
                    <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 8.608V16.75C22 17.9926 20.9926 19 19.75 19H4.25C3.00736 19 2 17.9926 2 16.75V8.608L11.5717 14.6682C11.8257 14.8351 12.1743 14.8351 12.4283 14.6682L22 8.608Z" />
                      <path d="M22 7.11084V7C22 5.75736 20.9926 4.75 19.75 4.75H4.25C3.00736 4.75 2 5.75736 2 7V7.11084L11.9198 13.4402C11.9723 13.4739 12.0277 13.4739 12.0802 13.4402L22 7.11084Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Hours */}
            <div className="bg-navy/70 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/60">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Right */}
          <div className="lg:col-span-3">
            <div className="bg-navy/70 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-6">Send us a message</h4>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-tech-purple/50 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-tech-purple/50 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/80">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-tech-purple/50 text-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2 text-white/80">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-tech-purple/50 text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="ecommerce">E-commerce Solutions</option>
                      <option value="ai">AI Automation</option>
                      <option value="jewelry">Jewelry CAD Design</option>
                      <option value="billing">Billing Software</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-tech-purple/50 text-white"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-purple hover:shadow-lg hover:shadow-tech-purple/20 transition-all py-6">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
