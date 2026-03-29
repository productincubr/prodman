import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", service: "" });

  // Replace with actual Wati / AISensy / Company WhatsApp number
  const WHATSAPP_NUMBER = "9999988493"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi, my name is ${formData.name}. I am interested in exploring your services for: *${formData.service}*.`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Popup */}
      <div
        className={cn(
          "mb-4 w-[320px] origin-bottom-right rounded-2xl bg-[#111] border border-white/10 p-5 shadow-2xl transition-all duration-300 pointer-events-auto",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-white">Let's Talk</h3>
          <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-sm text-white/70 mb-4">
          Tell us what you need, and we'll connect you with our experts on WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#f4a640]"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <select
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#f4a640] appearance-none"
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option value="" className="text-black">Select a Service</option>
            <option value="Branding & Design Strategy" className="text-black">Branding & Design Strategy</option>
            <option value="Web Development & UX/UI" className="text-black">Web Development & UX/UI</option>
            <option value="Social Media Creatives" className="text-black">Social Media Creatives</option>
            <option value="Photography / Podcast Studio" className="text-black">Photography / Podcast Studio</option>
            <option value="Other" className="text-black">Other</option>
          </select>
          
          <button
            type="submit"
            className="w-full bg-[#f4a640] text-black font-semibold rounded-lg px-4 py-2 mt-2 hover:bg-[#e09432] transition"
          >
            Start WhatsApp Chat
          </button>
        </form>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="fill-current w-7 h-7" />
      </button>
    </div>
  );
};

export default WhatsAppWidget;