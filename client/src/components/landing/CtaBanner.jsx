import { useUI } from '../../context/UIContext.jsx';

/** CTA BANNER — ported verbatim from index.html. */
export function CtaBanner() {
  const { openLogin } = useUI();
  return (
    <section className="cta-banner">
      <div className="section-inner">
        <div>
          <div className="section-tag"><div className="section-tag-line"></div><span className="en">Get Started</span><span className="ar">ابدأ الآن</span></div>
          <h2 className="section-title"><span className="en">Ready to make decisions <em>with confidence?</em></span><span className="ar">هل أنت جاهز لاتخاذ قرارات <em>بثقة؟</em></span></h2>
          <p className="section-lead"><span className="en">Access your personalized dashboard or contact us to learn how ROSHD Professional can serve your organization.</span><span className="ar">ادخل إلى المنصة المخصصة أو تواصل معنا لتكتشف كيف يمكن لـ رُشد الاحتراف دعم مؤسستك.</span></p>
        </div>
        <div className="cta-actions">
          <button className="btn-primary" onClick={openLogin}><span className="en">Access Client Portal</span><span className="ar">الدخول إلى بوابة العملاء</span><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
          <a href="#contact" className="btn-ghost"><span className="en">Request a Demo</span><span className="ar">طلب عرض توضيحي</span></a>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
