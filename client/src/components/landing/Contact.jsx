import { useLanguage } from '../../context/LanguageContext.jsx';
import { useUI } from '../../context/UIContext.jsx';

/** CONTACT section + message form — ported verbatim. Submit fires a toast. */
export function Contact() {
  const { isAr, t } = useLanguage();
  const { showToast } = useUI();
  const ph = (en, ar) => (isAr ? ar : en);

  const handleContact = (e) => {
    e && e.preventDefault && e.preventDefault();
    showToast(t("Message sent! We'll get back to you shortly.", 'تم الإرسال! سنتواصل معك قريبًا.'));
  };

  return (
    <section className="contact" id="contact">
      <div className="section-inner">
        <div>
          <div className="section-tag reveal"><div className="section-tag-line"></div><span className="en">Get In Touch</span><span className="ar">تواصل معنا</span></div>
          <h2 className="section-title reveal"><span className="en">Let's turn your idea into <em>measurable results</em></span><span className="ar">لنحوّل فكرتك إلى <em>نتائج قابلة للقياس</em></span></h2>
          <p className="section-lead reveal"><span className="en">Have an initiative or operational challenge? We'll work with you to turn data into clear decisions.</span><span className="ar">لديك مبادرة أو تحدٍ تشغيلي؟ سنعمل معك لتحويل البيانات إلى قرارات واضحة وخطوات قابلة للتنفيذ.</span></p>
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div className="reveal">
              <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '6px' }}><span className="en">Email</span><span className="ar">البريد الإلكتروني</span></div>
              <div style={{ fontSize: '16px', color: 'var(--navy)' }}>info@roshd-professional.com</div>
            </div>
            <div className="reveal">
              <div className="en" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontStyle: 'italic', color: 'var(--navy)' }}>Clarity. Insight. Impact.</div>
              <div className="ar" style={{ fontFamily: "'Cairo',sans-serif", fontSize: '20px', fontWeight: 600, color: 'var(--navy)' }}>وضوح. رؤية. تأثير.</div>
              <div style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '6px' }}><span className="en">Training &amp; Consulting</span><span className="ar">تدريب واستشارات</span></div>
            </div>
          </div>
        </div>
        <div className="contact-form reveal">
          <h3 style={{ fontSize: '26px', fontWeight: 600, color: 'var(--navy)', marginBottom: '28px' }}><span className="en" style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic' }}>Send a Message</span><span className="ar">إرسال الرسالة</span></h3>
          <div className="form-row">
            <div className="form-group"><label className="form-label"><span className="en">First Name</span><span className="ar">الاسم الأول</span></label><input type="text" className="form-input" data-ph-en="Ahmed" data-ph-ar="الاسم الأول" placeholder={ph('Ahmed', 'الاسم الأول')} /></div>
            <div className="form-group"><label className="form-label"><span className="en">Last Name</span><span className="ar">اسم العائلة</span></label><input type="text" className="form-input" data-ph-en="Al-Rashidi" data-ph-ar="اسم العائلة" placeholder={ph('Al-Rashidi', 'اسم العائلة')} /></div>
          </div>
          <div className="form-group"><label className="form-label"><span className="en">Email Address</span><span className="ar">البريد الإلكتروني</span></label><input type="email" className="form-input" data-ph-en="ahmed@company.com" data-ph-ar="ahmed@company.com" placeholder="ahmed@company.com" /></div>
          <div className="form-group"><label className="form-label"><span className="en">Organization / Company</span><span className="ar">الجهة / الشركة</span></label><input type="text" className="form-input" data-ph-en="Your Organization" data-ph-ar="الجهة / الشركة" placeholder={ph('Your Organization', 'الجهة / الشركة')} /></div>
          <div className="form-group"><label className="form-label"><span className="en">Message</span><span className="ar">رسالتك</span></label><textarea className="form-input" data-ph-en="Tell us about your initiative or challenge..." data-ph-ar="اكتب بإيجاز عن التحدي أو الهدف" placeholder={ph('Tell us about your initiative or challenge...', 'اكتب بإيجاز عن التحدي أو الهدف')}></textarea></div>
          <button className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center' }} onClick={handleContact}><span className="en">Send Message</span><span className="ar">إرسال الرسالة</span><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
