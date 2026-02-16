
export type Language = 'en' | 'ar';

export const translations = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      services: 'Services',
      howItWorks: 'How it works',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      bookNow: 'Request Service Now'
    },
    hero: {
      badge: 'Available in your area',
      title: 'Home Care',
      titleAccent: 'Reimagined.',
      subtitle: 'Elite home maintenance services powered by expert technicians and instant AI diagnosis. Because your home deserves the best.',
      ctaPrimary: 'Request Service Now',
      ctaSecondary: 'View Pricing',
      stats: 'happy homeowners',
      techCard: {
        badge: 'CERTIFIED PRO',
        status: 'Technician on the way',
        arrival: 'Arriving in 15 mins'
      },
      trustBadges: {
        vetted: 'Vetted Professionals',
        warranty: '30-Day Warranty',
        support: '24/7 Priority Support',
        response: '60-Min Response Time'
      }
    },
    emergency: {
      title: '24/7 Emergency Dispatch',
      subtitle: 'Technician arrives within 60 minutes (subject to location)',
      cta: 'Dispatch Pro Now'
    },
    finalCTA: {
      title: 'Still have questions?',
      subtitle: 'Contact our support team directly for immediate assistance or custom quotes.',
      whatsappLabel: 'WhatsApp Support',
      whatsappNumber: '01210285859',
      emailLabel: 'Email Us',
      emailAddress: 'support@homeservepro.com'
    },
    faq: {
      title: 'Common Questions',
      subtitle: 'Everything you need to know about our premium home services.',
      items: [
        {
          q: 'How does your pricing work?',
          a: 'We use transparent, flat-rate pricing based on the job type. Before any work begins, our technician provides a definitive quote so you never face hidden fees or hourly surprises.'
        },
        {
          q: 'What is covered under the 30-day warranty?',
          a: 'Our "HomeServe Guarantee" covers both labor and parts used for the specific repair. If the same issue arises within 30 days, we return and fix it at no additional cost to you.'
        },
        {
          q: 'Are your technicians background checked?',
          a: 'Yes. Every "Pro" undergoes a rigorous multi-stage vetting process, including criminal background checks, technical skill assessments, and continuous performance monitoring.'
        },
        {
          q: 'How fast can a technician arrive?',
          a: 'For standard bookings, we offer same-day or next-day service. For emergencies, our average dispatch-to-door time is under 60 minutes depending on your specific area.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, Mastercard, Amex), digital wallets (Apple Pay, Google Pay), and secure bank transfers through our mobile app.'
        },
        {
          q: 'Can I get a refund if I am not satisfied?',
          a: 'Customer satisfaction is our priority. If we cannot resolve your issue according to our quality standards, we offer a hassle-free refund policy as part of our service guarantee.'
        },
        {
          q: 'What areas do you currently cover?',
          a: 'We are rapidly expanding. Currently, we cover most major metropolitan areas. You can check your specific zip code directly in our booking form.'
        },
        {
          q: 'How do I reschedule a booking?',
          a: 'You can reschedule or cancel your booking through the confirmation link sent to your phone or by calling our 24/7 support line at least 2 hours before the appointment.'
        },
        {
          q: 'How does the AI Assistant help me?',
          a: 'Our AI is trained on thousands of repair scenarios. It helps you diagnose the urgency of a problem, provides safety tips, and estimates the repair cost before a pro arrives.'
        },
        {
          q: 'Is there a call-out fee?',
          a: 'We charge a small diagnostic fee to cover the technician’s travel and expertise. This fee is waived if you proceed with the repair service with us.'
        }
      ]
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose a plan that fits your home maintenance needs. No hidden surprises.',
      estimated: 'Estimated',
      mostPopular: 'Most Popular',
      cta: 'Book This Plan',
      tiers: {
        basic: {
          name: 'Basic Care',
          price: '$49 - $99',
          desc: 'Perfect for quick fixes and minor repairs.',
          features: ['Single-issue repair', 'Basic AI Diagnosis', '30-Day Warranty', 'Standard Response Time']
        },
        standard: {
          name: 'Standard Pro',
          price: '$129 - $249',
          desc: 'The best value for regular maintenance.',
          features: ['Multi-point inspection', 'Priority AI Support', '60-Day Warranty', '2-Hour Response Time', 'Parts discount (5%)']
        },
        premium: {
          name: 'Premium Elite',
          price: '$349+',
          desc: 'Total peace of mind for complex projects.',
          features: ['Full system overhaul', '24/7 Dedicated Support', '90-Day Warranty', 'Express 1-Hour Arrival', 'Free initial consultation']
        }
      }
    },
    steps: {
      title: 'How it works',
      subtitle: 'Get your home repairs done in three simple, stress-free steps.',
      step1: {
        title: 'Choose Service',
        desc: 'Select from our wide range of professional home services.'
      },
      step2: {
        title: 'Pick your Time',
        desc: 'Book a schedule that fits perfectly with your lifestyle.'
      },
      step3: {
        title: 'Expert Arrives',
        desc: 'A vetted technician arrives at your door to handle the rest.'
      }
    },
    socialProof: {
      title: 'The Gold Standard of Home Care',
      subtitle: 'Thousands of families trust us with their homes. Here is why.',
      ratingLabel: 'Average Rating',
      stats: {
        customers: 'Customers Served',
        responseTime: 'Avg Response Time',
        jobs: 'Jobs Completed',
        min: 'mins'
      },
      testimonials: [
        {
          name: "Emma Davis",
          role: "New Homeowner",
          content: "Booking was so easy. The technician arrived right on time and was incredibly professional. Best service I've ever used!",
          avatar: "https://i.pravatar.cc/150?u=emma"
        },
        {
          name: "Michael Chen",
          role: "Property Manager",
          content: "I use HomeServe for all my rental properties. The background-checked pros give me peace of mind that my tenants are safe.",
          avatar: "https://i.pravatar.cc/150?u=michael"
        },
        {
          name: "Sarah Johnson",
          role: "Homeowner",
          content: "The AI assistant helped me troubleshoot a minor leak before I even called a plumber. Saved me a ton of money!",
          avatar: "https://i.pravatar.cc/150?u=sarah"
        },
        {
          name: "David Wilson",
          role: "Small Business Owner",
          content: "Fast, reliable, and transparent pricing. I don't have to worry about hidden fees anymore. Truly professional work.",
          avatar: "https://i.pravatar.cc/150?u=david"
        },
        {
          name: "Elena Rodriguez",
          role: "Architect",
          content: "As someone in the industry, I have high standards. HomeServe Pro exceeded them with their attention to detail.",
          avatar: "https://i.pravatar.cc/150?u=elena-rodriguez"
        },
        {
          name: "James Taylor",
          role: "Retired Veteran",
          content: "It's hard to find people you can trust these days. Every technician I've met from here has been respectful and skilled.",
          avatar: "https://i.pravatar.cc/150?u=james"
        }
      ]
    },
    features: {
      background: {
        title: 'Background Checked',
        desc: 'Every pro undergoes a rigorous vetting process and multi-state background check.'
      },
      pricing: {
        title: 'Flat-Rate Pricing',
        desc: 'No hidden fees or hourly surprises. You know exactly what you pay before we start.'
      },
      guarantee: {
        title: 'HomeServe Guarantee',
        desc: "If you're not satisfied with the work, we'll make it right at no extra cost to you."
      }
    },
    ai: {
      title: 'Expert Advice,',
      titleAccent: 'Instantly.',
      desc: 'Not sure if you need a pro? Our AI Assistant is trained on thousands of home maintenance scenarios to give you instant guidance and cost estimates.',
      feature1Title: 'Safe Diagnosis',
      feature1Desc: 'Know exactly when to DIY and when to call the experts.',
      feature2Title: '24/7 Availability',
      feature2Desc: 'Get answers to your home repair questions any time of day.',
      assistantName: 'Smart Pro Assistant',
      status: 'Online',
      placeholder: 'e.g., How do I fix a leaky faucet?',
      welcome: "Hello! I'm your HomeServe Pro Assistant. Ask me anything about your home repairs or maintenance!"
    },
    services: {
      title: 'Our Premium Services',
      subtitle: 'Professional care for every corner of your home. Trusted by thousands.',
      cta: 'Book This Service',
      items: {
        plumbing: { title: 'Plumbing', desc: 'Expert leak detection, pipe repair, and fixture installation.' },
        electrical: { title: 'Electrical', desc: 'Safe wiring, panel upgrades, and lighting solutions.' },
        ac: { title: 'AC & HVAC', desc: 'Complete cooling solutions, cleaning, and maintenance.' },
        cleaning: { title: 'Deep Cleaning', desc: 'Professional sanitation for homes and offices.' },
        maintenance: { title: 'Maintenance', desc: 'Regular checkups to keep your home running smoothly.' },
        painting: { title: 'Painting', desc: 'Premium interior and exterior painting services.' },
        carpentry: { title: 'Carpentry', desc: 'Custom woodwork, furniture repair, and installation.' },
        appliances: { title: 'Appliances', desc: 'Expert repair for washers, fridges, and ovens.' }
      }
    },
    booking: {
      title: 'Request Service',
      subtitle: 'Contact us directly via WhatsApp to request service',
      fillFieldsAlert: 'Please fill in all required fields',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Your full name',
      address: 'Detailed Address',
      addressPlaceholder: 'Detailed address (Building, Street, Area)',
      preferredTime: 'Preferred Time',
      preferredTimePlaceholder: 'e.g. Monday 10AM',
      notes: 'Additional Notes (Optional)',
      notesPlaceholder: 'Add any additional details here...',
      selectedService: 'Service',
      selectedPlan: 'Plan',
      sendWhatsApp: 'Send via WhatsApp',
      msgSubject: 'New Home Service Request',
      close: 'Close',
      categories: {
        maintenance: 'General Maintenance',
        emergency: 'Emergency Assistance',
        plumbing: 'Plumbing',
        electrical: 'Electrical',
        hvac: 'HVAC',
        smart: 'Smart Home Setup'
      }
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: May 2024',
      sections: [
        {
          h: 'Information We Collect',
          p: 'We collect information you provide directly to us when requesting services, including your name, address, phone number, and service requirements. We also collect diagnostics provided through our AI assistant.'
        },
        {
          h: 'How We Use Your Data',
          p: 'Your information is used to dispatch technicians, process payments, and improve our services. We may use your contact details to send service updates and promotional offers (you can opt out at any time).'
        },
        {
          h: 'Data Security',
          p: 'We implement industry-standard security measures to protect your personal information. All payment processing is handled by secure, PCI-compliant third-party providers.'
        },
        {
          h: 'Your Rights',
          p: 'You have the right to access, correct, or delete your personal data. Contact our support team to make a request regarding your information.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: May 2024',
      sections: [
        {
          h: 'Service Agreement',
          p: 'By booking a service with HomeServe Pro, you agree to provide accurate information and a safe environment for our technicians to perform the requested work.'
        },
        {
          h: 'Pricing & Payments',
          p: 'Quotes provided by technicians are final. Payments are due upon completion of service unless otherwise agreed. We reserve the right to charge a diagnostic fee for call-outs.'
        },
        {
          h: '30-Day Guarantee',
          p: 'Our work is covered by a 30-day labor warranty. This warranty applies specifically to the repair performed and does not cover new issues or pre-existing conditions unrelated to our work.'
        },
        {
          h: 'Liability',
          p: 'HomeServe Pro is insured for all operations. Our liability is limited to the cost of the specific service provided or the coverage limits of our insurance policies.'
        }
      ]
    },
    guarantee: {
      title: 'Service Guarantee',
      lastUpdated: 'Last Updated: May 2024',
      sections: [
        {
          h: '30-Day Labor Warranty',
          p: 'We stand by our work. If the same issue recurs within 30 days of service, we will return and fix it for free.'
        },
        {
          h: 'Certified Professionals',
          p: 'All our technicians are rigorously vetted and background-checked to ensure the highest standards of safety and quality.'
        },
        {
          h: 'Transparent Pricing',
          p: 'No hidden fees. You get a firm quote before any work begins, so you always know what you are paying for.'
        }
      ]
    },
    cookies: {
      title: 'Cookie Policy',
      lastUpdated: 'Last Updated: May 2024',
      sections: [
        {
          h: 'What are cookies?',
          p: 'Cookies are small text files stored on your device that help us provide a better experience on our website.'
        },
        {
          h: 'How we use them',
          p: 'We use cookies to remember your language preferences, improve performance, and analyze site traffic to serve you better.'
        },
        {
          h: 'Your choices',
          p: 'You can manage or disable cookies through your browser settings, although some features of the site may not function correctly without them.'
        }
      ]
    },
    footer: {
      tagline: 'Professional, reliable, and background-checked home services at your fingertips. From emergency repairs to routine maintenance.',
      copy: 'HomeServe Pro Services Inc. All rights reserved.',
      madeBy: 'Made with ❤️ for modern homeowners.',
      oneLiner: 'Your home deserves nothing but the best professional care.',
      columns: {
        company: 'Company',
        legal: 'Legal'
      },
      links: {
        about: 'About Us',
        careers: 'Careers',
        sustainability: 'Sustainability',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        guarantee: 'Service Guarantee',
        cookies: 'Cookie Policy',
        backToHome: 'Back to Home'
      }
    }
  },
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      howItWorks: 'كيف نعمل',
      pricing: 'الأسعار',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      bookNow: 'اطلب الخدمة الآن'
    },
    hero: {
      badge: 'متوفر في منطقتك',
      title: 'رعاية المنزل',
      titleAccent: 'برؤية جديدة.',
      subtitle: 'خدمات صيانة منزلية متميزة يدعمها فنيون خبراء وتشخيص فوري بالذكاء الاصطناعي. لأن منزلك يستحق الأفضل.',
      ctaPrimary: 'اطلب الخدمة الآن',
      ctaSecondary: 'عرض الأسعار',
      stats: 'صاحب منزل سعيد',
      techCard: {
        badge: 'محترف معتمد',
        status: 'الفني في الطريق',
        arrival: 'يصل خلال 15 دقيقة'
      },
      trustBadges: {
        vetted: 'خبراء مفحوصون',
        warranty: 'ضمان لمدة 30 يوماً',
        support: 'دعم ذو أولوية 24/7',
        response: 'استجابة خلال 60 دقيقة'
      }
    },
    emergency: {
      title: 'طوارئ 24/7',
      subtitle: 'فني خلال 60 دقيقة (حسب المنطقة)',
      cta: 'اطلب فني طوارئ الآن'
    },
    finalCTA: {
      title: 'هل ما زلت تملك تساؤلات؟',
      subtitle: 'تواصل مع فريق الدعم لدينا مباشرة للحصول على مساعدة فورية أو عروض أسعار مخصصة.',
      whatsappLabel: 'دعم عبر واتساب',
      whatsappNumber: '01210285859',
      emailLabel: 'أرسل لنا بريداً',
      emailAddress: 'support@homeservepro.com'
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'كل ما تحتاج لمعرفته حول خدماتنا المنزلية المتميزة.',
      items: [
        {
          q: 'كيف تعمل آلية التسعير لديكم؟',
          a: 'نستخدم تسعيراً ثابتاً وشفافاً يعتمد على نوع المهمة. قبل بدء أي عمل، يقدم الفني عرض سعر نهائي بحيث لا تواجه أي رسوم مخفية أو مفاجآت سعرية.'
        },
        {
          q: 'ما الذي يغطيه ضمان الـ 30 يوماً؟',
          a: 'يغطي "ضمان هوم سيرف" كلاً من أجور العمل وقطع الغيار المستخدمة في الإصلاح. إذا ظهرت نفس المشكلة خلال 30 يوماً، نعود ونصلحها دون أي تكلفة إضافية.'
        },
        {
          q: 'هل الفنيون لديكم مفحوصون أمنياً؟',
          a: 'نعم، يخضع كل "محترف" لعملية تدقيق صارمة متعددة المراحل، تشمل فحص السجل الجنائي، وتقييم المهارات الفنية، ومراقبة مستمرة للأداء.'
        },
        {
          q: 'ما هي سرعة وصول الفني؟',
          a: 'للحجوزات العادية، نقدم الخدمة في نفس اليوم أو اليوم التالي. أما لحالات الطوارئ، فإن متوسط وقت الوصول أقل من 60 دقيقة حسب منطقتك.'
        },
        {
          q: 'ما هي طرق الدفع التي تقبلونها؟',
          a: 'نقبل جميع بطاقات الائتمان الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، والمحافظ الرقمية (Apple Pay، Google Pay)، والتحويلات البنكية الآمنة.'
        },
        {
          q: 'هل يمكنني استرداد أموالي إذا لم أكن راضياً؟',
          a: 'رضا العملاء هو أولويتنا القصوى. إذا لم نتمكن من حل مشكلتك وفقاً لمعايير الجودة لدينا، فنحن نوفر سياسة استرداد سهلة كجزء من ضمان الخدمة.'
        },
        {
          q: 'ما هي مناطق التغطية الحالية؟',
          a: 'نحن نتوسع بسرعة. حالياً، نغطي معظم المناطق الحضرية الكبرى. يمكنك التحقق من تغطية منطقتك مباشرة عبر نموذج الحجز الخاص بنا.'
        },
        {
          q: 'كيف يمكنني إعادة جدولة الموعد؟',
          a: 'يمكنك إعادة الجدولة أو الإلغاء عبر رابط التأكيد المرسل لهاتفك أو بالاتصال بخط الدعم 24/7 قبل ساعتين على الأقل من الموعد.'
        },
        {
          q: 'كيف يساعدني مساعد الذكاء الاصطناعي؟',
          a: 'تم تدريب ذكائنا الاصطناعي على آلاف سيناريوهات الإصلاح. يساعدك في تشخيص مدى إلحاح المشكلة، ويقدم نصائح أمان، ويقدر تكلفة الإصلاح.'
        },
        {
          q: 'هل توجد رسوم للمعاينة؟',
          a: 'نحن نفرض رسوم تشخيص بسيطة لتغطية تكاليف انتقال وخبرة الفني. يتم إعفاء العميل من هذه الرسوم إذا قرر المتابعة في عملية الإصلاح معنا.'
        }
      ]
    },
    pricing: {
      title: 'تسعير بسيط وشفاف',
      subtitle: 'اختر الخطة التي تناسب احتياجات صيانة منزلك. لا توجد مفاجآت خفية.',
      estimated: 'تقديري',
      mostPopular: 'الأكثر طلباً',
      cta: 'احجز هذه الخطة',
      tiers: {
        basic: {
          name: 'العناية الأساسية',
          price: '$49 - $99',
          desc: 'مثالي للإصلاحات السريعة والبسيطة.',
          features: ['إصلاح مشكلة واحدة', 'تشخيص أساسي بالذكاء الاصطناعي', 'ضمان لمدة 30 يوماً', 'وقت استجابة قياسي']
        },
        standard: {
          name: 'ستاندرد برو',
          price: '$129 - $249',
          desc: 'أفضل قيمة للصيانة الدورية.',
          features: ['فحص نقاط متعددة', 'دعم ذكي ذو أولوية', 'ضمان لمدة 60 يوماً', 'استجابة خلال ساعتين', 'خصم 5% على قطع الغيار']
        },
        premium: {
          name: 'بريميوم إيليت',
          price: '$349+',
          desc: 'راحة بال تامة للمشاريع المعقدة.',
          features: ['إصلاح شامل للنظام', 'دعم مخصص 24/7', 'ضمان لمدة 90 يوماً', 'وصول سريع خلال ساعة', 'استشارة أولية مجانية']
        }
      }
    },
    steps: {
      title: 'كيف نعمل',
      subtitle: 'احصل على إصلاحات منزلك في ثلاث خطوات بسيطة وخالية من الإجهاد.',
      step1: {
        title: 'اختر الخدمة',
        desc: 'اختر من بين مجموعتنا الواسعة من الخدمات المنزلية الاحترافية.'
      },
      step2: {
        title: 'حدد موعدك',
        desc: 'احجز جدولاً زمنياً يناسب نمط حياتك تماماً.'
      },
      step3: {
        title: 'وصول الخبير',
        desc: 'يصل فني معتمد إلى باب منزلك للقيام بالباقي.'
      }
    },
    socialProof: {
      title: 'المعيار الذهبي لرعاية المنزل',
      subtitle: 'آلاف العائلات تثق بنا في منازلها. إليك السبب.',
      ratingLabel: 'متوسط التقييم',
      stats: {
        customers: 'عميل تم خدمتهم',
        responseTime: 'سرعة الاستجابة',
        jobs: 'عملية مكتملة',
        min: 'دقيقة'
      },
      testimonials: [
        {
          name: "إيما ديفيس",
          role: "صاحبة منزل جديدة",
          content: "كان الحجز سهلاً للغاية. وصل الفني في الوقت المحدد تماماً وكان محترفاً للغاية. أفضل خدمة استخدمتها على الإطلاق!",
          avatar: "https://i.pravatar.cc/150?u=emma"
        },
        {
          name: "مايكل تشن",
          role: "مدير عقارات",
          content: "أستخدم هوم سيرف لجميع عقاراتي المؤجرة. المحترفون المفحوصون يمنحونني راحة البال بأن المستأجرين في أمان.",
          avatar: "https://i.pravatar.cc/150?u=michael"
        },
        {
          name: "سارة جونسون",
          role: "صاحبة منزل",
          content: "ساعدني مساعد هوم سيرف برو في حل مشكلة تسرب بسيط قبل أن أتصل بالسباك. وفر لي الكثير من المال!",
          avatar: "https://i.pravatar.cc/150?u=sarah"
        },
        {
          name: "داود ويلسون",
          role: "صاحب عمل صغير",
          content: "تسعير سريع وموثوق وشفاف. لا داعي للقلق بشأن الرسوم المخفية بعد الآن. عمل احترافي حقاً.",
          avatar: "https://i.pravatar.cc/150?u=david"
        },
        {
          name: "إيلينا رودريغيز",
          role: "مهندسة معمارية",
          content: "كشخص يعمل في هذا المجال، لدي معايير عالية. لقد تجاوزت هوم سيرف برو توقعاتي باهتمامهم بالتفاصيل.",
          avatar: "https://i.pravatar.cc/150?u=elena-rodriguez"
        },
        {
          name: "جيمس تايلور",
          role: "محارب قديم متقاعد",
          content: "من الصعب العثور على أشخاص يمكنك الوثوق بهم هذه الأيام. كل فني قابلته هنا كان محترماً وماهراً.",
          avatar: "https://i.pravatar.cc/150?u=james"
        }
      ]
    },
    features: {
      background: {
        title: 'فحص السجل الجنائي',
        desc: 'يخضع كل محترف لعملية تدقيق صارمة وفحص للخلفية الجنائية لضمان سلامتك.'
      },
      pricing: {
        title: 'أسعار ثابتة',
        desc: 'لا توجد رسوم خفية أو مفاجآت بالساعة. ستعرف بالضبط ما ستدفعه قبل أن نبدأ.'
      },
      guarantee: {
        title: 'ضمان هوم سيرف',
        desc: 'إذا لم تكن راضيًا عن العمل، فسنقوم بإصلاحه دون أي تكلفة إضافية عليك.'
      }
    },
    ai: {
      title: 'نصيحة الخبراء،',
      titleAccent: 'فوراً.',
      desc: 'لست متأكدًا مما إذا كنت بحاجة إلى محترف؟ تم تدريب مساعدنا الذكي على آلاف سيناريوهات الصيانة المنزلية لتقديم إرشادات فورية وتقديرات للتكلفة.',
      feature1Title: 'تشخيص آمن',
      feature1Desc: 'تعرف بالضبط متى يمكنك القيام بذلك بنفسك ومتى يجب استدعاء الخبراء.',
      feature2Title: 'متاح 24/7',
      feature2Desc: 'احصل على إجابات لأسئلتك حول إصلاح المنزل في أي وقت من اليوم.',
      assistantName: 'مساعد المحترفين الذكي',
      status: 'متصل',
      placeholder: 'مثلاً: كيف أصلح صنبوراً يسرب؟',
      welcome: "مرحباً! أنا مساعد HomeServe Pro. اسألني أي شيء عن إصلاحات منزلك أو صيانته!"
    },
    services: {
      title: 'خدماتنا المتميزة',
      subtitle: 'رعاية احترافية لكل ركن من أركان منزلك. يثق بنا الآلاف.',
      cta: 'اطلب الخدمة',
      items: {
        plumbing: { title: 'السباكة', desc: 'كشف التسربات، إصلاح الأنابيب، وتركيب الأدوات الصحية.' },
        electrical: { title: 'الكهرباء', desc: 'تمديدات آمنة، ترقية اللوحات، وحلول الإضاءة.' },
        ac: { title: 'التكييف', desc: 'حلول تبريد كاملة، تنظيف، وصيانة دورية.' },
        cleaning: { title: 'التنظيف العميق', desc: 'تعقيم احترافي للمنازل والمكاتب بأعلى المعايير.' },
        maintenance: { title: 'الصيانة العامة', desc: 'فحوصات دورية للحفاظ على كفاءة منزلك.' },
        painting: { title: 'الدهان', desc: 'خدمات دهان داخلية وخارجية متميزة وعصرية.' },
        carpentry: { title: 'النجارة', desc: 'نجارة مخصصة، إصلاح الأثاث، وتركيبات خشبية.' },
        appliances: { title: 'الأجهزة', desc: 'إصلاح خبير للغسالات، الثلاجات، والأفران.' }
      }
    },
    booking: {
      title: 'طلب الخدمة',
      subtitle: 'تواصل معنا مباشرة عبر واتساب لطلب الخدمة',
      fillFieldsAlert: 'يرجى ملء جميع الحقول المطلوبة',
      fullName: 'الاسم الكامل',
      fullNamePlaceholder: 'الاسم بالكامل',
      address: 'العنوان بالتفصيل',
      addressPlaceholder: 'العنوان بالتفصيل (رقم المبنى، الشارع، المنطقة)',
      preferredTime: 'الوقت المفضل',
      preferredTimePlaceholder: 'مثال: الإثنين ١٠ صباحاً',
      notes: 'ملاحظات إضافية (اختياري)',
      notesPlaceholder: 'أضف أي تفاصيل إضافية هنا...',
      selectedService: 'الخدمة المختارة',
      selectedPlan: 'الخطة المختارة',
      sendWhatsApp: 'إرسال عبر واتساب',
      msgSubject: 'طلب خدمة منزلية جديد',
      close: 'إغلاق',
      categories: {
        maintenance: 'صيانة عامة',
        emergency: 'مساعدة طوارئ',
        plumbing: 'السباكة',
        electrical: 'الكهرباء',
        hvac: 'التكييف والتدفئة',
        smart: 'إعداد المنزل الذكي'
      }
    },
    privacy: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: مايو 2024',
      sections: [
        {
          h: 'المعلومات التي نجمعها',
          p: 'نحن نجمع المعلومات التي تقدمها لنا مباشرة عند طلب الخدمات، بما في ذلك اسمك وعنوانك ورقم هاتفك ومتطلبات الخدمة. نجمع أيضاً التشخيصات المقدمة عبر مساعد الذكاء الاصطناعي.'
        },
        {
          h: 'كيفية استخدام بياناتك',
          p: 'تُستخدم معلوماتك لإرسال الفنيين ومعالجة المدفوعات وتحسين خدماتنا. قد نستخدم تفاصيل الاتصال الخاصة بك لإرسال تحديثات الخدمة والعروض الترويجية (يمكنك إلغاء الاشتراك في أي وقت).'
        },
        {
          h: 'أمن البيانات',
          p: 'نحن نطبق معايير أمنية عالية لحماية معلوماتك الشخصية. يتم التعامل مع جميع عمليات الدفع من خلال مزودي خدمات خارجيين آمنين ومتوافقين مع معايير PCI.'
        },
        {
          h: 'حقوقك',
          p: 'لديك الحق في الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها. تواصل مع فريق الدعم لدينا لتقديم طلب بخصوص معلوماتك.'
        }
      ]
    },
    terms: {
      title: 'شروط الخدمة',
      lastUpdated: 'آخر تحديث: مايو 2024',
      sections: [
        {
          h: 'اتفاقية الخدمة',
          p: 'من خلال حجز خدمة مع هوم سيرف برو، فإنك توافق على تقديم معلومات دقيقة وبيئة آمنة لفنيينا للقيام بالعمل المطلوب.'
        },
        {
          h: 'التسعير والمدفوعات',
          p: 'تعتبر عروض الأسعار المقدمة من الفنيين نهائية. تستحق المدفوعات عند الانتهاء من الخدمة ما لم يتم الاتفاق على خلاف ذلك. نحتفظ بالحق في فرض رسوم تشخيص للمعاينة.'
        },
        {
          h: 'ضمان الـ 30 يوماً',
          p: 'عملنا مغطى بضمان عمالة لمدة 30 يوماً. ينطبق هذا الضمان تحديداً على الإصلاح الذي تم إجراؤه ولا يغطي المشكلات الجديدة أو الظروف الموجودة مسبقاً غير المرتبطة بعملنا.'
        },
        {
          h: 'المسؤولية',
          p: 'هوم سيرف برو مؤمن عليها لجميع العمليات. تقتصر مسؤوليتنا على تكلفة الخدمة المحددة المقدمة أو حدود تغطية بوالص التأمين الخاصة بنا.'
        }
      ]
    },
    guarantee: {
      title: 'ضمان الخدمة',
      lastUpdated: 'آخر تحديث: مايو 2024',
      sections: [
        {
          h: 'ضمان عمالة لمدة 30 يوماً',
          p: 'نحن نضمن جودة عملنا. إذا تكررت نفس المشكلة خلال 30 يوماً من الخدمة، فسنعود ونصلحها مجاناً.'
        },
        {
          h: 'محترفون معتمدون',
          p: 'يتم فحص جميع فنيينا بدقة والتحقق من خلفيتهم الجنائية لضمان أعلى معايير السلامة والجودة.'
        },
        {
          h: 'تسعير شفاف',
          p: 'لا توجد رسوم خفية. تحصل على عرض سعر ثابت قبل بدء أي عمل، حتى تعرف دائماً ما تدفع مقابله.'
        }
      ]
    },
    cookies: {
      title: 'سياسة ملفات التعريف',
      lastUpdated: 'آخر تحديث: مايو 2024',
      sections: [
        {
          h: 'ما هي ملفات تعريف الارتباط؟',
          p: 'ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك وتساعدنا في تقديم تجربة أفضل على موقعنا.'
        },
        {
          h: 'كيف نستخدمها',
          p: 'نستخدم ملفات تعريف الارتباط لتذكر تفضيلات اللغة الخاصة بك، وتحسين الأداء، وتحليل حركة مرور الموقع لخدمتك بشكل أفضل.'
        },
        {
          h: 'خياراتك',
          p: 'يمكنك إدارة أو تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك، على الرغم من أن بعض ميزات الموقع قد لا تعمل بشكل صحيح بدونها.'
        }
      ]
    },
    footer: {
      tagline: 'خدمات منزلية احترافية وموثوقة ومفحوصة أمنياً في متناول يدك. من الإصلاحات الطارئة إلى الصيانة الروتينية.',
      copy: 'هوم سيرف برو لخدمات الصيانة. جميع الحقوق محفوظة.',
      madeBy: 'صنع بـ ❤️ لأصحاب المنازل العصريين.',
      oneLiner: 'منزلك لا يستحق إلا أفضل رعاية احترافية.',
      columns: {
        company: 'الشركة',
        legal: 'القسم القانوني'
      },
      links: {
        about: 'من نحن',
        careers: 'الوظائف',
        sustainability: 'الاستدامة',
        contact: 'اتصل بنا',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
        guarantee: 'ضمان الخدمة',
        cookies: 'سياسة ملفات التعريف',
        backToHome: 'العودة للرئيسية'
      }
    }
  }
};
