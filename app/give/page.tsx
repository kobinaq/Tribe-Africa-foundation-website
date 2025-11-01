'use client';

import { useState } from 'react';
import { FaHeart, FaCheckCircle } from 'react-icons/fa';
import { getContent } from '@/lib/data';

declare global {
  interface Window {
    PaystackPop: any;
  }
}

export default function GivePage() {
  const content = getContent();
  const { give } = content;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    amount: '',
  });

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const presetAmounts = [20, 50, 100, 500];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setFormData({ ...formData, amount: amount.toString() });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'amount') {
      setSelectedAmount(null); // Clear selected preset when custom amount is entered
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const amountInPesewas = parseFloat(formData.amount) * 100; // Paystack expects amount in pesewas (smallest unit of Ghana Cedis)

    // Initialize Paystack
    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_xxxxxxxxxxxxx', // Replace with actual key
      email: formData.email,
      amount: amountInPesewas,
      currency: 'GHS', // Ghana Cedis
      ref: 'TAF_' + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: 'Donor Name',
            variable_name: 'donor_name',
            value: `${formData.firstName} ${formData.lastName}`,
          },
        ],
      },
      callback: function (response: any) {
        // Payment successful
        alert(`Payment successful! Transaction reference: ${response.reference}`);
        // You can send the reference to your backend for verification
        // Reset form
        setFormData({ firstName: '', lastName: '', email: '', amount: '' });
        setSelectedAmount(null);
      },
      onClose: function () {
        alert('Payment window closed');
      },
    });

    handler.openIframe();
  };

  return (
    <div>
      {/* Paystack Script */}
      <script src="https://js.paystack.co/v1/inline.js" async></script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{give.hero.title}</h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto">
            {give.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{give.impact.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {give.impact.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{item.amount}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-primary-600 text-3xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{give.form.title}</h2>
                <p className="text-gray-600">{give.form.description}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Preset Amount Buttons */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Amount (GHS) *
                  </label>
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 px-4 rounded-lg border-2 font-semibold transition-colors ${
                          selectedAmount === amount
                            ? 'bg-primary-600 border-primary-600 text-white'
                            : 'bg-white border-gray-300 text-gray-700 hover:border-primary-600'
                        }`}
                      >
                        ₵{amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount Field */}
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Or Enter Custom Amount (GHS) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                      ₵
                    </span>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      required
                      min="1"
                      step="0.01"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-blue-900">
                      Your payment is secure and processed through Paystack. You'll receive a receipt
                      via email after your donation.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full btn-primary inline-flex items-center justify-center gap-2">
                  Proceed to Payment
                  <FaHeart />
                </button>
              </form>

              {/* Note */}
              <p className="text-center text-sm text-gray-500 mt-6">
                Tribe Africa Foundation is a registered non-profit organization. Your donation makes a
                real difference in the lives of African children and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Generosity</h2>
          <p className="text-xl text-primary-50 max-w-2xl mx-auto">
            Every donation, no matter the size, brings us closer to our mission of empowering African
            children and eliminating poverty.
          </p>
        </div>
      </section>
    </div>
  );
}
