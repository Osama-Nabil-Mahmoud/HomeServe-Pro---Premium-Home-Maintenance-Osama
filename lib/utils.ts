
import { Language } from './i18n';

interface RequestData {
  lang: Language;
  service: string;
  plan?: string;
  name: string;
  address: string;
  time: string;
  notes?: string;
}

export const formatServiceMessage = (data: RequestData) => {
  const labels = {
    en: {
      header: 'New Home Service Request',
      lang: 'Language',
      service: 'Service',
      plan: 'Plan',
      name: 'Name',
      address: 'Address',
      time: 'Preferred Time',
      notes: 'Notes'
    },
    ar: {
      header: 'طلب خدمة منزلية جديد',
      lang: 'اللغة',
      service: 'الخدمة',
      plan: 'الخطة',
      name: 'الاسم',
      address: 'العنوان',
      time: 'الوقت المفضل',
      notes: 'ملاحظات'
    }
  };

  const l = labels[data.lang];

  return `*${l.header}*
-------------------------
*${l.lang}:* ${data.lang === 'ar' ? 'العربية' : 'English'}
*${l.service}:* ${data.service}
${data.plan ? `*${l.plan}:* ${data.plan}` : ''}
*${l.name}:* ${data.name}
*${l.address}:* ${data.address}
*${l.time}:* ${data.time}
${data.notes ? `*${l.notes}:* ${data.notes}` : ''}
-------------------------`;
};

export const getWhatsAppUrl = (phone: string, message: string) => {
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
};

export const getEmailUrl = (email: string, subject: string, body: string) => {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
