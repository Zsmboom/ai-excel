import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { PageSEO } from '../components/seo/PageSEO';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: 实现表单提交逻辑
      await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟API调用
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageSEO 
        page="contact"
        lastModified="2025-02-08"
      />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MessageSquare className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* 联系方式 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {t('contact.methods.title')}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {t('contact.methods.email.title')}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        <a href="mailto:support@exceleasy.org" className="hover:text-blue-600">
                          support@exceleasy.org
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    {t('contact.faq.title')}
                  </h2>
                  <div className="space-y-6">
                    {['response', 'support', 'business'].map((item) => (
                      <div key={item} className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          {t(`contact.faq.items.${item}.question`)}
                        </h3>
                        <p className="text-gray-600">
                          {t(`contact.faq.items.${item}.answer`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 联系表单 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {t('contact.form.title')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      {t('contact.form.subject')}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">{t('contact.form.subjectPlaceholder')}</option>
                      <option value="support">{t('contact.form.subjects.support')}</option>
                      <option value="feedback">{t('contact.form.subjects.feedback')}</option>
                      <option value="business">{t('contact.form.subjects.business')}</option>
                      <option value="other">{t('contact.form.subjects.other')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.form.submitting')}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        {t('contact.form.submit')}
                      </span>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-50 rounded-md">
                      <p className="text-green-800">{t('contact.form.success')}</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-50 rounded-md">
                      <p className="text-red-800">{t('contact.form.error')}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 