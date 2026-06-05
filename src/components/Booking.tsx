import React, { useState, useEffect } from 'react';
import { SERVICES } from '../data';
import { Service, BookingDetails } from '../types';
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle, Sparkles, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingProps {
  preselectedService: Service | null;
  clearPreselection: () => void;
}

export default function Booking({ preselectedService, clearPreselection }: BookingProps) {
  // Wizard steps: 1 = Service & DatePicker, 2 = Customer Info & Review
  const [step, setStep] = useState(1);
  const [completeBooking, setCompleteBooking] = useState(false);

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('10:30 AM');
  
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  // Handle preselected services from other screens
  useEffect(() => {
    if (preselectedService) {
      setSelectedServiceId(preselectedService.id);
      // Stay on first step to customize date and slots
      setStep(1);
    }
  }, [preselectedService]);

  // Generate tomorrow and some dates
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1); // starting tomorrow
    return {
      iso: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNum: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' })
    };
  });

  useEffect(() => {
    if (!selectedDate && dates.length > 0) {
      setSelectedDate(dates[0].iso);
    }
  }, []);

  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '12:00 PM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM',
    '06:00 PM',
    '07:30 PM'
  ];

  const handleNextStep = () => {
    if (selectedServiceId && selectedDate && selectedTimeSlot) {
      setStep(2);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerName && customerEmail && customerPhone) {
      setCompleteBooking(true);
      clearPreselection();
    }
  };

  const handleResetBooking = () => {
    setCompleteBooking(false);
    setStep(1);
    setCustomerName('');
    setCustomerEmail('');
    setCustomerPhone('');
    setCustomerNotes('');
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 font-sans text-white">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-gold-400 text-[10px] font-bold tracking-[0.4em] uppercase">
          <Calendar className="h-4 w-4" />
          <span>CONFIDENCE BOOKINGS</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-normal text-white mt-3 mb-6 tracking-tight leading-tight">
          Reserve <span className="italic">Your</span> Grace Hours
        </h1>
        <p className="text-sm leading-relaxed text-white/70 font-light tracking-wide">
          Bespoke facial therapies, hot stone rituals, fine-line tattoo arts, and precision aesthetic procedures. Reserve your expert stylist session.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {completeBooking ? (
          /* SUCCESS CARDS ON CONFIRMATION */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="rounded-none border border-white/10 bg-[#0c0c0c] p-8 text-center"
            key="success-card"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-none bg-gold-400/10 border border-gold-400 text-gold-400 mx-auto mb-6">
              <CheckCircle className="h-9 w-9 text-gold-400" />
            </div>

            <h2 className="font-serif text-3xl font-light text-white uppercase tracking-wider">Appointment Reserved</h2>
            <p className="text-[10px] text-gold-400 mt-2 uppercase font-bold tracking-[0.2em]">FOC Victoria Island Sanctuary</p>

            {/* Recipt block */}
            <div className="mt-8 max-w-md mx-auto rounded-none bg-[#0A0A0A] border border-white/10 p-6 text-left text-xs space-y-3">
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 border-b border-white/10 pb-2">Session Receipt</p>
              
              <div className="flex justify-between"><span className="text-white/40">Treatment:</span> <span className="font-serif font-semibold text-white">{selectedService.name}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Duration:</span> <span className="text-white">{selectedService.duration}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Assigned Hour:</span> <span className="text-gold-400 font-semibold">{selectedDate} &bull; {selectedTimeSlot}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Client Guest:</span> <span className="text-white">{customerName}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Phone Line:</span> <span className="text-white">{customerPhone}</span></div>
              <div className="flex justify-between border-t border-white/10 pt-3 font-semibold text-gold-300"><span className="text-white">Admission Cost:</span> <span className="font-serif font-bold text-white text-base">${selectedService.price}</span></div>
            </div>

            <p className="mt-6 text-xs text-white/50 max-w-lg mx-auto leading-relaxed font-light">
              We have dispatched a booking voucher to <span className="text-white font-medium">{customerEmail}</span>. Our reception concierge will also contact your phone over WhatsApp to double-check safe arrivals and complimentary refreshment preferences.
            </p>

            <button
              onClick={handleResetBooking}
              className="mt-8 rounded-none bg-gold-400 px-8 py-3.5 text-xs font-bold tracking-[0.2em] text-black uppercase hover:bg-gold-300 transition duration-300 cursor-pointer"
              id="booking-reset-btn"
            >
              SCHEDULE ANOTHER SESSION
            </button>
          </motion.div>
        ) : (
          /* BOOKING ENVELOPE FORM WIZARD */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="rounded-none border border-white/10 bg-[#0c0c0c] overflow-hidden"
            key="wizard-card"
          >
            {/* Step navigation indicator */}
            <div className="flex border-b border-white/10 bg-white/[0.01]">
              <div className={`flex-1 py-4 text-center text-[10px] font-bold tracking-[0.2em] uppercase border-r border-white/10 ${step === 1 ? 'text-gold-400 bg-gold-400/5' : 'text-white/30'}`}>
                1. SELECT THERAPY & DATE
              </div>
              <div className={`flex-1 py-4 text-center text-[10px] font-bold tracking-[0.2em] uppercase ${step === 2 ? 'text-gold-400 bg-gold-400/5' : 'text-white/30'}`}>
                2. GUEST DETAILS & REVIEW
              </div>
            </div>

            {/* Step 1: SELECT TREATMENT & CLOCK HOUR */}
            {step === 1 && (
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* 1.1 Choose Service */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 block">Select Desired Wellness Treatment</label>
                  <div className="relative">
                    <select
                      value={selectedServiceId}
                      onChange={(e) => setSelectedServiceId(e.target.value)}
                      className="w-full rounded-none bg-[#0A0A0A] border border-white/10 p-4 font-sans text-xs text-white focus:border-gold-400 focus:outline-none appearance-none cursor-pointer"
                      id="service-dropdown-select"
                    >
                      {SERVICES.map((serv) => (
                        <option key={serv.id} value={serv.id} className="bg-[#111] text-white">
                          [{serv.category}] &bull; {serv.name} &bull; ${serv.price}
                        </option>
                      ))}
                    </select>
                    {/* custom drop arrow accent */}
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold-400">
                      <Sparkles className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* 1.2 Interactive Calendar Date Row */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 block">Pick Admission Date</label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5">
                    {dates.map((d) => {
                      const isSelected = selectedDate === d.iso;
                      return (
                        <button
                          key={d.iso}
                          type="button"
                          onClick={() => setSelectedDate(d.iso)}
                          className={`flex flex-col items-center justify-center py-3 rounded-none border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-gold-400 text-black border-transparent font-bold font-black'
                              : 'bg-[#0A0A0A] border-white/10 text-white/70 hover:bg-gold-400/10 hover:border-gold-400'
                          }`}
                          id={`date-button-${d.iso}`}
                        >
                          <span className="text-[9px] uppercase tracking-wider">{d.dayName}</span>
                          <span className="text-base font-bold my-0.5">{d.dayNum}</span>
                          <span className="text-[9px] font-semibold">{d.month}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 1.3 Available Time Slots */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 block">Pick Timetable Slot</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`flex items-center justify-center gap-1.5 py-3 rounded-none border text-xs font-bold uppercase tracking-wider cursor-pointer transition ${
                            isSelected
                              ? 'bg-gold-400 text-black border-transparent font-black'
                              : 'bg-[#0A0A0A] border-white/10 text-white/70 hover:bg-gold-400/10 hover:border-gold-400'
                          }`}
                          id={`time-slot-${slot.replace(/[\s:]/g, '-')}`}
                        >
                          <Clock className="h-3.5 w-3.5" />
                          <span>{slot}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-white/40 block uppercase tracking-widest text-[9px]">Estimated Charge:</span>
                    <span className="font-serif text-2xl font-normal text-gold-400">${selectedService.price}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="rounded-none bg-gold-400 px-6.5 py-3.5 text-xs font-bold tracking-[0.2em] text-black uppercase hover:bg-gold-300 transition duration-350 cursor-pointer"
                    id="booking-step1-next"
                  >
                    CONFIRM &amp; PROCEED
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: GUEST CONTACT FORMS & RECEIPT OVERVIEW */}
            {step === 2 && (
              <form onSubmit={handleBookingSubmit} className="p-6 sm:p-8 space-y-6">
                <div className="border-b border-white/10 pb-4 mb-4">
                  <h3 className="font-serif text-xl font-normal text-white uppercase tracking-wider">Consignee Guest Details</h3>
                  <p className="text-xs text-white/50 font-light mt-1">Provide customer details to register safe reservation credentials.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-white/50 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-gold-400" />
                      Client Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-xs text-white focus:border-gold-400 focus:outline-none placeholder-white/20 font-light"
                      placeholder="e.g. Genevieve Carter"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-white/50 flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-gold-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-xs text-white focus:border-gold-400 focus:outline-none placeholder-white/20 font-light"
                      placeholder="e.g. genevieve@luxurymail.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-white/50 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-gold-400" />
                      WhatsApp Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-xs text-white focus:border-gold-400 focus:outline-none placeholder-white/20 font-light"
                      placeholder="e.g. +234 812 345 6789"
                    />
                  </div>

                  {/* Special Requests */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-white/50 flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-gold-400" />
                      Special Requests
                    </label>
                    <input
                      type="text"
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-xs text-white focus:border-gold-400 focus:outline-none placeholder-white/20 font-light"
                      placeholder="e.g. Allergy to chamomile, soft lavender oil preference"
                    />
                  </div>
                </div>

                {/* Review summary cards */}
                <div className="rounded-none bg-[#0A0A0A] border border-white/10 p-5 text-xs space-y-2">
                  <p className="font-bold uppercase tracking-wider text-gold-400 text-[10px]">Session Summary Checklist:</p>
                  <p className="text-white/70 font-light">Selected Treatment Code: <span className="text-white font-semibold">{selectedService.name} ({selectedService.duration})</span></p>
                  <p className="text-white/70 font-light">Planned Reservation: <span className="text-gold-400 font-bold">{selectedDate} at {selectedTimeSlot}</span></p>
                </div>

                {/* Form Buttons */}
                <div className="pt-6 border-t border-white/10 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 rounded-none bg-[#0a0a0a] border border-white/10 py-3.5 text-xs font-bold tracking-[0.15em] text-white uppercase hover:bg-white/5 transition"
                  >
                    ADJUST COORDINATES
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-none bg-gold-400 py-3.5 text-xs font-bold tracking-[0.15em] text-black uppercase hover:bg-gold-300 transition duration-300 flex items-center justify-center gap-1 cursor-pointer"
                    id="booking-submit-final"
                  >
                    <Sparkles className="h-4 w-4" />
                    COMPLETE CONFIRMED RESERVATION
                  </button>
                </div>
              </form>
            )}

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
